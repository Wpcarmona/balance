import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.page.html',
  styleUrls: ['./on-init.page.scss'],
})
export class OnInitPage implements OnInit {

  token = 'home'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    localStorage.setItem('home',this.token) 
    this.router.navigate(['/home'])

   }

}
