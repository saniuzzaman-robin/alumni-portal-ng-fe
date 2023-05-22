import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./modules/app-home/app-home.module').then(
				m => m.AppHomeModule
			),
	},
	{
		path: 'blog',
		loadChildren: () =>
			import('./modules/app-blog/app-blog.module').then(
				m => m.AppBlogModule
			),
	},
	{
		path: 'career',
		loadChildren: () =>
			import('./modules/app-career/app-career.module').then(
				m => m.AppCareerModule
			),
	},
	{
		path: 'events',
		loadChildren: () =>
			import('./modules/app-events/app-events.module').then(
				m => m.AppEventsModule
			),
	},
	{
		path: 'about-us',
		loadChildren: () =>
			import('./modules/app-about-us/app-about-us.module').then(
				m => m.AppAboutUsModule
			),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./modules/app-error/app-error.module').then(
				m => m.AppErrorModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
