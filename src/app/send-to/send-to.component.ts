import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-to',
  templateUrl: './send-to.component.html',
  styleUrls: ['./send-to.component.scss']
})
export class SendToComponent implements OnInit {
  name: string;
  constructor(private route:  ActivatedRoute,
   private router: Router) { }
  ngOnInit() {
  //  this.name = this.route.snapshot.params.url;
   console.log(this.name);
   this.route.params.subscribe(params => {
    console.log(params);
    if (params['url']) {
     this.name = params['url'] ;
    }
  });
  this.router.navigate([this.name]);
  }

}
