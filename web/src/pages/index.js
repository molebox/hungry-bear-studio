/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Gatsby from '../assets/gatsby.svg';
import ReactJs from '../assets/react-icon.svg';
import Sanity from '../assets/sanity_logo_red.svg';
import Expo from '../assets/expo.svg';
import Firebase from '../assets/firebase.svg';
import Layout from '../components/layout';
import Main from '../components/main';
import SEO from 'gatsby-theme-seo/src/components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';

const SEODescription = `
Hello my name is Richard Haines, I work under the moniker Hungry Bear Studio. I’m a web and mobile
developer based in the north of Sweden. I love the creative process of taking an idea from design to
finished solution.
`;

const SEOKeywords = ['Web Developer', 'Mobile Developer', 'React', 'Gatsby', 'Expo', 'React Native'];

const Container = styled.section`
	position: relative;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(3, 1fr);

	height: 100vh;
	width: 100%;
`;

const Logo = styled.div`
	grid-row: 1;
	grid-column: 2/6;

	display: flex;
	flex-direction: column;
	justify-content: space-evently;
	margin-top: 3em;

	& > h1 {
		font-size: 25px;
		z-index: 10;
	}

	& > h2 {
		font-size: 20px;
		z-index: 100;
	}

	&::before {
		content: '';
		position: absolute;
		background-color: #fff226;
		width: 5em;
		height: 8em;
		z-index: 10;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-row: 2;
		grid-column: 2/5;

		&::before {
			content: '';
			position: absolute;
			background-color: #fff226;
			width: 5em;
			height: 12em;
			z-index: 10;
		}

		& > h1 {
			font-size: 60px;
			z-index: 10;
		}

		& > h2 {
			z-index: 10;
		}
	}
`;

const YellowBox = styled.div`
	grid-column: 3/6;
	grid-row: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff226;
	position: relative;

	& > ul > li {
		font-size: 1em;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: 1px solid black;
	}

	&::before {
		top: 1rem;
		bottom: 1rem;
		right: 1rem;
	}

	&::after {
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-column: 5;
		grid-row: 2;

		& > ul > li {
			font-size: 1.5em;
		}
	}
`;

const Email = styled.div`
	grid-column: 2/6;
	grid-row: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff226;
	position: relative;
	margin-top: 1em;

	height: 35%;

	& > h3 {
		font-size: 10px;
		font-weight: bold;
	}

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
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
	}

	& > h3 {
		transition: all 0.5s ease;
	}

	& > h3:hover {
		font-size: 25px;
		cursor: pointer;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-column: 2/4;
		grid-row: 3;
		height: 40%;

		& > h3 {
			font-size: 20px;
		}

		& > h3 {
			transition: all 0.5s ease;
		}

		& > h3:hover {
			font-size: 25px;
			cursor: pointer;
		}
	}
`;

const Projects = styled.section`
	position: relative;
	background-color: white;
	height: 100%;

	display: grid;
	align-items: center;

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: 1px solid black;
	}

	&::before {
		top: 1rem;
		bottom: 1rem;
		right: 1rem;
	}

	&::after {
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-template-columns: repeat(2, 1fr);
		&::before,
		&::after {
			content: '';
			position: absolute;
			border: 1px solid black;
		}

		&::before {
			top: 1.5rem;
			bottom: 1.5rem;
			right: 1.5rem;
		}

		&::after {
			bottom: 1.5rem;
			left: 1.5rem;
			right: 1.5rem;
		}
	}
`;

const ProjectCard = styled.div`
	margin: 1em;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		background-color: #fff226;
		width: 5em;
		height: 12em;
		top: 2em;
		z-index: 1000;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		height: 80%;
		width: 70%;
		margin: 3em;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			background-color: #fff226;
			width: 5em;
			height: 12em;
			top: 2em;
			z-index: 1000;
		}
	}
`;

const ProjectDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 1em;
	border-right: 2px solid black;
	border-bottom: 2px solid black;

	& > h4 {
		color: black;
		font-size: 1em;
		z-index: 2000;
	}

	& > p {
		color: black;
		z-index: 2000;
		font-size: 0.8em;
		padding: 1em;
		font-family: Poppins;
		letter-spacing: 2px;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		height: 80%;

		& > h4 {
			color: black;
			font-size: 1.5em;
			z-index: 2000;
		}

		& > p {
			color: black;
			z-index: 2000;
			font-size: 1em;
			padding: 1em;
			font-family: Poppins;
			letter-spacing: 2px;
		}
	}
`;

const IconContainer = styled.div`
	display: flex;
	width: 60%;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 1em;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		width: 60%;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const GatsbyIcon = () => (
	<Gatsby
		sx={{
			width: '1.5em',
			height: '1.5em',
			fill: '#362066',
		}}
	/>
);

const FirebaseIcon = () => (
	<Firebase
		sx={{
			width: '1.5em',
			height: '1.5em',
			fill: '#FFCA28',
		}}
	/>
);

const ReactIcon = () => (
	<ReactJs
		sx={{
			width: '1.5em',
			height: '1.5em',
			fill: 'black',
		}}
	/>
);

const SanityIcon = () => (
	<Sanity
		sx={{
			width: '1.5em',
			height: '1.5em',
			fill: 'red',
		}}
	/>
);

const ExpoIcon = () => (
	<Expo
		sx={{
			width: '1.5em',
			height: '1.5em',
		}}
	/>
);

const Index = () => {
	const projects = useStaticQuery(query);
	const projectList = projects.allSanityProject.edges;

	return (
		<Layout>
			<SEO title="Hungry Bear Studio Web and Mobile Design" description={SEODescription} keywords={SEOKeywords} />
			<Main>
				<Container>
					<Logo>
						<h1
							sx={{
								fontFamily: 'heading',
								letterSpacing: 'text',
								fontWeight: 'body',
								color: 'darkText',
							}}
						>
							HUNGRY BEAR STUDIO
						</h1>
						<h2
							sx={{
								fontFamily: 'heading',
								letterSpacing: 'body',
								color: 'darkText',
								fontWeight: 'body',
								wordWrap: 'break-word',
							}}
						>
							Hello I'm Richard Haines. I'm a software developer who specializes in frontend and mobile development.
						</h2>
					</Logo>
					<YellowBox>
						<ul
							sx={{
								listStyle: 'none',
								fontFamily: 'heading',
								letterSpacing: 'body',
								color: 'darkText',
								fontWeight: 'bold',
							}}
						>
							<li key="JavaScript">JavaScript</li>
							<li key="React">React</li>
							<li key="Gatsby">Gatsby</li>
							<li key="Expo">Expo</li>
							<li key="Sanity">Sanity</li>
						</ul>
					</YellowBox>
					<Email>
						<h3
							sx={{
								fontFamily: 'heading',
								letterSpacing: 'body',
								color: 'darkText',
								fontWeight: 'body',
								wordWrap: 'break-word',
							}}
						>
							roar@hungrybearstudio.com
						</h3>
					</Email>
				</Container>
				<Projects>
					{projectList.map(({ node }) => (
						<ProjectCard>
							<ProjectDetails>
								<h4
									sx={{
										fontFamily: 'heading',
										letterSpacing: 'body',
									}}
								>
									{node.title}
								</h4>
								<PortableText blocks={node._rawDescription} />
								<IconContainer>
									{node.stack.map((item) => {
										if (item === 'Gatsby') {
											return <GatsbyIcon />;
										}
										if (item === 'Expo') {
											return <ExpoIcon />;
										}

										if (item === 'Firebase') {
											return <FirebaseIcon />;
										}

										if (item === 'Sanity') {
											return <SanityIcon />;
										}

										if (item === 'React') {
											return <ReactIcon />;
										}
									})}
								</IconContainer>
							</ProjectDetails>
						</ProjectCard>
					))}
				</Projects>
			</Main>
		</Layout>
	);
};

export default Index;

export const query = graphql`
	query MyProjectsQuery {
		allSanityProject {
			edges {
				node {
					stack
					_rawDescription
					packageLink
					title
					slug {
						current
					}
					githubLink
					exampleSiteLink
					projectImage {
						asset {
							fluid {
								...GatsbySanityImageFluid
							}
						}
					}
				}
			}
		}
	}
`;
