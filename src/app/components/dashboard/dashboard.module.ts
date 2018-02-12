import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { DashboardComponent } from './dashboard.component';
import { DashboardMainRouting } from '../../modulesUtils/routing/dashboard-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SchemaComponent } from './schema/schema.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SchemaModalComponent } from './schema/schema-modal/schema-modal.component';
import { TableComponent } from './table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AddAttributeModalComponent } from './table/add-attribute-modal/add-attribute-modal.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouteHandlersComponent } from './route-handlers/route-handlers.component';
import { AddRouteModalComponent } from './route-handlers/add-route-modal/add-route-modal.component';
import { SchemaDetailCardComponent } from './schema/schema-detail-card/schema-detail-card.component';
import { UsageLineChartComponent } from './analytics/usage-line-chart/usage-line-chart.component';
import { UsersComponent } from './authentication/users/users.component';
import { AuthRoutesComponent } from './authentication/auth-routes/auth-routes.component';
import { ApplicationLogsComponent } from './application-logs/application-logs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AasComponent } from './aas/aas.component';


const PAGES_COMPONENTS = [
  DashboardComponent,
];

@NgModule({
  imports: [        
    DashboardMainRouting,
    ThemeModule,
    Ng2SmartTableModule,
    AngularEchartsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    SchemaComponent,
    AnalyticsComponent,
    LandingPageComponent,
    SchemaModalComponent,
    TableComponent,
    AddAttributeModalComponent,
    AuthenticationComponent,
    RouteHandlersComponent,
    AddRouteModalComponent,
    SchemaDetailCardComponent,
    UsageLineChartComponent,
    UsersComponent,
    AuthRoutesComponent,
    ApplicationLogsComponent,
    UserProfileComponent,
    AasComponent,    
  ],
  entryComponents: [
    SchemaModalComponent,    
    AddAttributeModalComponent,
    //AddRouteModalComponent
  ]
})
export class DashboardModule {
    
}
