import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule ,NgClass ,RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  data:string = "";
  check:boolean = false;
  place(e:any):void {
    if(e.target.value != '')
      document.getElementById(e.target.getAttribute('placeholder'))!.classList.add('opacity-1')
    else
      document.getElementById(e.target.getAttribute('placeholder'))!.classList.remove('opacity-1')
  }
}
