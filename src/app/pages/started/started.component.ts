import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {

  icon_classes:String[] = ['img'];
  title_classes:String[] = ['title'];
  subtitle_classes:String[] = ['subtitle'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log('start');
      this.icon_classes.push('start');
      setTimeout(()=>{
        console.log('end');
        this.icon_classes.push('end');
        this.title_classes.push('start');
        this.title_classes.push('end');
        setTimeout(()=>{
          this.subtitle_classes.push('start');
          setTimeout(()=>{
            this.router.navigateByUrl('/home');
          },2000);
        },1000);
      },1000);
    },1000);
  }

}
