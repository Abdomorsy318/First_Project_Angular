import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  check:boolean = false;
  imgSrc:string = ''
  @ViewChild('img') img!:ElementRef;
  showImg(e:string):void{
    this.check= true;
    this.imgSrc = e;
  }
  close(e:MouseEvent):void{
    if(this.img.nativeElement != e.target)
      this.check = false
  }
}
