import { Subject } from './subject.model';
import { Place } from './place.model';

export class Event {
    id: string;
    title: string;
    date: Date;
    time: string;
    register: string;
    place: string;
    subjects: Subject[];
    fullPlace: Place;
    agenda: string;
}
