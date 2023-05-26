import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Favourites: UserPhoto[];
  constructor(public photoService: PhotoService) {
    this.Favourites = [];
  }
  ngOnInit() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.Favourites = this.photoService.photos.filter(photo => photo.isFavourite);
  }

}
