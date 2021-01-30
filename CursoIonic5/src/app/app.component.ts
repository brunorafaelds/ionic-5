import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;  
  public appPages = [
    {
      title: 'Inicio',
      url: '',
      icon: 'home'
    },    
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'compass'
    },
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct'
    },
    {
      title: 'Alerta',
      url: 'alerta',
      icon: 'alert-circle'
    },
    {
      title: 'Action-Sheet',
      url: 'action-sheet',
      icon: 'construct'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'construct'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'construct'
    },{
      title:'Checkbox',
      url:'checkbox',
      icon:'construct'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
