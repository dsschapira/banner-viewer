import { Component } from '@angular/core';
import { BannerLinksService } from './services/banner-links.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bannerLinks:string;

  constructor(private bannerService: BannerLinksService){

    this.bannerService.getBanners().subscribe((res)=>{
      this.bannerLinks = JSON.stringify(res.json());
    });

  }

  ngOnInit(){
    
  }
}
