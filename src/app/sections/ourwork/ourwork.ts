import { Component } from '@angular/core';
import { FsLightbox } from 'fslightbox-angular';
import { Work } from '../../models/work';
import { WorkType } from '../../enums/worktypes';

@Component({
  selector: 'ourwork',
  imports: [FsLightbox],
  templateUrl: './ourwork.html',
  styleUrl: './ourwork.css',
})
export class Ourwork {
  // Controller variables
  myHtmlContent: string = '';
  currentClient: number = 0;
  prevImage: string = 'prevdisbtn.jpg';
  nextImage: string = 'nextbtn.jpg';
  latestWork: Work[] = [
    {
      workid: 1,
      number: 1,
      worktypeid: WorkType.Latest,
      name: 'latest',
      url: 'https://myseminolegardens.com/',
      content:
        'Nestled around two flowing fresh water lakes and tropical gardens is the fabulous Seminole Garden Apartment Community. Located midway between St. Petersburg and' +
        'Clearwater, Florida, it is convenient to all tourist attractions and the cultural centers of St. Petersburg, Sarasota, Tampa, and Clearwater. Ideally located in the' +
        'heart of Seminole, SGA is convenient to the Gulf Beaches and the St. Petersburg and Tampa Airports.' +
        '<br /><br />' +
        'Seminole Gardens, is a senior oriented 55 plus community. At SGA you will enjoy nice, quiet, elegant living and a great social life. As an owner or renter at SGA, you will' +
        'experience a feeling of spaciousness and freedom - from the beautiful landscaped lawn to the spacious balconies. Good taste reflects throughout this entire development to' +
        'produce a home already proven to be a wonderful place to live. See and know for yourself, how this beautiful 53 acre development is designed for the mature adult to' +
        'enjoy a carefree life. Our residents enjoy delightful year-round living!',
      title: 'Seminole Gardens',
    },
    {
      workid: 2,
      number: 2,
      worktypeid: WorkType.Latest,
      name: 'latest',
      url: 'https://www.intellectualconversation.com/',
      content:
        'A new group called Intellectual Conversation. No politics or religion, just topics focusing on Art, Philosophy, Psychology, History, Biology, Music, Science, Technology, etc. <br /><br />I welcome everyone who enjoys these topics and others that are similar with insight/debate, but not arguments/judgments.' +
        'We have some awesome users who offer extremely interesting topics that will expand your mind and provide new perspectives. I know it has mine.' +
        '<br/><br/>We are local and located in Greenville/Simpsonville area. We meet in person about every 6 months to shake hands and connect with new people',
      title: 'Intellectual Conversation',
    },
    {
      workid: 3,
      number: 3,
      worktypeid: WorkType.Latest,
      name: 'latest',
      url: 'http://robertstevenson.sunraydesigns.org/',
      content:
        'With over 30 years of extensive corporate and entrepreneurial experience, Robert Stevenson understands what it takes to succeed. He teaches companies how to deal with risk, competition, and the ever-changing business environment.<br/><br/>' +
        'Robert helps prepare companies for the 21st century. With a powerful blend of experience, research, case studies and competitor perspectives, Robert’s original insights help organizations, business leaders and associates understand how to unleash their future potential.<br/><br/>' +
        'Energy, power, content, and tangible solutions are all considerations in picking a speaker, but what determines whether a speaker hits a home run with your audience is much more than just those components.',
      title: 'Robert Stevenson',
    },
  ];

  toggler = false;
  sources = [
    '/images/ourwork/web/large/33_Image.jpg',
    '/images/ourwork/web/large/30_Image.jpg',
    '/images/ourwork/web/large/31_Image.jpg',
    '/images/ourwork/web/large/32_Image.jpg',
    '/images/ourwork/web/large/33_Image.jpg',
    '/images/ourwork/web/large/35_Image.jpg',
    '/images/ourwork/web/large/36_Image.jpg',
    '/images/ourwork/web/large/37_Image.jpg',
    '/images/ourwork/web/large/38_Image.jpg',
    '/images/ourwork/web/large/39_Image.jpg',
    '/images/ourwork/web/large/30_Image.jpg',
    '/images/ourwork/web/large/27_Image.jpg',
    '/images/ourwork/web/large/1_Image.jpg',
    '/images/ourwork/web/large/2_Image.jpg',
    '/images/ourwork/web/large/3_Image.jpg',
    '/images/ourwork/web/large/4_Image.jpg',
    '/images/ourwork/web/large/5_Image.jpg',
    '/images/ourwork/web/large/6_Image.jpg',
    '/images/ourwork/web/large/7_Image.jpg',
    '/images/ourwork/web/large/8_Image.jpg',
    '/images/ourwork/web/large/9_Image.jpg',
    '/images/ourwork/web/large/10_Image.jpg',
    '/images/ourwork/web/large/11_Image.jpg',
    '/images/ourwork/web/large/12_Image.jpg',
    '/images/ourwork/web/large/29_Image.jpg',
    '/images/ourwork/web/large/14_Image.jpg',
    '/images/ourwork/web/large/15_Image.jpg',
    '/images/ourwork/web/large/16_Image.jpg',
    '/images/ourwork/web/large/17_Image.jpg',
    '/images/ourwork/web/large/18_Image.jpg',
    '/images/ourwork/web/large/19_Image.jpg',
    '/images/ourwork/web/large/20_Image.jpg',
    '/images/ourwork/web/large/21_Image.jpg',
    '/images/ourwork/web/large/22_Image.jpg',
    '/images/ourwork/web/large/23_Image.jpg',
    '/images/ourwork/web/large/24_Image.jpg',
    '/images/ourwork/web/large/25_Image.jpg',
    '/images/ourwork/web/large/26_Image.jpg',
    '/images/ourwork/web/large/27_Image.jpg',
    '/images/ourwork/web/large/28_Image.jpg',
  ];

  isVisableWebsiteContent: boolean = true;
  isVisablePrintContent: boolean = false;
  isVisableMobileContent: boolean = false;
  isVisableLatestContent: boolean = false;
  currentImageOver: string = 'images/bluebarnov.png';
  currentImageDis: string = 'images/barndis.png';
  currentImageWebsite: string = this.currentImageOver;
  currentImagePrint: string = this.currentImageDis;
  currentImageMobile: string = this.currentImageDis;
  currentImageLatest: string = this.currentImageDis;

  constructor() {
    this.myHtmlContent = this.latestWork[0]?.content ?? '';
  }

  prevClient() {
    this.currentClient = Math.max(0, this.currentClient - 1);
    this.myHtmlContent = this.latestWork[this.currentClient]?.content ?? '';
    this.nextImage =
      this.currentClient < this.latestWork.length - 1 ? 'nextbtn.jpg' : 'nextdisbtn.jpg';
    this.prevImage = this.currentClient > 0 ? 'prevbtn.jpg' : 'prevdisbtn.jpg';
  }

  nextClient() {
    this.currentClient = Math.min(this.latestWork.length - 1, this.currentClient + 1);
    this.myHtmlContent = this.latestWork[this.currentClient]?.content ?? '';
    this.nextImage =
      this.currentClient < this.latestWork.length - 1 ? 'nextbtn.jpg' : 'nextdisbtn.jpg';
    this.prevImage = this.currentClient > 0 ? 'prevbtn.jpg' : 'prevdisbtn.jpg';
  }

  toggleWebsiteContent() {
    this.isVisableWebsiteContent = true;
    this.isVisablePrintContent = false;
    this.isVisableMobileContent = false;
    this.isVisableLatestContent = false;
    this.currentImageWebsite = this.currentImageOver;
    this.currentImagePrint = this.currentImageDis;
    this.currentImageMobile = this.currentImageDis;
    this.currentImageLatest = this.currentImageDis;
  }

  togglePrintContent() {
    this.isVisableWebsiteContent = false;
    this.isVisablePrintContent = true;
    this.isVisableMobileContent = false;
    this.isVisableLatestContent = false;
    this.currentImageWebsite = this.currentImageDis;
    this.currentImagePrint = this.currentImageOver;
    this.currentImageMobile = this.currentImageDis;
    this.currentImageLatest = this.currentImageDis;
  }

  toggleMobileContent() {
    this.isVisableWebsiteContent = false;
    this.isVisablePrintContent = false;
    this.isVisableMobileContent = true;
    this.isVisableLatestContent = false;
    this.currentImageWebsite = this.currentImageDis;
    this.currentImagePrint = this.currentImageDis;
    this.currentImageMobile = this.currentImageOver;
    this.currentImageLatest = this.currentImageDis;
  }

  toggleLatestContent() {
    this.isVisableWebsiteContent = false;
    this.isVisablePrintContent = false;
    this.isVisableMobileContent = false;
    this.isVisableLatestContent = true;
    this.currentImageWebsite = this.currentImageDis;
    this.currentImagePrint = this.currentImageDis;
    this.currentImageMobile = this.currentImageDis;
    this.currentImageLatest = this.currentImageOver;
  }
}
