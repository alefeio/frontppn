import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Anuncio } from '../models/anuncio.model';
import { AnuncioService } from '../anuncio.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public posts: Post[] = []
  public urlImg = 'http://www.portalparanews.com.br/imgBlog'

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.route.params
            .pipe(switchMap((params: Params) => this.postService.byCategoria(params['categoria'])))
            .subscribe(
                posts => {
                    this.setPosts(posts)
                    for (let p = 0; p < this.posts.length; p++) {
                      this.posts[p].img = `${this.urlImg}/${this.posts[p].img}`
                      this.posts[p].thumb = `${this.urlImg}/${this.posts[p].thumb}`
                    }
                    console.log('Posts: ', posts)
                },
                () => alert('Ocorreu um erro no servidor. Tente mais tarde!')
            )
  }

  public setPosts(posts) {
    this.posts = posts
  }

  public goBack() {
      this.location.back()
  }

}
