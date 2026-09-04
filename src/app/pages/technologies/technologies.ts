import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TechnologyType } from '../../enums/technologytypes';
import { Technology } from '../../models/technology';

@Component({
  selector: 'technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies implements OnInit {
  technologytypeid = TechnologyType.White;
  technologyList: Technology[] = [
    {
      technologyid: 1,
      image: '.netblack.png',
      url: 'https://dotnet.microsoft.com/en-us/',
      name: '.NET',
      technologytypename: 'white',
    },
    {
      technologyid: 2,
      image: 'azureblack.png',
      url: 'https://azure.microsoft.com/en-us',
      name: 'Azure',
      technologytypename: 'white',
    },
    {
      technologyid: 3,
      image: 'angular.png',
      url: 'https://angular.dev/',
      name: 'Angular',
      technologytypename: 'white',
    },
    {
      technologyid: 4,
      image: 'sqlblack.png',
      url: 'https://www.microsoft.com/en-us/sql-server',
      name: 'SQL Server',
      technologytypename: 'white',
    },
    {
      technologyid: 5,
      image: 'bootstrap.png',
      url: 'https://getbootstrap.com/',
      name: 'Bootstrap',
      technologytypename: 'white',
    },
    {
      technologyid: 6,
      image: 'linqblack.png',
      url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/',
      name: 'LINQ',
      technologytypename: 'white',
    },
    {
      technologyid: 7,
      image: 'csharp.png',
      url: 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps',
      name: 'C#',
      technologytypename: 'white',
    },
    {
      technologyid: 8,
      image: 'cs3.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      name: 'CSS',
      technologytypename: 'white',
    },
    {
      technologyid: 9,
      image: 'handlebars.png',
      url: 'https://handlebarsjs.com/',
      name: 'Handlebars',
      technologytypename: 'white',
    },
    {
      technologyid: 10,
      image: 'html5.png',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      name: 'HTML5',
      technologytypename: 'white',
    },
    {
      technologyid: 11,
      image: 'javascript.png',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      name: 'JavaScript',
      technologytypename: 'white',
    },
    {
      technologyid: 12,
      image: 'jquery.png',
      url: 'https://jquery.com/',
      name: 'Jquery',
      technologytypename: 'white',
    },
    {
      technologyid: 13,
      image: 'mustache.png',
      url: 'https://www.baeldung.com/mustache',
      name: 'Mustache',
      technologytypename: 'white',
    },
    {
      technologyid: 14,
      image: 'mysql.png',
      url: 'https://www.mysql.com/',
      name: 'MySQL',
      technologytypename: 'white',
    },
    {
      technologyid: 15,
      image: 'primeng.png',
      url: 'https://www.primefaces.org/primeng/',
      name: 'PrimeNG',
      technologytypename: 'white',
    },
    {
      technologyid: 16,
      image: 'signalr.png',
      url: 'https://dotnet.microsoft.com/apps/aspnet/signalr',
      name: 'SignalR',
      technologytypename: 'white',
    },
    {
      technologyid: 17,
      image: 'typescript.png',
      url: 'https://www.typescriptlang.org/',
      name: 'TypeScript',
      technologytypename: 'white',
    },
    {
      technologyid: 18,
      image: 'ajax.png',
      url: 'https://learn.microsoft.com/en-us/previous-versions/aspnet/bb398874(v=vs.100)',
      name: 'AJAX',
      technologytypename: 'white',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTechnologies(this.technologytypeid);
  }

  private loadTechnologies(technologytypeid: number): void {
    this.cdr.detectChanges();
  }
}
