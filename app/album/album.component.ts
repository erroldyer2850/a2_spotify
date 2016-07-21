import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../Artist';
import { Album } from '../album';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit {

  private sub: any;
  album: Album[];

  constructor(
    private spotifyService: SpotifyService
    , private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.spotifyService.getAlbum(id).subscribe(album => {
        this.album = album;
      });
    })
  }
}