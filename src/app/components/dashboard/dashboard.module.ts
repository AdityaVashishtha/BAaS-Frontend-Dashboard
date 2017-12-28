import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardMainRouting } from '../../modulesUtils/routing/dashboard-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

const PAGES_COMPONENTS = [
  DashboardComponent,
];

@NgModule({
  imports: [        
    DashboardMainRouting,
    ThemeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class DashboardModule {
    
}
