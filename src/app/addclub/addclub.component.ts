import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../shared/service/firebase.service';

import { Club } from '../shared/modals/club';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent implements OnInit {

  constructor(private firebseService: FirebaseService) { }

  ngOnInit() {
  }

  addClub(formData) {
    console.log(formData);

    this.firebseService.addClub(formData.value).then( (res) => {

      console.log('successfully added');
      console.log(res.id);
      return res.id;
    })
    .then (response => {
      return this.firebseService.addClubManagement(response);
    })
    .then(responseafter => console.log(responseafter))
    .catch(err => console.log(err));
  }

}
