import { Event } from './event.model';
import { Place } from './place.model';
import { Speaker } from './speaker.model';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import * as _ from 'lodash'

@Injectable()
export class EventService {

  speakers: Speaker[];
  places: Place[];
  events: Event[];

  constructor() {

    // Speakers
    this.speakers = <Speaker[]> njSpeakers;
    this.speakers.forEach(speaker => {
      speaker.avatar = speaker.gravatar && this.getGravatarUrl(speaker.gravatar)
        || this.getLocalAvatarUrl(speaker.id, speaker.photo)
    });
    this.speakers.sort((speakerA, speakerB)=> speakerA.name.localeCompare(speakerB.name));


    // Places
    this.places = <Place[]> njPlaces;
    this.places.forEach(place => {
      place.image = `assets/images/places/map-${place.id}.png`;
    });

    // Events
    this.events = <Event[]> njEvents;
    this.events.forEach(event => {
      event.fullPlace = this.getPlace(event.place);
      event.agenda = this.getGoogleCalUrl(event);
      event.subjects.forEach(subject => {
        subject.fullSpeakers = this.getSpeakersFromIds(subject.speakers);
      });
    });
  }

   getGravatarUrl(email: string) {
      return `https://www.gravatar.com/avatar/${Md5.hashStr(email)}?s=100`;
   }

   getLocalAvatarUrl(idSpeaker, fileExtension) {
      const file = fileExtension ? `${idSpeaker}.${fileExtension}` : 'gravatar-duke.jpg'
      return `assets/images/speakers/${file}`;
   }

   convertToGcalDate(date: Date): string {
       return date.toISOString().replace(/[:-]/g, '').replace(/.000Z/g, 'Z');
   }

   getGoogleCalUrl(event: Event): string {
       const from= _.cloneDeep(event.date);
       from.setHours(parseInt(event.time, 10));

       const to=_.cloneDeep(event.date);
       to.setHours(parseInt(event.time, 10) + 2);

       const title = encodeURI(event.title);

       const date = this.convertToGcalDate(from)+'/'+this.convertToGcalDate(to);
       const location =event.place ? encodeURI(`${event.fullPlace.name} ${event.fullPlace.address} ${event.fullPlace.city}`) : '';

       return `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}&dates=${date}&details=&location=${location}`;
   }

   getPlace(idPlace): Place {
     return _.find(this.places, place => place.id === idPlace);
   }

   getSpeakersFromIds(ids: string[]) {
     return this.speakers.filter(speaker => ids.indexOf(speaker.id) >= 0);
   }

   getEvents(): Event[] {
       return this.events;
   }

   getEvent(idEvent: string) {
       return _.find(this.events, event => event.id === idEvent);
   }

   getSpeakers(): Speaker[] {
       return this.speakers;
   }

   getSpeaker(idSpeaker: string) {
       return  _.find(this.speakers, speaker => speaker.id === idSpeaker);
   }
}
