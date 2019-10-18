/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from './../components/layout';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Footer from '../components/footer';
import SEO from 'gatsby-theme-seo/src/components/seo';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
`;

const Content = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr auto 1fr;
	grid-template-areas:
		'. orangeBox .'
		'links links link'
		'bio bio bio';

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas:
			'. orangeBox orangeBox .'
			'. links links .'
			'. bio bio .';
	}
`;

const OrangeBox = styled.div`
	grid-area: orangeBox;
	flex-direction: column
	display: flex;
	justify-content: center;
	align-items: center;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		grid-area: orangeBox;
		display: flex;
		justify-content: space-evenly;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	grid-area: title;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		justify-content: center;
		align-items: center;

		grid-area: title;
		background: #1a1a1a;
		margin-bottom: 2rem;
		padding: 2rem;
		border-radius: 0.4em;
		border: 1px solid #df7334;
	}
`;

const Polygon = styled.div`
	width: 200px;
	height: 50px;
	background: #212121;
	border: 1px solid #df7334;
	transform: skew(-20deg);

	margin: 0.5em;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		transform: skew(20deg);
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 440px;
		height: 100px;
		background: #212121;
		border: 1px solid #df7334;
		transform: skew(-20deg);

		margin: 0.5em;

		display: flex;
		justify-content: center;
		align-items: center;

		& > div {
			transform: skew(20deg);
		}
	}
`;

const Links = styled.div`
	grid-area: links;

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	& > a::after {
		content: '';
		display: block;
		width: 0%;
		border-bottom: 2px solid #df7334;
		transition: 0.5s;
		position: absolute;
		z-index: 10;
	}

	& > a:hover::after {
		width: 7%;
		position: absolute;
	}

	& > a > h2 {
		font-size: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		margin-bottom: 2em;

		& > a > h2 {
			font-size: 1.5em;
		}
	}
`;

const Bio = styled.div`
	grid-area: bio;
	color: #ffffff;
	margin-top: 2em;

	display: flex;
	flex-direction: column;
	align-items: stretch;

	& > h3 {
		font-size: 1em;
		padding: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
	}
`;

const SEODescription = `
Hello my name is Richard Haines, I work under the moniker Hungry Bear Studio. I’m a web and mobile
developer based in the north of Sweden. I love the creative process of taking an idea from design to
finished solution.
`;

const SEOKeywords = ['Web Developer', 'Mobile Developer', 'React', 'Gatsby', 'Expo', 'React Native'];

const Index = () => {
	return (
		<Layout>
			<SEO title="Hungry Bear Studio Web and Mobile Design" description={SEODescription} keywords={SEOKeywords} />
			<Navbar />
			<Main>
				<Container>
					<Content>
						{/* <Title>
							<h1
								sx={{
									fontFamily: 'heading',
									fontWeight: 'body',
									color: 'text',
									letterSpacing: 'body',
									lineHeight: 'logo',
									textShadow: '5px 9px 13px #000',
								}}
							>
								Web & Mobile Developer
							</h1>
						</Title> */}
						<OrangeBox>
							<Polygon>
								<div
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
									WEB
								</div>
							</Polygon>
							<Polygon>
								<div
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
									MOBILE
								</div>
							</Polygon>
							<Polygon>
								<div
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
									DEV
								</div>
							</Polygon>
						</OrangeBox>
						<Links>
							<Link to="/projectIndex" css={{ textDecoration: 'none' }}>
								<h2
									sx={{
										fontFamily: 'heading',

										fontWeight: 'body',
										color: 'text',
									}}
								>
									PROJECTS
								</h2>
							</Link>
							<Link to="/contact" css={{ textDecoration: 'none' }}>
								<h2
									sx={{
										fontFamily: 'heading',

										fontWeight: 'body',
										color: 'text',
										textDecoration: 'none',
									}}
								>
									CONTACT
								</h2>
							</Link>
						</Links>
						<Bio>
							<h3
								sx={{
									fontFamily: 'body',

									fontWeight: 'body',

									letterSpacing: 'body',
								}}
							>
								Hello my name is Richard Haines, I work under the moniker Hungry Bear Studio. I’m a web and mobile
								developer based in the north of Sweden. I love the creative process of taking an idea from design to
								finished solution.
							</h3>
							<h3
								sx={{
									fontFamily: 'body',

									fontWeight: 'body',

									letterSpacing: 'body',
								}}
							>
								Some of my favorite tools include React, Gatsby, Emotion, Sanity and Expo. Im proficient in JavaScript,
								TypeScript, CSS, CSS in JS and HTML.
							</h3>
						</Bio>
					</Content>
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Index;
