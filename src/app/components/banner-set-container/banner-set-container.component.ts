import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-set-container',
  templateUrl: './banner-set-container.component.html',
  styleUrls: ['./banner-set-container.component.css']
})
export class BannerSetContainerComponent implements OnInit {
  
  sizes = [];
  urls = [];
  ids = [];

  @Input() bannerSet:any;
  constructor() { }

  ngOnInit() {
    for(const key in this.bannerSet){
      if(key !== 'title' && key !=="id"){
        this.sizes.push(key);
        this.urls.push(this.bannerSet[key]);
        this.ids.push(this.bannerSet.id+"-"+key);
      }
    }
  }

  refreshAll(){
    for(const id of this.ids){
      (<HTMLIFrameElement>document.getElementById(id+"-frame")).src += "";
    }
  }

}
