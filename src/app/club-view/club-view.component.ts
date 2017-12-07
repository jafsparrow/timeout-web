import { Club } from '../shared/modals/club';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { FirebaseService } from '../shared/service/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-club-view',
  templateUrl: './club-view.component.html',
  styleUrls: ['./club-view.component.css']
})
export class ClubViewComponent implements OnInit, OnChanges {
  @Input() club: any = {};
  management: Observable<any[]>;
  imageSource = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/P%C3%ABrmeti_Club_Logo.svg/626px-P%C3%ABrmeti_Club_Logo.svg.png';
  constructor(private firebseService: FirebaseService) { }

  ngOnInit() {
    
  }
  
  ngOnChanges() {
    if (this.club.id) {
      this.management = this.firebseService.getClubCollections(this.club.id, 'management');
    } 

  }


}
