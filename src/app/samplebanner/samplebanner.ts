import { Component } from '@angular/core';
import { FsLightbox } from 'fslightbox-angular';

@Component({
  selector: 'samplebanner',
  imports: [FsLightbox],
  templateUrl: './samplebanner.html',
  styleUrl: './samplebanner.css',
})
export class Samplebanner {
  // Controller variables
  toggler = false;
  sources = [
    '/images/ourwork/web/large/33_Image.jpg',
    '/images/ourwork/web/large/34_Image.jpg',
    '/images/ourwork/web/large/35_Image.jpg',
    '/images/ourwork/web/large/36_Image.jpg',
    '/images/ourwork/web/large/37_Image.jpg',
    '/images/ourwork/web/large/38_Image.jpg',
    '/images/ourwork/web/large/39_Image.jpg',
    '/images/ourwork/web/large/40_Image.jpg',
    '/images/ourwork/web/large/27_Image.jpg',
    '/images/ourwork/web/large/28_Image.jpg',
  ];
}
