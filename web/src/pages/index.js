/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { GatsbyIcon, ReactIcon, FirebaseIcon, ExpoIcon, SanityIcon } from '../components/icons';
import Layout from '../components/layout';
import Main from '../components/main';
import SEO from 'gatsby-theme-seo/src/components/seo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';

const SEODescription = `
	Hello I'm Richard Haines. I'm a software developer who specializes in frontend and mobile development.
`;

const SEOKeywords = ['Web Developer', 'Mobile Developer', 'React', 'Gatsby', 'Expo', 'React Native'];

const Container = styled.section`
	position: relative;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr;

	height: 100vh;
	width: 100%;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		position: relative;

		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(4, 1fr);

		height: 100vh;
		width: 100%;
	}
`;

const Logo = styled.div`
	grid-row: 2;
	grid-column: 2/6;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 3em;

	& > h1 {
		font-size: 2em;
		z-index: 10;
	}

	& > h2 {
		font-size: 1em;
		z-index: 100;
	}

	&::before {
		content: '';
		position: absolute;
		background-color: #fff226;
		width: 5em;
		height: 13em;
		z-index: 10;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-row: 2;
		grid-column: 2/5;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

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
			font-size: 1.3em;
			margin-right: 0.5em;
			z-index: 10;
		}
	}
`;

const YellowBox = styled.div`
	grid-column: 3/6;
	grid-row: 3/4;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff226;
	position: relative;

	& > ul > li {
		font-size: 0.8em;
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
			font-size: 1.2em;
		}
	}
`;

const Email = styled.div`
	grid-column: 2/6;
	grid-row: 4;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff226;
	position: relative;
	margin-top: 1em;
	cursor: pointer;
	border: 1px solid black;

	height: 55%;

	& > a > h3 {
		font-size: 10px;
		font-weight: bold;
	}

	&:hover {
		box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-column: 2/4;
		grid-row: 3;
		height: 40%;
		margin-top: 3em;
		cursor: pointer;

		& > a > h3 {
			font-size: 20px;
		}

		&:hover {
			box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
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
		justify-items: center;

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
	width: 70%;
	justify-content: space-evenly;
	align-items: center;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		width: 60%;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 2em;
	margin-bottom: 1em;
	width: 80%;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 100%;
	}
`;

const Button = styled.a`
	background: #fff226;
	border: 1px solid black;
	border-radius: 5px;
	width: 100px;
	height: 40px;
	font-size: 0.7em;
	padding: 1.2em;
	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	cursor: pointer;
	margin-bottom: 1em;

	display: flex;
	align-items: center;
	justify-content: center;
	color: #000000;

	&:hover {
		background: #d1c720;
	}

	&:active {
		background: #fff561;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 130px;
		height: 40px;
		font-size: 1em;
		padding: 1.2em;
	}
`;

const Triangle = styled.div`
	position: relative;
	cursor: pointer;

	grid-column: 4;
	grid-row: 5;
	width: 0;
	height: 0;
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-top: 50px solid black;

	animation: spring 2s;
	animation-timing-function: ease;
	animation-iteration-count: infinite;

	@keyframes spring {
		0% {
			transform: scale(1) translateY(0);
		}
		10% {
			transform: scale(1.2, 0.6);
		}
		30% {
			transform: scale(0.8, 1.1) translateY(-50px);
		}
		50% {
			transform: scale(1) translateY(0);
		}
		100% {
			transform: translateY(0);
		}
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-column: 4;
		grid-row: 4;

		width: 0;
		height: 0;
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		border-top: 70px solid black;
	}
`;

const Twitter = styled.a`
	font-size: 14px;
	color: #000000;
	grid-column: 2;
	grid-row: 5;
	cursor: pointer;

	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	
	& > h4 {
		font-size: 1.1em;
	}

	&::after {
		content: '';
		display: block;
		width: 15%;
		padding-top: 2em;
		border-bottom: 2px solid black;
		transition: 0.5s;
		position: absolute;
		z-index: 10000;
	}

	&:hover::after {
		width: 20%;
		position: absolute;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		font-size: 20px;
		color: #000000;
		grid-column: 2;
		grid-row: 4;
		cursor: pointer;

		display: flex;
		justify-content: flex-end;
		align-items: flex-start;

		&::after {
			content: '';
			display: block;
			width: 15%;
			padding-top: 2em;
			border-bottom: 2px solid black;
			transition: 0.5s;
			position: absolute;
			z-index: 10000;
		}

		&:hover::after {
			width: 20%;
			position: absolute;
		}
	}
`;

const OuterTriangle = styled.a`
	grid-column: 4;
	grid-row: 5;
	cursor: pointer;

	@media (min-width: 48em) {
		grid-column: 4;
		grid-row: 4;
		cursor: pointer;
	}
`;

const Blog = styled.div`
	display: flex;
	align-items: center;
	grid-row: 1;
	grid-column: 2;
	cursor: pointer;
	margin-top: 2em;

	& > a > h5 {
		font-size: 1.2em;
	}

	&:hover::after {
		width: 7%;
		position: absolute;
	}

	@media (min-width: 48em) {
		& > a > h5 {
			font-size: 1.5em;
		}
	}
`;

const JustAskDev = styled.div`
	display: flex;
	align-items: center;
	grid-row: 1;
	grid-column: 3;
	cursor: pointer;
	margin-top: 2em;

	& > a > h5 {
		font-size: 1.2em;
	}

	&:hover::after {
		width: 7%;
		position: absolute;
	}

	@media (min-width: 48em) {
		& > a > h5 {
			font-size: 1.5em;
		}
	}
`;

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
							Hello I'm Richard Haines. I'm a software developer who specializes in frontend development with a focus on the JAMstack.
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
							<li key="GraphQL">GraphQL</li>
							<li key="Sanity">Sanity</li>
						</ul>
					</YellowBox>
					<Email>
						<a
							sx={{
								textDecoration: 'none',
							}}
							name="email_link"
							href="mailto:roar@hungrybearstudio.com"
						>
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
						</a>
					</Email>
					<OuterTriangle name="project_link" href="#projectsSection">
						<Triangle />
					</OuterTriangle>
					<Twitter
						name="twitter_link"
						href="https://twitter.com/studio_hungry"
						sx={{
							textDecoration: 'none',
						}}
					>
						<h4
							sx={{
								fontFamily: 'heading',
								fontWeight: 'body',
							}}
						>
							Twitter: @studio_hungry
						</h4>
					</Twitter>
					<Blog>
						<Link
							sx={{
								textDecoration: 'none',
							}}
							to="/blogIndex"
						>
							<h5
								sx={{
									fontFamily: 'heading',
									letterSpacing: 'body',
									color: 'darkText',
									fontWeight: 'body',
									paddingBottom: '1em',
								}}
							>
								Blog
							</h5>
						</Link>
					</Blog>
					<JustAskDev>
						<a
							sx={{
								textDecoration: 'none',
							}}
							href="https://justask.dev/"
						>
							<h5
								sx={{
									fontFamily: 'heading',
									letterSpacing: 'body',
									color: 'darkText',
									fontWeight: 'body',
									paddingBottom: '1em',
								}}
							>
								justask.dev
							</h5>
						</a>
					</JustAskDev>
				</Container>
				<Projects id="projectsSection">
					{projectList.map(({ node }) => (
						<ProjectCard key={node.title}>
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
											return <GatsbyIcon key="gatsbyIcon" />;
										}
										if (item === 'Expo') {
											return <ExpoIcon key="expoIcon" />;
										}

										if (item === 'Firebase') {
											return <FirebaseIcon key="firebaseIcon" />;
										}

										if (item === 'Sanity') {
											return <SanityIcon key="sanityIcon" />;
										}

										if (item === 'React') {
											return <ReactIcon key="reactIcon" />;
										}
									})}
								</IconContainer>
								<ButtonContainer>
									{node.githubLink ? (
										<Button
											sx={{
												fontFamily: 'heading',
												fontWeight: 'heading',
												textDecoration: 'none',
											}}
											href={node.githubLink}
										>
											VIEW CODE
										</Button>
									) : null}
									{node.exampleSiteLink ? (
										<Button
											sx={{
												fontFamily: 'heading',
												fontWeight: 'heading',
												textDecoration: 'none',
											}}
											href={node.exampleSiteLink}
										>
											VIEW SITE
										</Button>
									) : null}
									{node.packageLink ? (
										<Button
											sx={{
												fontFamily: 'heading',
												fontWeight: 'heading',
												textDecoration: 'none',
											}}
											href={node.packageLink}
										>
											VIEW NPM
										</Button>
									) : null}
								</ButtonContainer>
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
