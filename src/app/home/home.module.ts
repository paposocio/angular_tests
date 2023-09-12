import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { MenuBodyComponent } from '../menu-body/menu-body.component';
import { MenuFootComponent } from '../menu-foot/menu-foot.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    MenuBodyComponent,
    MenuFootComponent
  ],
  exports:[    
    HomeComponent,
    MenuNavComponent,
    MenuBodyComponent,
    MenuFootComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
