import { Component, OnInit } from '@angular/core';
import { PopoverController, ActionSheetController, AlertController } from '@ionic/angular';
//import { CallNumber } from '@ionic-native/call-number/ngx';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  body: 'Write something good...';
  subject: 'Hello';

  constructor(public popoverController: PopoverController,
              public actionSheetController: ActionSheetController,
             // private callNumber: CallNumber,
              //private socialSharing: SocialSharing,
              private alertController: AlertController) { }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }
 

  
    
  

  

}

