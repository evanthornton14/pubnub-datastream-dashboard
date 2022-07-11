import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { PubNubAngular } from 'pubnub-angular2';
import { WikiChangeListComponent } from './wiki-change-list/wiki-change-list.component';
import { HeaderComponent } from './header/header.component';
import { FlexModule } from '@angular/flex-layout';
import { wikiChangesReducer } from './state/wiki-changes.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    WikiChangeListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    MatInputModule,
    StoreModule.forRoot({ wikiChanges: wikiChangesReducer, collection: collectionReducer })
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
