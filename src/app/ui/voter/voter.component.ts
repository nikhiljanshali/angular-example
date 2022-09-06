import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss'],
})
export class VoterComponent implements OnInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor() {}

  ngOnInit() {}

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
