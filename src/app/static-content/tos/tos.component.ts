import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'tos',
    templateUrl: './tos.html',
    styles: [`
        @import "../static-content.dark";
        .parent-dark-theme();
    `]
})
export class TosComponent {
    siteName = environment.siteTitle;
}
