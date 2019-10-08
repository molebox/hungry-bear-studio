/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from './../components/layout';
import Navbar from './../components/navbar';
import Main from './../components/main';
import Footer from './../components/footer';

const OuterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr auto 1fr 1fr;
	// grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas: '. leftNav content rightNav .';

	height: 100%;
`;

const Container = styled.div`
	grid-area: content;
	grid-column: 3;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
`;

const ContentContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Card = styled.section`
	background: #ffffff;
	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	border-radius: 20px;
	padding: 1em;

	width: 645px;
	height: 450px;
`;

const Images = styled.div`
	height: 60%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	height: 20%;

	// display: flex;
	// justify-content: center;
	// align-content: center;
	// text-align: center;
	margin: 0 1em 0 1em;
`;

const Links = styled.div`
	height: 20%;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Polygon = styled.div`
	width: 300px;
	height: 80px;
	background: #df7334;
	border: 2px solid #ffffff;
	transform: skew(-20deg);

	margin: 0.5em;
	margin-bottom: 3em;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		transform: skew(20deg);
	}
`;

const Button = styled.button`
	background: #212121;
	border-radius: 5px;
	width: 130px;
	height: 45px;
	padding: 1em;
	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;

	// &:hover {
	// 	background: #A5A5A5;
	// 	color: #000000;
	// }
`;

const LeftNav = styled.div`
	grid-area: leftNav;
	grid-column: 2;
`;

const RightNav = styled.div`
	grid-area: rightNav;
	grid-column: 4;
`;

const Projects = () => {
	return (
		<Layout>
			<Navbar />
			<Main>
				<OuterContainer>
					<LeftNav>left</LeftNav>
					<Container>
						<Polygon>
							<h1
								sx={{
									fontFamily: 'heading',
									fontSize: [5],
									fontWeight: 'body',
									color: 'text',
									letterSpacing: 'body',
									lineHeight: 'logo',
									textShadow: '5px 9px 13px #000',
								}}
							>
								PROJECTS
							</h1>
						</Polygon>
						<ContentContainer>
							<Card>
								<Images>
									<div style={{ border: '1px solid red', width: '80%', height: '80%' }}></div>
								</Images>
								<Content>
									<p
										sx={{
											fontFamily: 'body',
											flexBasis: 'center',
										}}
									>
										A clean and simple SPA for an architect. Includes Instagram feed. Backend support is provided via
										Sanity. Created with JavaScript, React, Gatsby, Sanity and CSS Grid. Utilizes Gatsby Themes
									</p>
								</Content>

								<Links>
									<Button
										sx={{
											fontWeight: 'heading',
											fontFamily: 'heading',
											letterSpacing: 'body',
											':hover': {
												color: 'darkText',
												backgroundColor: 'primary',
												fontFamily: 'heading',
												fontWeight: 'bold',
											},
										}}
									>
										VIEW CODE
									</Button>
									<Button
										sx={{
											fontWeight: 'heading',
											fontFamily: 'heading',
											letterSpacing: 'body',
											':hover': {
												color: 'darkText',
												backgroundColor: 'primary',
												fontFamily: 'heading',
												fontWeight: 'bold',
											},
										}}
									>
										VIEW SITE
									</Button>
								</Links>
							</Card>
						</ContentContainer>
					</Container>
					<RightNav>right</RightNav>
				</OuterContainer>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Projects;
