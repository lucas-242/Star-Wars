import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { Angular2SwapiModule } from 'angular2-swapi';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home.component';
export * from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        SharedModule,
        NgxPaginationModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [ Angular2SwapiModule ]
})
export class HomeModule {}
