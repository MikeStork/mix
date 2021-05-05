import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mix';
  constructor(private metaService: Meta){

  }
  ngOnInit(){
    this.metaService.addTags([
      {name: 'keywords', content: 'MixBocian, Mix, Bocian, Kuchnie, Alno, Alnokuchnie, Miele, Kitchenaid, Meble kuchenne, AGD, Bosch, Siemens, BSH, Opole, Kuchnie opole, Liebherr, Burger, kuchnie burger, Bauformat, kuchnie bauformat, Impuls  '},
      {name: 'description', content: 'Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);
    document.querySelector(".nudge").addEventListener('mouseenter', ()=>{
      document.querySelector(".fb-drawer").classList.add('fbxpnd');
    });
    document.querySelector(".fb-drawer").addEventListener('mouseleave', ()=>{
      document.querySelector(".fb-drawer").classList.remove('fbxpnd');
    });
  }

}
