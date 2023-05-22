import { Component } from '@angular/core';
import {
	faTwitter,
	faFacebook,
	faLinkedin,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
	twitterIcon = faTwitter;
	facebookIcon = faFacebook;
	linkedinIcon = faLinkedin;
	youtubeIcon = faYoutube;
}
