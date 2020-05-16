import { Component,HostListener, ElementRef, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public el: ElementRef){}
  ngOnInit(){
    
  }
  goToContact(){
   
  }
}
