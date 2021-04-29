import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { LokalizacjaComponent } from './lokalizacja/lokalizacja.component';
import { MarkaComponent } from './marka/marka.component';
import { PrezentacjaComponent } from './prezentacja/prezentacja.component';
import { SpacerComponent } from './spacer/spacer.component';
import { SprzetComponent } from './sprzet/sprzet.component';

const routes: Routes = [
  {path:"prezentacja",component:PrezentacjaComponent},
  {path:"",component:PrezentacjaComponent},
  {path:"*",component:PrezentacjaComponent},
  {path:"sprzet",component:SprzetComponent},
  {path:"sprzet/marka/:id",component:MarkaComponent},
  {path:"sprzet/marka/:id/item/:id/:id2/:id3",component:ItemComponent},
  {path:"lokalizacja",component:LokalizacjaComponent},
  {path:"spacer",component:SpacerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
