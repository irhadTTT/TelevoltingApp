import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../participant.model';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.css']
})
export class ParticipantItemComponent implements OnInit {
  @Input() participant: Participant;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
