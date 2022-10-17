import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionCardComponent } from './componentes/subscription-card/subscription-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TicketCardComponent } from './componentes/ticket-card/ticket-card.component';
import { ClickOutSideDirective } from './directives/click-out-side.directive';
import { MasProductComponent } from './componentes/mas-product/mas-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionCardComponent,
    TicketCardComponent,
    ClickOutSideDirective,
    MasProductComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
