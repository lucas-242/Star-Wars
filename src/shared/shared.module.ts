import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PlanetsService } from './services/planets.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ PlanetsService ]
})
export class SharedModule {}
