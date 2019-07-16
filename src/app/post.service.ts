import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public postsUrl: string = this.apiService.urlApi
  public categoriaPostSelecionado: string = ''

  public pPopulares: Post[] = []
  public mCurtidas: Post[] = []
  public mComentadas: Post[] = []

  public totalCurtidas: number = 0
  public totalComentarios: number = 0
  public qAcesso: number = 0

  public publicIP: any

  public urlAtual = 'http://www.portalparanews.com.br'
  public urlAtual2 = 'portalparanews.com.br'
  public urlImg = 'http://www.portalparanews.com.br/imgBlog'

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public pegarIp() {
    this.http.get<any>('https://api.ipify.org?format=json')
      .subscribe(data => {
        this.publicIP = data['ip']
        // console.log('IP => ', this.publicIP)
      })
  }

  public setPostsPopulares(posts) {
    this.pPopulares = posts
    // console.log('Posts Populares no Service => ', this.pPopulares)
  }

  public setMaisCurtidas(posts) {
    this.mCurtidas = posts
    // console.log('Mais Curtidas no Service => ', this.mCurtidas)
  }

  public setMaisComentadas(posts) {
    this.mComentadas = posts
    // console.log('Mais Comentadas no Service => ', this.mComentadas)
  }

  public setQtdAcesso(qtd) {
    this.qAcesso = qtd[0].id.toLocaleString('pt-BR')
    // console.log('Quantidade acesso => ', this.qAcesso)
  }

  public setCatPost(categoria) {
    this.categoriaPostSelecionado = categoria
    // console.log('Categoria post relacionado => ', categoria)
  }

  public acesso() {
    let url_atual = this.urlAtual
    let ip = this.publicIP
    return this.http.post<any>(`${this.postsUrl}/acesso`, { url_atual, ip })
      .subscribe(
        () => this.qtdAcesso()
      )
  }

  public qtdAcesso() {
    return this.http.get<Post[]>(`${this.postsUrl}/qtd-acesso`)
      .subscribe(
        qtd => this.setQtdAcesso(qtd),
        error => console.error(error)
      )
  }

  public enviarComentario(dados) {
    let nome = dados.nome
    let email = dados.email
    let site = dados.site
    let idPost = dados.idPost
    let comentario = dados.comentario
    let ip = this.publicIP
    return this.http.post<any>(`${this.postsUrl}/comentario`, { nome, email, site, idPost, comentario, ip })
  }

  public enviarContato(dados) {
    let nome = dados.nome
    let email = dados.email
    let tel = dados.tel
    let site = dados.site
    let ip = this.publicIP
    let mensagem = dados.mensagem
    return this.http.post<any>(`${this.postsUrl}/contato`, { nome, email, tel, site, ip, mensagem })
  }

  public curtir(idPost) {
    let ip = this.publicIP
    return this.http.post<any>(`${this.postsUrl}/curtir`, { idPost, ip })
  }

  public listarPosts() {
    return this.http.get<Post[]>(`${this.postsUrl}/posts`)
  }

  public listarDestaquesPrincipais() {
    return this.http.get<Post[]>(`${this.postsUrl}/destaques-principais`)
  }

  public listarDestaquesLaterais() {
    return this.http.get<Post[]>(`${this.postsUrl}/destaques-laterais`)
  }

  public postsPopulares() {
    return this.http.get<Post[]>(`${this.postsUrl}/posts-populares`)
      .subscribe(
        posts => {
          this.setPostsPopulares(posts)
          this.forImg(this.pPopulares)
        }
      )
  }

  public maisCurtidas() {
    return this.http.get<Post[]>(`${this.postsUrl}/mais-curtidas`)
      .subscribe(
        posts => {
          this.setMaisCurtidas(posts)
          this.forImg(this.mCurtidas)
        }
      )
  }

  public maisComentadas() {
    return this.http.get<Post[]>(`${this.postsUrl}/mais-comentadas`)
      .subscribe(
        posts => {
          this.setMaisComentadas(posts)
          this.forImg(this.mComentadas)
        }
      )
  }

  public byCategoria(categoria) {
    return this.http.get<Post[]>(`${this.postsUrl}/categoria/${categoria}`)
  }

  public acessoPost(url) {
    return this.http.get<any>(`${this.postsUrl}/acesso-post/${url}`)
  }

  public byUrl(url) {
    return this.http.get<Post[]>(`${this.postsUrl}/noticia/${url}`)
  }

  public totalCurtidasPost(url) {
    return this.http.get<Post[]>(`${this.postsUrl}/total-curtidas-post/${url}`)
      .subscribe(data => {
        this.totalCurtidas = data[0].totalCurtida
        // console.log('IP => ', this.publicIP)
      })
  }

  public totalComentariosPost(url) {
    return this.http.get<Post[]>(`${this.postsUrl}/total-comentarios-post/${url}`)
      .subscribe(data => {
        this.totalComentarios = data[0].totalComentario
        // console.log('IP => ', this.publicIP)
      })
  }

  public pesquisa(pesquisa) {
    return this.http.get<Post[]>(`${this.postsUrl}/pesquisa/${pesquisa}`)
  }

  public comentariosPost(id) {
    return this.http.get<any[]>(`${this.postsUrl}/comentarios-post/${id}`)
  }

  public listarNoticiasPara(ids) {
    return this.http.post<Post[]>(`${this.postsUrl}/noticias-para`, ids)
  }

  public listarNoticiasNacionais(ids) {
    // console.log('NACIONAIS => ', ids)
    let idsD = ''
    for (let i = 0; i < ids.length; i++) {
      idsD += `/${ids[i]}`
    }
    // console.log('idsD => ', idsD)
    return this.http.post<Post[]>(`${this.postsUrl}/noticias-nacionais`, ids)
  }

  public porCategoria(ids, categ, limite) {
    let obj = {
      ids: ids,
      categoria: categ,
      limite: limite
    }
    return this.http.post<Post[]>(`${this.postsUrl}/por-categoria`, obj)
  }

  public relacionados(url, categoria) {
    return this.http.get<Post[]>(`${this.postsUrl}/relacionados/${url}/${categoria}`)
  }

  public forImg(param) {
    for (let p = 0; p < param.length; p++) {
      param[p].img = `${this.urlImg}/${param[p].img}`
      param[p].thumb = `${this.urlImg}/${param[p].thumb}`
    }
  }
}
