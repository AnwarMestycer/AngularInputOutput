import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeperipheriquesComponent } from './peripherique/listeperipheriques/listeperipheriques.component';
import { PeripheriqueComponent } from './peripherique/peripherique/peripherique.component';

const routes: Routes = [
  {
    path:'peripherique', component : PeripheriqueComponent
  }, 
  {
    path:'', component : ListeperipheriquesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
