import { Component , input} from '@angular/core';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  conf=input<any>();
}
