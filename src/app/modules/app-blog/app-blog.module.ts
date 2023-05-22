import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBlogComponent } from './components/app-blog/app-blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
	{
		path: '',
		component: AppBlogComponent,
	},
];
@NgModule({
	declarations: [AppBlogComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppBlogModule {}
