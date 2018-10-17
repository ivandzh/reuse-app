import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-add-item', 
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item: any = {};
  isLinear = false;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.item.date = new Date(this.item.date).valueOf();
    this.db.list('items').push(this.item)
     .then(_ => {
       this.item = {}
       console.log('success')
     })    
  }
}
