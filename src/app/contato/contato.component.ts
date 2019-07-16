import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public form: FormGroup

  constructor(
    private location: Location,
    private postService: PostService,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      nome: [null],
      email: [null],
      tel: [null],
      site: [null],
      mensagem: [null]
    })
  }

  ngOnInit() {
    window.scroll(0, 0)
    this.postService.pegarIp()
  }

  public enviarContato() {
    let dados = {
      nome: this.form.get('nome').value,
      email: this.form.get('email').value,
      tel: this.form.get('tel').value,
      site: this.form.get('site').value,
      mensagem: this.form.get('mensagem').value
    }

    console.log('mensagem enviada => ', dados)

    this.postService.enviarContato(dados)
      .subscribe(
        () => {
          alert('Sua mensagem foi enviada com sucesso! Obrigado por colaborar com o nosso Portal.')
        },
        error => {
          console.error(error)
          alert('Erro ao enviar sua mensagem. Tente novamente!')
        }
      )
  }

  public goBack() {
    this.location.back()
  }

}
