import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Anuncio } from '../models/anuncio.model';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-lado-direito',
  templateUrl: './lado-direito.component.html',
  styleUrls: ['./lado-direito.component.css']
})
export class LadoDireitoComponent implements OnInit {

  public anuncio: Anuncio
  public urlImg = 'http://www.portalparanews.com.br/imgBlog'

  constructor(
    private postService: PostService,
    private anuncioService: AnuncioService
  ) { }

  ngOnInit() {
    this.postService.postsPopulares()
    this.postService.maisCurtidas()
    this.postService.maisComentadas()
    this.anuncioLateral()
  }

  public anuncioLateral() {
    this.anuncioService.listar()
      .subscribe(
        anuncio => {
          this.anuncio = anuncio[0]
          this.anuncio.img = `${this.urlImg}/${this.anuncio.img}`
          // console.log(this.anuncio)
        },
        error => console.error(error)
      )
  }

  top() {
    window.scroll(0, 0)
  }

}
