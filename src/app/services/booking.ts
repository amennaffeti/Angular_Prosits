import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private reservedIds = signal<number[]>([]);

  readonly bookedIds = this.reservedIds.asReadonly();

  readonly bookedCount = computed(
    () => this.reservedIds().length
  );

  toggleBooking(id: number): void {
    this.reservedIds.update(ids =>
      ids.includes(id)
        ? ids.filter(item => item !== id)
        : [...ids, id]
    );
  }

  isBooked(id: number): boolean {
    return this.reservedIds().includes(id);
  }
}