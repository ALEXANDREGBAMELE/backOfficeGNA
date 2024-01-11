import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { FormulaireDynamiqueComponent } from './components/formulaire-dynamique/formulaire-dynamique.component';

const routes: Routes = [
 
  {path:'produit', component: ProduitComponent},
  {path:'form', component: FormulaireDynamiqueComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
