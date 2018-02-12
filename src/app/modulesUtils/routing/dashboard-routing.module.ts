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
import { UsersComponent } from '../../components/dashboard/authentication/users/users.component';
import { AuthRoutesComponent } from '../../components/dashboard/authentication/auth-routes/auth-routes.component';
import { ApplicationLogsComponent } from '../../components/dashboard/application-logs/application-logs.component';
import { UserProfileComponent } from '../../components/dashboard/user-profile/user-profile.component';
import { AasComponent } from '../../components/dashboard/aas/aas.component';

const routes : Routes = [{
    path: '',
    component: DashboardComponent,
    children: [{
        path: 'schema',
        component: SchemaComponent
    },
    {
        path: 'authentication/settings',
        component: AuthenticationComponent
    },
    {
        path: 'authentication/users',
        component: UsersComponent
    },
    {
        path: 'authentication/routes',
        component: AuthRoutesComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: 'logs',
        component: ApplicationLogsComponent
    },
    {
        path: 'user-profile',
        component: UserProfileComponent
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
    },
    {
        path: 'analytics-home',
        component: AasComponent
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