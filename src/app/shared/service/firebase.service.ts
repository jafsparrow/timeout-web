import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Club } from '../modals/club';

@Injectable()
export class FirebaseService {

  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<any>('clubs');
    this.items = db.collection('items').valueChanges();
  }

  // getAllClubs_old() {
  //   // let data = {};
  //   this.itemsCollection.snapshotChanges().subscribe(res => {
  //     console.log(res[0].payload.doc.id);
  //     console.log(res[0].payload.doc.data());
  //   });
  //   return this.db.collection('clubs').valueChanges();
  // }

  getAllClubs() {
    return this.itemsCollection.snapshotChanges()
      .map(actions => {
        return actions.map( item => {
          const data = item.payload.doc.data();
          const id = item.payload.doc.id;
          return {id, ...data};
        });
      });
  }

  getClubCollections(docId, collectionType) {
    return this.itemsCollection.doc(docId).collection(collectionType).valueChanges();
  }

  addClub(club: Club) {
   return this.itemsCollection.add(club);
  }

  addClubManagement(id: any) {
    const data = { name: 'jafar'};
    return this.itemsCollection.doc(id).collection('management').add(data);
  }
}
