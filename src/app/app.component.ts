import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.params_class.queryParams.subscribe((params)=>{
      if(params['redirect'] != null || params['redirect'] != undefined) 
        this.route.navigateByUrl('/home');
    });
  }
  title = 'medicare';
  constructor(
    private params_class: ActivatedRoute,
    private route: Router
  ){}
}
