import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export /**
 * SpotifyService
 */
  class SpotifyService {

  private offsetStr: string = '0';
  private limitStr: string = '20';
  private market: string = 'US';

  constructor(private http: Http) {
  }

  getArtist(str: string, type = 'artist') {
    let path = this.setUrl('query');

    return this.makeRequest(str, path, type);
  }

  getArtistWorks(id: string) {

    let params = this.setParams('');
    let path = this.setUrl('artists') + id;

    return this.makeRequest('', path, '');
  }

/**
 * id: artist id
 */
  getAlbums(id: string) {

    let path = this.setUrl('artists') + id + '/albums';

    return this.makeRequest('', path, '');
  }
/**
 * id: album id
 */
  getAlbum(id: string) {

    let path = this.setUrl('albums') + id;

    return this.makeRequest('', path, '');
  }

  private makeRequest(str: string, path: string, type: string) {

    let p = this.setParams(type);
    let url = path + str;

    // console.log(url);

    return this.http.get(url, { search: p })//arams})
      .map((res) => res.json());
  }

  setParams(type: string): URLSearchParams {
    let params = new URLSearchParams();

    params.set('offset', this.offsetStr);
    params.set('limit', this.limitStr);

    if (type) {
      params.set('type', type);
    }

    params.set('market', this.market);

    return params;
  } 

  setUrl(type: string): string {
    if (type === 'query') {
      return 'https://api.spotify.com/v1/search?query=';
    } else {
      return 'https://api.spotify.com/v1/' + type + '/';
    }
  }
}