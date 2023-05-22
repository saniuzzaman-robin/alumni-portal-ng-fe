import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		component: AppErrorComponent,
	},
];
@NgModule({
	declarations: [AppErrorComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppErrorModule {}
