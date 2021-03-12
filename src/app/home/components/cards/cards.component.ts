import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../../../cards.model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Cards[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchCards();
  }

  fetchCards() {
    this.dataService.getCards().subscribe((cards) => {
      this.cards = cards;
      console.log(cards);
    });
  }
}
