import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-set',
  templateUrl: './banner-set.component.html',
  styleUrls: ['./banner-set.component.css']
})
export class BannerSetComponent implements OnInit {
  width:number;
  height:number;
  @Input() size:string; 
  @Input() url:string;
  @Input() id:string;
  constructor() { }

  ngOnInit() {
    this.width = Number(this.size.slice(0,this.size.indexOf("x")))+10;
    this.height = Number(this.size.slice(this.size.indexOf("x")+1,this.size.length))+10;
  }

  showHideToggle(e, id){
    console.log(id);
    const currDisplay = document.getElementById(id+"-frame").style.display;
    if(currDisplay==="inline" || currDisplay===""){
      document.getElementById(id+"-frame").style.display = "none";
    }
    else{
      document.getElementById(id+"-frame").style.display = "inline";
    }
  }

  refreshIframe(e,id){
    (<HTMLIFrameElement>document.getElementById(id+"-frame")).src += "";
  }

}
