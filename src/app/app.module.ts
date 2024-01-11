import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {ReactiveFormsModule} from '@angular/forms';
import { ProduitComponent } from './components/produit/produit.component';
import { FormulaireDynamiqueComponent } from './components/formulaire-dynamique/formulaire-dynamique.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    FormulaireDynamiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
