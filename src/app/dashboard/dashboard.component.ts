import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuItems = [

    { name: 'Create contact', route: '/dashboard/create-contact'},
      { name: 'Contact list', route: '/dashboard/contact' },

      { name: 'Sign out', route: '/'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
