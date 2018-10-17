import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.scss']
})
export class MakeRequestComponent implements OnInit {

  navLinks = [
    {
      'path':'/make-a-request/items',
      'label':'Items'
    },
    {
      'path':'/when-where',
      'label':'When & Where'
    }
]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  shouldHideTabs() {
    if (this.router.url == '/make-a-request/add-item') {
      return true;
    } else return false;    
  }

  shouldHideTutorial() {
    if (this.router.url !== '/make-a-request') {
      return true;
    } else return false;    
  }

}
