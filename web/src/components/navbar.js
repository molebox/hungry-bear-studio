/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Nav = styled.nav`
	grid-area: navbar;
	height: 4em;

	display: flex;
	justify-content: space-between;
	align-items: center;
	word-spacing: 0.5em;
`;

// const GithubLink = styled.img`

//     width: 31px;
//     height: 26px;
//     margin-right: 5em;
//     background-image: url('../assets/github.png');
// `;

const Links = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 15em;
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
				<a>twitter</a>
				<a>github</a>
			</Links>
		</Nav>
	);
};

export default Navbar;
