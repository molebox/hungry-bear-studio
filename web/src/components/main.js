/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Container = styled.main`
	grid-area: main;
	flex: 1;
	background-color: white;

	height: 100%;
	width: 100%;

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: 1px solid black;
	}

	&::before {
		top: 1rem;
		bottom: 1rem;
		left: 1rem;
	}

	&::after {
		top: 1rem;
		left: 1rem;
		right: 1rem;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		&::before,
		&::after {
			content: '';
			position: absolute;
			border: 1px solid black;
		}

		&::before {
			top: 1.5rem;
			bottom: 1.5rem;
			left: 1.5rem;
		}

		&::after {
			top: 1.5rem;
			left: 1.5rem;
			right: 1.5rem;
		}
	}
`;

const Main = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Main;
