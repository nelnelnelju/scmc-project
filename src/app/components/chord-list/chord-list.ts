import { Component, inject, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SONGLIST } from '../../song-list';
import { Songlist } from '../../models/songlist-model';

@Component({
  selector: 'app-chord-list',
  imports: [],
  templateUrl: './chord-list.html',
  styleUrl: './chord-list.scss',
})
export class ChordList implements OnInit {
  private readonly router = inject(Router);
  songList!: Songlist[];

  ngOnInit(): void {
    this.songList = SONGLIST.sort((a, b) => a.title.localeCompare(b.title));
  }

  goToSong(song: Songlist) {
    const extras: NavigationExtras = {
      state: {
        song: song,
      },
    };
    this.router.navigateByUrl('view', extras);
  }
}
