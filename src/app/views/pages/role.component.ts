import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'role.component.html'
})
export class RoleComponent implements OnInit {
  ngOnInit(): void {
     this.router.navigate(['/admin'] );
  }

  constructor( private router: Router )  { }

}
