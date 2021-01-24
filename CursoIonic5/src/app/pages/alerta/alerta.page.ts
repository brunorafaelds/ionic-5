import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async alerta(){
    const alert = await this.alertCtrl.create({
      header : 'Alert',
      subHeader : 'Subtitle',
      message : 'This is an alert message.',
      buttons : ['Ok']
    });

    alert.present();
  }

  async multiplos(){
    const alert =  await this.alertCtrl.create({
      header : 'Alert',
      subHeader : 'Subtitle',
      message : 'This is an alert message.',
      buttons : ['Cancel', 'Open Modal', 'Ok']
    });

    await alert.present();
  }

  async confirme() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async prompt(){    
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Prompt!',
        inputs: [
          {
            name: 'Email',
            type: 'text',
            placeholder: 'Digite seu email'
          },
          {
            name: 'Senha',
            type: 'password',                        
            placeholder: 'Digite sua senha'
           },
        //   // multiline input.
        //   {
        //     name: 'paragraph',
        //     id: 'paragraph',
        //     type: 'textarea',
        //     placeholder: 'Placeholder 3'
        //   },
        //   {
        //     name: 'name3',
        //     value: 'http://ionicframework.com',
        //     type: 'url',
        //     placeholder: 'Favorite site ever'
        //   },
        //   // input date with min & max
        //   {
        //     name: 'name4',
        //     type: 'date',
        //     min: '2017-03-01',
        //     max: '2018-01-12'
        //   },
        //   // input date without min nor max
        //   {
        //     name: 'name5',
        //     type: 'date'
        //   },
        //   {
        //     name: 'name6',
        //     type: 'number',
        //     min: -5,
        //     max: 10
        //   },
        //   {
        //     name: 'name7',
        //     type: 'number'
        //   },
        //   {
        //     name: 'name8',
        //     type: 'password',
        //     placeholder: 'Advanced Attributes',
        //     cssClass: 'specialClass',
        //     attributes: {
        //       maxlength: 4,
        //       inputmode: 'decimal'
        //     }
        //   }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (form) => {
              console.log(form);
            }
          }
        ]
      });
  
      await alert.present();
    
  }
}
