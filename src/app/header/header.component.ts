import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public categorias: Categoria[] = []
  public busca: Post[] = []
  public textoBusca: string = ''
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private categoriaService: CategoriaService, private postService: PostService) { }

  async ngOnInit() {
    this.listarCategorias()

    this.subjectPesquisa.pipe(debounceTime(500)).subscribe(async valor => {
      if (valor != '') {
        await this.fazerPesquisa(valor)
      } else {
        this.busca = [];
      }
    })

    this.postService.qtdAcesso()
  }

  public pesquisar(termoDaBusca: string) {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
    this.textoBusca = ''
  }

  public fazerPesquisa(valor) {
    this.postService.pesquisa(valor)
      .subscribe(
        dados => {
          this.busca = dados
          // console.log(dados)
        }
      )
  }

  public listarCategorias() {
    this.categoriaService.listar()
      .subscribe(
        categorias => {
          // console.log('categorias => ', categorias)
          this.categorias = categorias
          // console.log('thisCategorias => ', this.categorias)
        },
        error => console.error(error)
      )
  }

}
