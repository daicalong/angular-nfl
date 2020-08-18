import { Component, OnInit } from '@angular/core';
import { players } from '../constants/players.constant';
import { Player } from '../interfaces/player.interface';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {
  playerList = Array<Player>();

  constructor() { }

  ngOnInit(): void {
    this.playerList = players;
  }

}
