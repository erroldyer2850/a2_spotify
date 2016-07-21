import { RouterConfig }          from '@angular/router';
import { AlbumComponent }     from './album.component';

export const AlbumRoute: RouterConfig = [
  { path: 'album/:id', component: AlbumComponent },

];
