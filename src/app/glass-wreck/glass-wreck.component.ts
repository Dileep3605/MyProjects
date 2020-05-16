import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/Services/shared.service';

@Component({
  selector: 'app-glass-wreck',
  templateUrl: './glass-wreck.component.html',
  styleUrls: ['./glass-wreck.component.css']
})
export class GlassWreckComponent implements OnInit {
  Gdata:any = [];
  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.getGooglesData().subscribe(data=>{
      this.Gdata = data;
    })
  }

}
