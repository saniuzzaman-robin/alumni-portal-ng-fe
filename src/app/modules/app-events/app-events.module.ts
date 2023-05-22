import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventsComponent } from './components/app-events/app-events.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		component: AppEventsComponent,
	},
];

@NgModule({
	declarations: [AppEventsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppEventsModule {}
