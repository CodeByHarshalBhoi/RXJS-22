import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapFiltrComponent } from './map-filtr/map-filtr.component';
import { Task1SubjectComponent } from './task1-subject/task1-subject.component';
import { Task2SubjectComponent } from './task2-subject/task2-subject.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { BeaviourSubjectComponent } from './beaviour-subject/beaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    MapFiltrComponent,
    Task1SubjectComponent,
    Task2SubjectComponent,
    SubjectComponent,
    BeaviourSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
