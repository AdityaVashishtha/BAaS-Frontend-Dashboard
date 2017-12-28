import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDetailsService } from '../../@core/data/appDetails.service';

const SERVICES = [
       AppDetailsService,
];


@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ]
})
export class ServiceBundle {

    constructor() {

    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ServiceBundle,
            providers: [
                ...SERVICES
            ]
        };
    }
}