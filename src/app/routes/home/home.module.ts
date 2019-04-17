import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2SwapiModule } from 'angular2-swapi';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from './../../../shared/shared.module';

import { HomeComponent } from './home.component';
export * from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        SharedModule,
        NgxPaginationModule,
        BrowserAnimationsModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [ Angular2SwapiModule ]
})
export class HomeModule {}
