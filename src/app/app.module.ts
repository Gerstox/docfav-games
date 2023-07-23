import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ImageComponent } from './components/image/image.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ImageComponent,
    CardListComponent,
    GameDetailComponent,
    HomeComponent,
    NavComponent,
    SpinnerComponent,
    NotFoundComponent,
    FiltersComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
