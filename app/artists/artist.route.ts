import { RouterConfig }          from '@angular/router';
import { ArtistComponent }     from './artist.component';

export const ArtistRoute: RouterConfig = [
  { path: 'artist/:id', component: ArtistComponent },

];
