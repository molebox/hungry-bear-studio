/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
	grid-area: footer;
	height: 4em;

	flex-shrink: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () => {
	return (
		<FooterContainer
			sx={{
				borderTopColor: 'primary',
				borderTopWidth: '3px',
				backgroundColor: 'secondary',
				borderTopStyle: 'solid',
			}}
		>
			<h4
				sx={{
					font: 'heading',
					fontFamily: 'body',
					fontSize: [1],
					color: 'lightText',
				}}
			>
				Created by Hungry Bear Studio with Gatsby & Sanity.io
			</h4>
		</FooterContainer>
	);
};

export default Footer;
