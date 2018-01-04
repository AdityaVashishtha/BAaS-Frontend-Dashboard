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


import { Page404Component } from '../../page404/page404.component';
import { AuthGuard } from '../../guard/auth.guard';

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
  ];

//After creating component for using it in the APP add component here
const COMPONENTS = [
    Page404Component,    
    // Add new Component here to add them into the app
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
          providers: [AuthGuard],
        };
      }
}