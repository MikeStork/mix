import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import sprzety from "../data/sprzety.json";
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private httpClient: HttpClient, private _location: Location) { }
  curr;
  temp;
  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      this.getMarks(param.id,param.id2,param.id3)
    });
  }
  getMarks(sel:String,nr:number,filtr:string) {
    console.log(filtr)
    if(filtr != 'default'){
    this.httpClient.get<any>('https://mixbocian.eu/mixbocianapi/sprzety.php?s='+sel+'&e='+filtr).subscribe(resp=>{
      this.curr = resp[nr];
    });
  }else{
    this.httpClient.get<any>('https://mixbocian.eu/mixbocianapi/sprzety.php?s='+sel).subscribe(resp=>{
      this.curr = resp[nr];
    });
  }
  }
  backClicked() {
    this._location.back();
  }
}
