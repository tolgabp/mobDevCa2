import { Component } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss']
})
export class Tab0Page {

  public photos = [
    'https://placebear.com/200/300',
    'https://placebear.com/640/360'
  ];
  constructor() {}

}