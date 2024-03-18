import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private route:Router) { }

  ngOnInit(): void {
    // Initialisation du composant
  }
  getlogin(): void{
    this.route.navigateByUrl('/login');
  }
  

}
