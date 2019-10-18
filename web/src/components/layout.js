import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const Container = styled.div`
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		'navbar'
		'main'
		'footer';

	height: 100vh;
	width: 100vw;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'navbar'
			'main'
			'footer';

		height: 100vh;
		width: 100vw;
	}
`;

const Layout = ({ children }) => (
	<Container>
		<Global
			styles={css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;

					@font-face {
						font-family: 'MarketDeco';
						src: url('../../../static/fonts/MarketDeco.woff') format('woff');
					}
				}
				body {
					scroll-behavior: smooth;
					overflow-y: scroll;
					-webkit-overflow-scrolling: touch;
					overflow-x: hidden;
				}
			`}
		/>
		{children}
	</Container>
);

export default Layout;
