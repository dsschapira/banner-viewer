import { Component } from '@angular/core';
import { BannerLinksService } from './services/banner-links.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bannerLinks:Object;
  bannerSets = [];
  
  constructor(private bannerService: BannerLinksService){

    this.bannerService.getBanners().subscribe((res)=>{
      this.bannerLinks = res.json();
      if(this.bannerLinks["banner-links-multi"]){
        for(const key in this.bannerLinks["banner-links-multi"]){
          this.bannerSets.push(key); //will need to send the whole object to the banner sets in this case still
        }
      }
      else{
 
      }
    });

  }
}
