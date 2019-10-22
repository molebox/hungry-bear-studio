/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const BearContainer = styled.div`
	grid-row: 1;
	grid-column: 3;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin-bottom: 3em;
`;

const OrangeBox = styled.div`
	grid-area: orangeBox;
	flex-direction: column
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2em;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-area: orangeBox;
		display: flex;
		justify-content: space-evenly;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column
	align-items: center;

	grid-area: title;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		justify-content: center;
		align-items: center;

		grid-area: title;
		background: #1a1a1a;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 0.4em;
		border: 1px solid #df7334;
	}
`;

const Polygon = styled.div`
	width: 200px;
	height: 50px;
	background: #212121;
	border: 1px solid #df7334;
	transform: skew(-20deg);

	margin: 0.5em;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		transform: skew(20deg);
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 440px;
		height: 100px;
		background: #212121;
		border: 1px solid #df7334;
		transform: skew(-20deg);

		margin: 0.5em;

		display: flex;
		justify-content: center;
		align-items: center;

		& > div {
			transform: skew(20deg);
		}
	}
`;

const Links = styled.div`
	grid-area: links;

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	& > a::after {
		content: '';
		display: block;
		width: 0%;
		border-bottom: 2px solid #df7334;
		transition: 0.5s;
		position: absolute;
		z-index: 10;
	}

	& > a:hover::after {
		width: 7%;
		position: absolute;
	}

	& > a > h2 {
		font-size: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		margin-bottom: 2em;

		& > a > h2 {
			font-size: 1.5em;
		}
	}
`;

const Bio = styled.div`
	grid-area: bio;
	color: #ffffff;
	margin-top: 2em;

	display: flex;
	flex-direction: column;
	align-items: stretch;

	& > h3 {
		font-size: 1em;
		padding: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
	}
`;

const Content = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto auto 1fr;
	grid-template-areas:
		'. title .'
		'. links .'
		'bio bio bio';

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas:
			'. title title .'
			'. links links .'
			'. bio bio .';
	}
`;
