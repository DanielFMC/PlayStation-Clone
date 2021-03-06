import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
