import { Component } from '@angular/core';
import { Samplebanner } from '../../sections/samplebanner/samplebanner';
import { Servicesbanner } from '../../sections/servicesbanner/servicesbanner';
import { Quotebanner } from '../../sections/quotebanner/quotebanner';
import { Aboutbanner } from '../../sections/aboutbanner/aboutbanner';
import { Whowearebanner } from '../../sections/whowearebanner/whowearebanner';
import { Getstartedbanner } from '../../sections/getstartedbanner/getstartedbanner';
import { Ourwork } from '../../sections/ourwork/ourwork';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'home',
  imports: [
    Samplebanner,
    Servicesbanner,
    Quotebanner,
    Aboutbanner,
    Whowearebanner,
    Getstartedbanner,
    Ourwork,
    Contact,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
