import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule
    ]
})
export class LayoutModule { }
