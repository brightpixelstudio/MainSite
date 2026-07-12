import { Component } from '@angular/core';

@Component({
  selector: 'whowearebanner',
  imports: [],
  templateUrl: './whowearebanner.html',
  styleUrl: './whowearebanner.css',
})
export class Whowearebanner {
  isVisableWhoWeAreContent: boolean = true;
  isVisableCoreValuesContent: boolean = false;
  isVisableOurProcessContent: boolean = false;
  currentImageOver: string = 'images/bluebarnov.png';
  currentImageDis: string = 'images/barndis.png';
  currentImageWhoWeAre: string = this.currentImageOver;
  currentImageCoreValues: string = this.currentImageDis;
  currentImageOurProcess: string = this.currentImageDis;

  togglesWhoWeAreContent() {
    this.isVisableWhoWeAreContent = true;
    this.isVisableCoreValuesContent = false;
    this.isVisableOurProcessContent = false;
    this.currentImageWhoWeAre = this.currentImageOver;
    this.currentImageCoreValues = this.currentImageDis;
    this.currentImageOurProcess = this.currentImageDis;
  }

  toggleCoreValuesContent() {
    this.isVisableWhoWeAreContent = false;
    this.isVisableCoreValuesContent = true;
    this.isVisableOurProcessContent = false;
    this.currentImageWhoWeAre = this.currentImageDis;
    this.currentImageCoreValues = this.currentImageOver;
    this.currentImageOurProcess = this.currentImageDis;
  }

  toggleOurProcessContent() {
    this.isVisableWhoWeAreContent = false;
    this.isVisableCoreValuesContent = false;
    this.isVisableOurProcessContent = true;
    this.currentImageWhoWeAre = this.currentImageDis;
    this.currentImageCoreValues = this.currentImageDis;
    this.currentImageOurProcess = this.currentImageOver;
  }
}
