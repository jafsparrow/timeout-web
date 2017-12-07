import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseComponent } from './firebase/firebase.component';
import { AddclubComponent } from './addclub/addclub.component';
import { ClubViewComponent } from './club-view/club-view.component';


const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: FirebaseComponent,
     
    },
    {
      path: 'add',
      pathMatch: 'full',
      component: AddclubComponent
    }
  ];


@NgModule({
imports: [
    RouterModule.forRoot(routes),
],
exports: [
    RouterModule
]
})

export class AppRoutingModule { }
