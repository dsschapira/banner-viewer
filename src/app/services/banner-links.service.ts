import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class BannerLinksService {

  constructor(private http:Http) { }

  getBanners(){
    return this.http.get(encodeURI(window.location.href+"assets/banners.json"));
  }

}
