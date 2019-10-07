/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import github from '../static/images/github.png';
import twitter from '../static/images/twitter.png';

const Nav = styled.nav`
	grid-area: navbar;
	height: 4em;

	display: flex;
	justify-content: space-between;
	align-items: center;
	word-spacing: 0.5em;
`;

const Links = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 15em;

	& > a > img:hover {
		filter: brightness(50%);
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
			<h1
				sx={{
					fontFamily: 'heading',
					fontSize: [4],
					fontWeight: 'heading',
					marginLeft: '5em',
					letterSpacing: 'body',
				}}
			>
				HUNGRY BEAR STUDIO
			</h1>
			<Links>
				<a href="https://twitter.com/studio_hungry">
					<img src={twitter} />
				</a>
				<a href="https://github.com/molebox?tab=repositories">
					<img src={github} />
				</a>
			</Links>
		</Nav>
	);
};

export default Navbar;
