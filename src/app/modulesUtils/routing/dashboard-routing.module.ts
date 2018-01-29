import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SchemaComponent } from '../../components/dashboard/schema/schema.component';
import { AnalyticsComponent } from '../../components/dashboard/analytics/analytics.component';
import { LandingPageComponent } from '../../components/dashboard/landing-page/landing-page.component';
import { TableComponent } from '../../components/dashboard/table/table.component';
import { AuthenticationComponent } from '../../components/dashboard/authentication/authentication.component';
import { RouteHandlersComponent } from '../../components/dashboard/route-handlers/route-handlers.component';
import { AddRouteModalComponent } from '../../components/dashboard/route-handlers/add-route-modal/add-route-modal.component';

const routes : Routes = [{
    path: '',
    component: DashboardComponent,
    children: [{
        path: 'schema',
        component: SchemaComponent
    },
    {
        path: 'authentication-settings',
        component: AuthenticationComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'table',
        component: TableComponent        
    },
    {
        path: 'table/:schemaName',
        component: TableComponent        
    },
    {
        path: 'api-access',
        component: RouteHandlersComponent
    },
    {
        path: 'api-access/:schemaName',
        component: RouteHandlersComponent
    },
    {
        path: 'api-access/:schemaName/add-route',
        component: AddRouteModalComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class DashboardMainRouting {

}