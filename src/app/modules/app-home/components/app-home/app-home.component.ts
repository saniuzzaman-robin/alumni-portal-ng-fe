import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.component.scss'],
})
export class AppHomeComponent {
	images = [
		{
			Name: 'First',
			Url: 'https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg?w=1060&t=st=1684753599~exp=1684754199~hmac=1a05bb36bc4e168c9778a195daab4395f41dcc5dea87a50e4ee6db431fa212f0',
		},
		{
			Name: 'Second',
			Url: 'https://img.freepik.com/free-photo/graduation-cap-diploma-signify-achievement-generated-by-ai_188544-25369.jpg?w=1060&t=st=1684753826~exp=1684754426~hmac=2ec3d7748724d6e10b435e7bf308bdca908621eab09800faa008b3392a1a1cd3',
		},
		{
			Name: 'Third',
			Url: 'https://img.freepik.com/free-vector/set-graduates-wearing-medical-masks_23-2148571737.jpg?w=996&t=st=1684753859~exp=1684754459~hmac=afb723955725ce3e321a17108973f08f29a674dd9df15f63c5a36ca2b95cd7a2',
		},
		{
			Name: 'Fourth',
			Url: 'https://img.freepik.com/free-vector/illustration-university-graduates_53876-18433.jpg?w=1060&t=st=1684753876~exp=1684754476~hmac=32904a1cc54b12f0ba2daf1e5f6fb6a19410502630c0630ad28de58867c9481a',
		},
	];
}
