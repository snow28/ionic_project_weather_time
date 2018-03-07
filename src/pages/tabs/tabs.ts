import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { WeatherPage } from '../weather/weather';
import { TimePage } from '../time/time';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimePage;
  tab2Root = WeatherPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
