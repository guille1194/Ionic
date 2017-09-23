import { Component } from '@angular/core';

import { Tab1Page, Tab2Page, Tab3Page } from "../index.paginas";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1:any = Tab1Page;
  tab2:any = Tab2Page;
  tab3:any = Tab3Page;


  constructor() {}

}
