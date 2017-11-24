import { EnroutePage } from './../enroute/enroute';
import { NearbyPage } from './../nearby/nearby';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
homepage=HomePage;
nearbypage=NearbyPage;
enroutepage=EnroutePage;

}
