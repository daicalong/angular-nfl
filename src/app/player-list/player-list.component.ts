import { Component, OnInit } from '@angular/core';
import { players } from '../constants/players.constant';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
