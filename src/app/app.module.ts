import { EventService } from './shared/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { routerModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventPipe } from './events/event.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpeakersComponent,
    NavigationComponent,
    EventListComponent,
    EventDetailComponent,
    EventPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
