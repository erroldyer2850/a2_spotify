import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class SearchComponent {
  searchStr: string;
  searchResponse: Artist[];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) {

  }

  searchMusic() {
    this.spotifyService.getArtist(this.searchStr)
      .subscribe(response => {
        this.searchResponse = response.artists.items;
      });
  }

  onClick(artist: Artist) {

    this.router.navigate(['/artist', artist.id]);
  }
}