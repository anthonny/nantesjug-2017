import { Event } from './../shared/event.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'event'
})
export class EventPipe implements PipeTransform {

  transform(events: Event[], filter: string): any {
    if (!filter)
      return events;

    return events.filter(event => event.title.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())>=0);
  }

}
