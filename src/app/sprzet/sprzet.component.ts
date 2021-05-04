import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import marki from '../data/marki.json';
@Component({
  selector: 'app-sprzet',
  templateUrl: './sprzet.component.html',
  styleUrls: ['./sprzet.component.css'],
})
export class SprzetComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  marks = marki;
  ngOnInit(): void {
    this.getMarks();
  }
  getMarks() {
    this.httpClient.get<any>('https://mixbocian.eu/mixbocianapi/marki.php').subscribe(resp=>{
      this.marks = resp;
    });
  }
}

