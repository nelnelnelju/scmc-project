import { Component, inject } from '@angular/core';
import { SONGLIST } from '../../chord-list';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-chord-list',
  imports: [],
  templateUrl: './chord-list.html',
  styleUrl: './chord-list.scss',
})
export class ChordList {
  private readonly router = inject(Router);
  songList = SONGLIST;

  goToSong(link: string) {
    const extras: NavigationExtras = {
      state: {
        link: link,
      },
    };
    this.router.navigateByUrl('view', extras);
  }
}
