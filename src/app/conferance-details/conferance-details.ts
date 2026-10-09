import { Component , input , inject} from '@angular/core';
import { BookingService } from '../services/booking';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
    conf=input<any>();

readonly bookingService = inject(BookingService);

toggleBooking(): void {
  this.bookingService.toggleBooking(this.conf().id);
}
}
