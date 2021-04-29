import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
// import * as posty from "../data/posty.json";
// import posty from "../data/posty.json";
import posty from "../data/posty.json";


@Component({
  selector: 'app-prezentacja',
  templateUrl: './prezentacja.component.html',
  styleUrls: ['./prezentacja.component.css']
  
})

export class PrezentacjaComponent implements OnInit {

  
  constructor(config: NgbCarouselConfig, private httpClient: HttpClient) {
    config.interval = 0;
  }
  posts = posty;
  ngOnInit(): void {
    console.log(posty);
    console.log(this.posts);
    // this.togglePaused();
    this.getPosts();
    
  }
  getPosts() {
    this.httpClient.get<any>('http://localhost:80/Typescript/mixbocianapi/posty.php').subscribe(resp=>{
      this.posts = resp;
    });
  }
  
}
