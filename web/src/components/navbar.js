/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import github from '../static/images/github.png';
import twitter from '../static/images/twitter.png';
import { Link } from 'gatsby';

const Nav = styled.nav`
	grid-area: navbar;
	height: 4em;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	word-spacing: 0.5em;

	& > a > h1 {
		font-size: 1em;
		margin-left: 1em;
	}

	& div > a {
		margin: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-area: navbar;
		height: 4em;

		display: flex;
		justify-content: space-between;
		align-items: center;
		word-spacing: 0.5em;

		& > a > h1 {
			font-size: 1.5em;
			margin-left: 5em;
		}
	}
`;

const Links = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	& > a {
		width: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 15em;
	}
`;

const Navbar = () => {
	return (
		<Nav
			sx={{
				borderBottomColor: 'primary',
				borderBottomWidth: '3px',
				backgroundColor: 'secondary',
				borderBottomStyle: 'solid',
			}}
		>
			<Link
				sx={{
					textDecoration: 'none',
					color: 'background',
				}}
				to="/"
			>
				<h1
					sx={{
						fontFamily: 'heading',
						fontWeight: 'heading',
						letterSpacing: 'body',
					}}
				>
					HUNGRY BEAR STUDIO
				</h1>
			</Link>
			<Links>
				<a href="https://twitter.com/studio_hungry">
					<img src={twitter} alt="twitter logo" />
				</a>
				<a href="https://github.com/molebox?tab=repositories">
					<img src={github} alt="github logo" />
				</a>
			</Links>
		</Nav>
	);
};

export default Navbar;
