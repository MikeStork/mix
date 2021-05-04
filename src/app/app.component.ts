import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mix';
  ngOnInit(){
    document.querySelector("nav-link").addEventListener('click',()=>{
      document.querySelector('.navbar-toggler').toggleAttribute('collapsed');
    })
  }

}
