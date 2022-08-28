import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.balance();
  }


  balance(){
    document.getElementById('btn').style.transition = 'background-color 0.5s';
    document.getElementById('btn').style.backgroundColor = '#9a24eb';
    document.getElementById('btn2').style.backgroundColor = '#aa49f0 ';
    document.getElementById('balance').style.display = 'block';
    document.getElementById('planificacion').style.display = 'none';
  }

  planificacion(){
    document.getElementById('btn2').style.transition = 'background-color 0.5s';
    document.getElementById('btn2').style.backgroundColor = '#9a24eb';
    document.getElementById('btn').style.backgroundColor = '#aa49f0 ';
    document.getElementById('planificacion').style.display = 'block';
    document.getElementById('balance').style.display = 'none';
    
  }

  otro(){
    
  }

 
}
