/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import Main from '../../components/main';
import SEO from 'gatsby-theme-seo/src/components/seo';
import GatsbyLink from 'gatsby-link';

const SEODescription = `
  Hello I'm Richard Haines. I'm a software developer who specializes in frontend and mobile development.
  This is my blog where i write about projects im working on and things that interest me.
`;

const SEOKeywords = ['Web Developer', 'Mobile Developer', 'React', 'Gatsby', 'Expo', 'React Native', 'Blog'];

const Container = styled.section`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto 1fr;
	align-items: center;

	height: 100vh;
	margin: 2em auto;
	max-width: 80%;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		margin: 0 auto;
	}
`;

const Header = styled.header`
	display: flex;
	grid-column: 2;
	grid-row: 1;

	&::before {
		content: '';
		position: absolute;
		background-color: #fff226;
		width: 5em;
		height: 9em;
		z-index: 10;
		margin-top: 3em;
	}

	& > h1 {
		font-size: 2em;
		z-index: 10;
		margin-top: 3em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		& > h1 {
			font-size: 3em;
			z-index: 10;
		}
	}
`;

const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: 2;
	grid-row: 2;
	height: 100%;
	width: 100%;

	& > p {
		font-size: 1em;
		padding-top: 1em;
	}

	& > h3 {
		z-index: 100;
		margin-top: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		& > p {
			font-size: 1.2em;
			padding-top: 1em;
		}
	}
`;

const BackButton = styled.div`
	padding: 0.8em;
	width: 4em;

	position: absolute;
	top: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	cursor: pointer;
	border: 1px solid black;

	&:hover {
		box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	}

	& > a {
		font-size: 1em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		padding: 1em;
		width: 8em;

		position: absolute;
		top: 3em;
		right: 0;

		display: flex;
		justify-content: center;
		align-items: flex-start;
		cursor: pointer;
		border: 1px solid black;

		&:hover {
			box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
		}

		& > a {
			font-size: 1.2em;
		}
	}
`;

function PageTemplate({ data: { mdx } }) {
	return (
		<Layout>
			<SEO title="Hungry Bear Studio Blog" description={SEODescription} keywords={SEOKeywords} />
			<Main>
				<Container>
					<BackButton
						sx={{
							backgroundColor: 'yellow',
						}}
					>
						<GatsbyLink
							sx={{
								textDecoration: 'none',
								color: 'darkText',
								fontFamily: 'heading',
								fontWeight: 'heading',
							}}
							to="/blogIndex"
						>
							Back
						</GatsbyLink>
					</BackButton>
					<Header>
						<h1
							sx={{
								fontFamily: 'heading',
								letterSpacing: 'text',
								fontWeight: 'body',
								color: 'darkText',
							}}
						>
							{mdx.frontmatter.title}
						</h1>
					</Header>
					<Content
						sx={{
							fontFamily: 'body',
							letterSpacing: 'body',
							color: 'darkText',
							fontWeight: 'body',
						}}
					>
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</Content>
				</Container>
			</Main>
		</Layout>
	);
}

export default PageTemplate;
