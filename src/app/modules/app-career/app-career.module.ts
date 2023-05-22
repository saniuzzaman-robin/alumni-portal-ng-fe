import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCareerComponent } from './components/app-career/app-career.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		component: AppCareerComponent,
	},
];
@NgModule({
	declarations: [AppCareerComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppCareerModule {}
