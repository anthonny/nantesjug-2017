import { SpeakersComponent } from './speakers/speakers.component';
import { EventsComponent } from './events/events.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventsComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'speakers/:id', component: SpeakersComponent}
]

export const routerModule = RouterModule.forRoot(appRoutes, {useHash: true});
