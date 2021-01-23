import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  goToHome(){
    this.navCtrl.navigateForward('/');
  }

}
