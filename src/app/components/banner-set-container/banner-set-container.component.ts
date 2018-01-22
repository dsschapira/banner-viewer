import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-set-container',
  templateUrl: './banner-set-container.component.html',
  styleUrls: ['./banner-set-container.component.css']
})
export class BannerSetContainerComponent implements OnInit {
  
  sizes = [];

  @Input() bannerSet:Object;
  constructor() { }

  ngOnInit() {
    console.log(this.bannerSet);
    for(const key in this.bannerSet){
      if(key !== 'title'){
        this.sizes.push(key);
      }
    }
  }

}
