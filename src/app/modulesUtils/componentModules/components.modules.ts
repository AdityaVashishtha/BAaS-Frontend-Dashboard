import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbCheckboxModule,
  } from '@nebular/theme';

/* Custom Imports to use */
import { ToasterService } from 'angular2-toaster';
import { Page404Component } from '../../page404/page404.component';
import { AuthGuard } from '../../guard/auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { ToastService } from '../../services/util/toast.service';
import { ToasterModule } from 'angular2-toaster';
import { SchemaService } from '../../services/dashboard/schema.service';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule,
    NgbModule,
    ToasterModule
  ];

//After creating component for using it in the APP add component here
const COMPONENTS = [
    Page404Component,    
    // Add new Component here to add them into the app
]

const SERVICES = [
    AuthGuard,
    AuthService,
    ToasterService,
    ToastService,
    SchemaService,
    //Add new Services here
]
@NgModule({
    imports: [...BASE_MODULES,...NB_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES,...COMPONENTS,],
    declarations: [...COMPONENTS,],
  })
export class ComponentBundle {    
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: ComponentBundle,
          providers: [...SERVICES],
        };
      }
}