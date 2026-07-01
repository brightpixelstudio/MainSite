import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'servicesbanner',
  imports: [],
  templateUrl: './servicesbanner.html',
  styleUrl: './servicesbanner.css',
})
export class Servicesbanner {
  isVisableServicesDesignContent: boolean = true;
  isVisableServicesDevelopmentContent: boolean = false;
  currentImageOver: string = 'images/barnov.png';
  currentImageDis: string = 'images/barndis.png';
  currentImageDevelopment: string = this.currentImageDis;
  currentImageDesign: string = this.currentImageOver;

  toggleServicesDesignContent() {
    this.isVisableServicesDesignContent = true;
    this.isVisableServicesDevelopmentContent = false;
    this.currentImageDesign = this.currentImageOver;
    this.currentImageDevelopment = this.currentImageDis;
  }

  toggleServicesDevelopmentContent() {
    this.isVisableServicesDesignContent = false;
    this.isVisableServicesDevelopmentContent = true;
    this.currentImageDevelopment = this.currentImageOver;
    this.currentImageDesign = this.currentImageDis;
  }
}
