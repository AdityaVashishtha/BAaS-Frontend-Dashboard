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
import { ExportDataComponent } from './export-data/export-data.component';
import { ConfigureModelComponent } from './aas/configure-model/configure-model.component';
import { AnalyseModelComponent } from './aas/analyse-model/analyse-model.component';
import { CreateModelComponent } from './aas/create-model/create-model.component';
import { AnalysisToolCreateComponent } from './aas/analyse-model/analysis-tool-create/analysis-tool-create.component';
import { AnalysisToolConfigureComponent } from './aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component';
import { BuildModelsComponent } from './aas/build-models/build-models.component';
import { BuildModelConfigureComponent } from './aas/build-models/build-model-configure/build-model-configure.component';
import { BuildModelCreateComponent } from './aas/build-models/build-model-create/build-model-create.component';
import { ConfigureRenderComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component';
import { ConfigureCollapsiblePanelComponent } from './aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component';
import { PanelInputFieldComponent } from './aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component';
import { PanelSubsectionComponent } from './aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component';
import { EditSchemaComponent } from './schema/edit-schema/edit-schema.component';
import { AttributeConfigComponent } from './schema/edit-schema/attribute-config/attribute-config.component';
import { ParameterConfigurerComponent } from './aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component';
import { StorageServiceComponent } from './storage-service/storage-service.component';
import { VisualizationComponent } from './aas/visualization/visualization.component';

import { ConfigureImportedComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/configure-imported.component';
import {DynamicFormModule} from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/dynamic-form/dynamic-form.module';
import { PreprocessingComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/preprocessing/preprocessing.component';
import { NominalComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/preprocessing/nominal/nominal.component';
import { CategoricalComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/preprocessing/categorical/categorical.component';
import { IovariablesComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/iovariables/iovariables.component';
import { MltaskComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/mltask/mltask.component';
import { ClassificationAlgorithmComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/mltask/classification-algorithm/classification-algorithm.component';
import { RegressionAlgorithmComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/mltask/regression-algorithm/regression-algorithm.component'
import {OnlyNumber} from './aas/analyse-model/analysis-tool-configure/configure-render/configure-imported/customValidators/onlyNumberValidator.directive';
import { DisplayResultComponent } from './aas/analyse-model/analysis-tool-configure/configure-render/display-result/display-result.component';
import { ImportDataComponent } from './import-data/import-data.component';


const PAGES_COMPONENTS = [
  DashboardComponent,
];

@NgModule({
  imports: [        
    DashboardMainRouting,
    ThemeModule,
    Ng2SmartTableModule,
    AngularEchartsModule,
    DynamicFormModule,
    
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
    ExportDataComponent,    
    ConfigureModelComponent,
    AnalyseModelComponent,
    CreateModelComponent,
    AnalysisToolCreateComponent,
    AnalysisToolConfigureComponent,
    BuildModelsComponent,
    BuildModelConfigureComponent,
    BuildModelCreateComponent,
    ConfigureRenderComponent,
    ConfigureCollapsiblePanelComponent,
    PanelInputFieldComponent,
    PanelSubsectionComponent,    
    EditSchemaComponent,
    AttributeConfigComponent,
    ParameterConfigurerComponent,
    StorageServiceComponent,
    VisualizationComponent,
    ConfigureImportedComponent, 
    OnlyNumber,
    PreprocessingComponent,
    NominalComponent,
    CategoricalComponent,
    IovariablesComponent,
    MltaskComponent,
    ClassificationAlgorithmComponent,
    RegressionAlgorithmComponent,
    DisplayResultComponent,
    ImportDataComponent   
  ],
  entryComponents: [
    SchemaModalComponent,    
    AddAttributeModalComponent,
    ConfigureRenderComponent,    
    
    //AddRouteModalComponent
  ]
})
export class DashboardModule {
    
}
