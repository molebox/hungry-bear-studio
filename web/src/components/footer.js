/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
	grid-area: footer;
	height: 4em;
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
			the footer
		</FooterContainer>
	);
};

export default Footer;
