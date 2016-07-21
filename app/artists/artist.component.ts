import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../Artist';
import { Album } from '../album';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit {

  artist: Artist[];
  albums: Album[];

  constructor(
    private spotifyService: SpotifyService
    , private route: ActivatedRoute
    , private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.spotifyService.getArtistWorks(id).subscribe(artist => {
        this.artist = artist;
      });

      this.spotifyService.getAlbums(id).subscribe(albums => {
        this.albums = albums.items;
      });
    })
  }

  onClick(album: Album) {
    console.log('Album in artise: ' + album.id);
    this.router.navigate(['/album', album.id]);
  }
}