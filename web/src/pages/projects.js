/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from './../components/layout';
import Navbar from './../components/navbar';
import Main from './../components/main';
import Footer from './../components/footer';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
`;

const ContentContainer = styled.section`
	display: grid;
	grid-template-columns: 0.5fr 1fr 0.5fr;
	grid-template-rows: auto 0.5fr;
	grid-template-areas:
		'. content .'
		'. links .';

	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;

	height: 30em;
	width: 100%;
`;

const Header = styled.div`
	grid-area: header;

	border: red solid 3px;
`;

const Content = styled.div`
	grid-area: content;
`;

const Links = styled.div`
	grid-area: links;

	border: blue solid 3px;
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

const Projects = () => {
	return (
		<Layout>
			<Navbar />
			<Main>
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
						<Header></Header>
						<Content>content here</Content>
						<Links>links here</Links>
					</ContentContainer>
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Projects;
