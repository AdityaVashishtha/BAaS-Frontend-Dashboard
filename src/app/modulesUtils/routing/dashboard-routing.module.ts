import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SchemaComponent } from '../../components/dashboard/schema/schema.component';
import { AnalyticsComponent } from '../../components/dashboard/analytics/analytics.component';
import { LandingPageComponent } from '../../components/dashboard/landing-page/landing-page.component';
import { TableComponent } from '../../components/dashboard/table/table.component';
const routes : Routes = [{
    path: '',
    component: DashboardComponent,
    children: [{
        path: 'schema',
        component: SchemaComponent
    },{
        path: 'analytics',
        component: AnalyticsComponent
    },{
        path: '',
        component: LandingPageComponent
    },{
        path: 'table/:schemaName',
        component: TableComponent
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