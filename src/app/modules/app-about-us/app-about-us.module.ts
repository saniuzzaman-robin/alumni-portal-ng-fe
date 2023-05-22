import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutUsComponent } from './components/app-about-us/app-about-us.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		component: AppAboutUsComponent,
	},
];
@NgModule({
	declarations: [AppAboutUsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppAboutUsModule {}
