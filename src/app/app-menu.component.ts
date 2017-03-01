import {Component} from '@angular/core';

@Component({
	selector: 'menu', 
	template: `
    	<div class="btn-group pull-right btn-group-sm">
			<button type="button" class="btn btn-primary" [routerLink]="['/']">
				<i class="glyphicon glyphicon-home"></i> Home
			</button>
			<button type="button" class="btn btn-primary" [routerLink]="['/product']">
				<i class="glyphicon glyphicon-briefcase"></i> Product
			</button>
		</div>
	`
})
export class AppMenuComponent {}