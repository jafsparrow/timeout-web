import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { FirebaseService } from '../shared/service/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  items: Observable<any[]>;
  toprint: Observable<any[]>;
  selectedClub: any = {name: 'Choose a club'};
  constructor(private firebseService: FirebaseService ) {
    this.items = firebseService.getAllClubs().share();
  }

  ngOnInit() {
    // this.firebseService.getAllClubs().subscribe(res => console.log(res));
  }

  viewClub(club) {
    console.log(club);
    this.selectedClub = club;
  }

}
