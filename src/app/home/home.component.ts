import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.model';
import { Anuncio } from '../models/anuncio.model';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = []
  public categorias: Categoria[] = []
  public destaquesPrincipais: Post[] = []
  public destaquesLaterais: Post[] = []
  public postsPopulares: Post[] = []
  public maisCurtidas: Post[] = []
  public maisComentadas: Post[] = []
  public noticPara: Post[] = []
  public noticNacionais: Post[] = []
  public atualidades: Post[] = []
  public esporte: Post[] = []
  public educacao: Post[] = []
  public saude: Post[] = []
  public cultura: Post[] = []
  public policia: Post[] = []
  public politica: Post[] = []
  public loterias: Post[] = []
  public jogos: Post[] = []
  public horoscopo: Post[] = []
  public agendaCultural: Post[] = []
  public urlImg = 'http://www.portalparanews.com.br/imgBlog'
  public idsDestaques: number[] = []
  public teste = ''

  constructor(
    private postService: PostService,
    private categoriaService: CategoriaService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    window.scroll(0,0)
    // this.listarPosts()
    this.listarDestaquesPrincipais()
    this.listarDestaquesLaterais()
    this.listarCategorias()
    this.postService.urlAtual = 'http://www.portalparanews.com.br'
    this.postService.acesso()
  }

  public forImg(param, posts) {
    for (let p = 0; p < param.length; p++) {
      param[p].img = `${this.urlImg}/${param[p].img}`
      param[p].thumb = `${this.urlImg}/${param[p].thumb}`
      this.idsDestaques.push(posts[p].id)
    }
  }

  public listarCategorias() {
    this.categoriaService.listar()
      .subscribe(
        categorias => this.categorias = categorias,
        error => console.error(error)
      )
  }

  // public listarPosts() {
  //   this.postService.listarPosts()
  //     .subscribe(
  //       posts => {
  //         this.posts = posts
  //         this.forImg(this.posts)
  //         console.log(posts)
  //       }
  //     )
  // }

  public listarDestaquesPrincipais() {
    this.postService.listarDestaquesPrincipais()
      .subscribe(
        posts => {
          this.destaquesPrincipais = posts
          this.forImg(this.destaquesPrincipais, posts)
          // console.log('Destaques principais => ', posts)
          // console.log(`IDS Destaques => ${this.idsDestaques}`)
        }
      )
  }

  public listarDestaquesLaterais() {
    let categ = ''
    this.postService.listarDestaquesLaterais()
      .subscribe(
        posts => {
          this.destaquesLaterais = posts
          this.forImg(this.destaquesLaterais, posts)
          // console.log('Destaques laterais => ', posts)
          // console.log(`IDS Destaques 2 => ${this.idsDestaques}`)
          this.listarNoticasPara()
        }
      )
  }

  public listarNoticasPara() {
    this.postService.listarNoticiasPara(this.idsDestaques)
      .subscribe(
        posts => {
          this.noticPara = posts
          this.forImg(this.noticPara, posts)
          // console.log('Noticias Para => ', posts)
          this.listarNoticiasNacionais()
        }
      )
  }

  public listarNoticiasNacionais() {
    // console.log('Mandando destaques => ', this.idsDestaques)
    this.postService.listarNoticiasNacionais(this.idsDestaques)
      .subscribe(
        posts => {
          this.noticNacionais = posts
          this.forImg(this.noticNacionais, posts)
          // console.log('Noticias Nacionais => ', posts)
          this.listarPolicia()
          this.listarPolitica()
          this.listarEducacao()
          this.listarSaude()
          this.listarEsporte()
          this.listarAtualidades()
          this.listarCultura()
          this.listarLoterias()
          this.listarJogos()
          this.listarHoroscopo()
          this.listarAgendaCultural()
        }
      )
  }

  public listarAtualidades() {
    let categ = 'Atualidades'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.atualidades = posts
          this.forImg(this.atualidades, posts)
          // console.log('Atualidades => ', posts)
        }
      )
  }

  public listarEsporte() {
    let categ = 'Esporte'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.esporte = posts
          this.forImg(this.esporte, posts)
          // console.log('Esportes => ', posts)
        }
      )
  }

  public listarEducacao() {
    let categ = 'Educação'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.educacao = posts
          this.forImg(this.educacao, posts)
          // console.log('Educacao => ', posts)
        }
      )
  }

  public listarSaude() {
    let categ = 'Saúde'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.saude = posts
          this.forImg(this.saude, posts)
          // console.log('Saúde => ', posts)
        }
      )
  }

  public listarCultura() {
    let categ = 'Cultura'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.cultura = posts
          this.forImg(this.cultura, posts)
          // console.log('Cultura => ', posts)
        }
      )
  }

  public listarPolicia() {
    let categ = 'Polícia'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.policia = posts
          this.forImg(this.policia, posts)
          // console.log('Política => ', posts)
        }
      )
  }

  public listarPolitica() {
    let categ = 'Política'
    this.postService.porCategoria(this.idsDestaques, categ, 3)
      .subscribe(
        posts => {
          this.politica = posts
          this.forImg(this.politica, posts)
          // console.log('Política => ', posts)
        }
      )
  }

  public listarLoterias() {
    let categ = 'Loterias'
    this.postService.porCategoria(this.idsDestaques, categ, 1)
      .subscribe(
        posts => {
          this.loterias = posts
          this.forImg(this.loterias, posts)
          // console.log('Atualidades => ', posts)
        }
      )
  }
  
  public listarJogos() {
    let categ = 'Jogos'
    this.postService.porCategoria(this.idsDestaques, categ, 1)
      .subscribe(
        posts => {
          this.jogos = posts
          this.forImg(this.jogos, posts)
          // console.log('Atualidades => ', posts)
        }
      )
  }

  public listarHoroscopo() {
    let categ = 'Horóscopo'
    this.postService.porCategoria(this.idsDestaques, categ, 1)
      .subscribe(
        posts => {
          this.horoscopo = posts
          this.forImg(this.horoscopo, posts)
          // console.log('Atualidades => ', posts)
        }
      )
  }
  
  public listarAgendaCultural() {
    let categ = 'Agenda Cultural'
    this.postService.porCategoria(this.idsDestaques, categ, 1)
      .subscribe(
        posts => {
          this.agendaCultural = posts
          this.forImg(this.agendaCultural, posts)
          // console.log('Atualidades => ', posts)
        }
      )
  }

}
