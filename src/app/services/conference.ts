import { Injectable, signal, computed } from '@angular/core';

export interface ConferenceItem {
  id: number;
  title: string;
  topic: string;
  date: string;
  speaker: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  private conferenceList = signal<ConferenceItem[]>([
    {
      id: 1,
      title: 'Introduction à Angular',
      topic: 'Web',
      date: '2026-11-15',
      speaker: 'Ahmed Ben Ali'
    },
    {
      id: 2,
      title: 'Intelligence artificielle',
      topic: 'IA',
      date: '2026-11-20',
      speaker: 'Sarra Trabelsi'
    },
    {
      id: 3,
      title: 'Cybersécurité moderne',
      topic: 'Sécurité',
      date: '2026-11-25',
      speaker: 'Youssef Mansour'
    }
  ]);

  readonly conferences = this.conferenceList.asReadonly();

  readonly selectedTopic = signal('Tous');

  readonly filteredConferences = computed(() => {
    const topic = this.selectedTopic();

    if (topic === 'Tous') {
      return this.conferenceList();
    }

    return this.conferenceList().filter(
      conference => conference.topic === topic
    );
  });

  filterByTopic(topic: string): void {
    this.selectedTopic.set(topic);
  }
}