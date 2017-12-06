import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { CustomMaterialModule } from './angular-material.module';


import { AppComponent } from './app.component';
import { FirebaseComponent } from './firebase/firebase.component';

import { FirebaseService } from './shared/service/firebase.service';
import { AddclubComponent } from './addclub/addclub.component';
import { ClubViewComponent } from './club-view/club-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    AddclubComponent,
    ClubViewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
