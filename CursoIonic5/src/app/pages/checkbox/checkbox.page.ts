import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  
  meses: any[] = [
    {nomeDoMes: 'Janeiro', value:1, marcado: false},
    {nomeDoMes: 'Fevereiro', value:2, marcado: true},
    {nomeDoMes: 'Março', value:3, marcado: false},
    {nomeDoMes: 'Abril', value:4, marcado: true},

  ]

  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibir(){
    console.log(this.meses);
  }

}
