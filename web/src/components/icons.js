/** @jsx jsx */
import { jsx } from 'theme-ui';
import Gatsby from '../assets/gatsby.svg';
import ReactJs from '../assets/react-icon.svg';
import Sanity from '../assets/sanity_logo_red.svg';
import Expo from '../assets/expo.svg';
import Firebase from '../assets/firebase.svg';
import Arrow from '../assets/arrow-down.svg';

export const GatsbyIcon = () => (
	<Gatsby
		sx={{
			width: '2em',
			height: '2em',
			fill: '#362066',
		}}
	/>
);

export const FirebaseIcon = () => (
	<Firebase
		sx={{
			width: '2em',
			height: '2em',
			fill: '#FFCA28',
		}}
	/>
);

export const ReactIcon = () => (
	<ReactJs
		sx={{
			width: '2em',
			height: '2em',
			fill: 'black',
		}}
	/>
);

export const SanityIcon = () => (
	<Sanity
		sx={{
			width: '3em',
			height: '3em',
			fill: 'red',
		}}
	/>
);

export const ExpoIcon = () => (
	<Expo
		sx={{
			width: '2em',
			height: '2em',
		}}
	/>
);

export const ArrowDown = () => (
	<Arrow
		sx={{
			gridColumn: '4',
			gridRow: '4',
			height: 40,
			width: 40,
		}}
	/>
);

export default { ExpoIcon, SanityIcon, ReactIcon, FirebaseIcon, GatsbyIcon };
