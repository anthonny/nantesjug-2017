import { Event } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  selectedEvent: Event;
  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.selectedEvent = this.events[0];

    this.route.params
      .subscribe(params => {
        if (!params['id']) {
          this.router.navigate(['/events', this.events[0].id]);
          return;
        }

        this.selectedEvent = this.eventService.getEvent(params['id']);

      })


  }

}
