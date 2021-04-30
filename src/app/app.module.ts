import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrezentacjaComponent } from './prezentacja/prezentacja.component';
import { SprzetComponent } from './sprzet/sprzet.component';
import { LokalizacjaComponent } from './lokalizacja/lokalizacja.component';
import { SpacerComponent } from './spacer/spacer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkaComponent } from './marka/marka.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KontaktComponent } from './kontakt/kontakt.component';


@NgModule({
  declarations: [
    AppComponent,
    PrezentacjaComponent,
    SprzetComponent,
    LokalizacjaComponent,
    SpacerComponent,
    MarkaComponent,
    ItemComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }