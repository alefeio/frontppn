import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { Location } from '@angular/common'
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public post: Post[] = []
  public comentarios: Array<any>[] = []
  public relacionados: Post[] = []
  public urlImg = 'http://www.portalparanews.com.br/imgBlog'
  public form: FormGroup

  public positionBg = 'center center'

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nome: [null],
      email: [null],
      site: [null],
      comentario: [null]
    })
  }

  ngOnInit() {
    window.scroll(0, 0)
    this.route.params
      .pipe(switchMap((params: Params) => this.postService.acessoPost(params['url'])))
      .subscribe(() => console.log('acessoPost'))
    this.route.params
      .pipe(switchMap((params: Params) => this.postService.byUrl(params['url'])))
      .subscribe(
        post => {
          this.postService.urlAtual = `${this.postService.urlAtual}/noticia/${post[0].url}`
          this.postService.urlAtual2 = encodeURIComponent(`${this.postService.urlAtual2}/noticia/${post[0].url}`)
          // console.log('urlAtual ', this.postService.urlAtual)
          this.postService.pegarIp()
          this.postService.acesso()
          this.setPost(post)
          this.post[0].img = `${this.urlImg}/${this.post[0].img}`
          this.post[0].thumb = `${this.urlImg}/${this.post[0].thumb}`
          // console.log('Post: ', post)
          this.comentariosPost()
          this.listarRelacionados(this.post[0].url, this.post[0].urlCategoria)
          this.postService.totalCurtidasPost(this.post[0].url)
          this.postService.totalComentariosPost(this.post[0].url)
        },
        () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
      )
    this.postService.postsPopulares()
    this.postService.maisCurtidas()
    this.postService.maisComentadas()
  }

  public enviarComentario() {
    let dados = {
      nome: this.form.get('nome').value,
      email: this.form.get('email').value,
      site: this.form.get('site').value,
      idPost: this.post[0].id,
      comentario: this.form.get('comentario').value
    }

    // console.log('comentário enviado => ', dados)

    this.postService.enviarComentario(dados)
      .subscribe(
        () => {
          alert('Seu comentario foi enviado com sucesso! Obrigado por colaborar com o nosso Portal.')
          this.comentariosPost()
          this.postService.maisComentadas()
        },
        error => {
          console.error(error)
          alert('Erro ao enviar seu comentario. Tente novamente!')
        }
      )
  }

  public curtir() {

    this.postService.curtir(this.post[0].id)
      .subscribe(
        () => {
          this.postService.totalCurtidas++
          this.postService.maisCurtidas()
        },
        error => {
          console.error(error)
          alert('Erro ao enviar seu comentario. Tente novamente!')
        }
      )
  }

  public setPost(post) {
    this.post = post
  }

  public async setCategoriaPost(cat: string) {
    await this.postService.setCatPost(cat)
  }

  public goBack() {
    this.location.back()
  }

  public comentariosPost() {
    this.postService.comentariosPost(this.post[0].id)
      .subscribe(
        coment => {
          this.comentarios = coment
          // console.log('Comentários => ', this.comentarios)
        }
      )
  }

  top() {
    window.scroll(0, 0)
  }

  public listarRelacionados(url, categ) {
    this.postService.relacionados(url, categ)
      .subscribe(
        posts => {
          this.relacionados = posts
          for (let p = 0; p < this.relacionados.length; p++) {
            this.relacionados[p].img = `${this.urlImg}/${this.relacionados[p].img}`
            this.relacionados[p].thumb = `${this.urlImg}/${this.relacionados[p].thumb}`
          }
          // console.log('Relacionados => ', posts)
        }
      )
  }

}
