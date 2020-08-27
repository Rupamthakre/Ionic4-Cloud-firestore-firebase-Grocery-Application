import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {HomePageModule} from '../app/home/home.module';
import {SelectgaonComponent} from '../app/selectgaon/selectgaon.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { environment } from '../environments/environment';

import {FirebasedataService} from '../app/firebase/firebasedata.service';
import {ShopsdataService} from '../app/firebase/shopsdata.service';
import {ShopsComponent} from '../app/shops/shops.component';

import {ShoppingPageModule} from './shopping/shopping.module';



@NgModule({
  declarations: [AppComponent,SelectgaonComponent,ShopsComponent],
  entryComponents: [],
  imports: [BrowserModule,HomePageModule,ShoppingPageModule,AngularFireAuthModule,AngularFireModule,AngularFireDatabaseModule,AngularFireStorageModule, IonicModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    FirebasedataService,
    ShopsdataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
