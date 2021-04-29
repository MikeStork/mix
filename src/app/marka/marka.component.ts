import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import sprzety from "../data/sprzety.json";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private httpClient: HttpClient) { }
  items;
  nazwa:string;
  filtr:string='';
  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      this.getMarks(param.id);
      this.nazwa = param.id;
      console.log(this.items);
    });
  }
  getMarks(sel:String) {
    if(this.filtr){
      this.httpClient.get<any>('http://localhost:80/Typescript/mixbocianapi/sprzety.php?s='+sel+'&e='+this.filtr).subscribe(resp=>{
        this.items = resp;
        console.log(resp);
      });
    }else{
      this.httpClient.get<any>('http://localhost:80/Typescript/mixbocianapi/sprzety.php?s='+sel).subscribe(resp=>{
        this.items = resp;
        console.log(resp);
      });
      
    }
  }
  
}
