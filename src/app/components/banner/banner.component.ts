import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() url:string;
  @Input() width:string;
  @Input() height:string;
  @Input() id:string;
  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://"+this.url);
  }
}
