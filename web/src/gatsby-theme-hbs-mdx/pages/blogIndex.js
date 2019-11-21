/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from 'gatsby-theme-seo/src/components/seo';
import Main from '../../components/main';
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
	align-items: center;

	height: 100vh;
	margin: 1em auto;
	max-width: 80%;
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	grid-column: 2;
	grid-row: 1;

	height: 100%;

	&::before {
		content: '';
		position: absolute;
		background-color: #fff226;
		width: 5em;
		height: 15em;
		z-index: 10;
	}

	& > h1 {
		font-size: 2em;
		z-index: 10;
	}

	& > h2 {
		font-size: 1.2em;
		z-index: 10;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		grid-column: 2;
		grid-row: 1;

		height: 100%;

		&::before {
			content: '';
			position: absolute;
			background-color: #fff226;
			width: 5em;
			height: 15em;
			z-index: 10;
		}

		& > h1 {
			font-size: 3em;
			z-index: 10;
		}

		& > h2 {
			font-size: 1.6em;
			z-index: 10;
		}
	}
`;

const Posts = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: 2;
	height: 100%;
`;

const PostBox = styled.div`
	padding: 2em;

	&:hover {
		box-shadow: 3px 3px 24px 1px hsla(0, 0%, 20.8%, 0.29);
	}

	& > li > a > h3 {
		font-size: 1.6em;
	}

	& > ul > li > p {
		font-size: 1.2em;
		margin-top: 2em;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		padding: 2em;

		&:hover {
			box-shadow: 3px 3px 24px 1px hsla(0, 0%, 20.8%, 0.29);
		}

		& > li > a > h3 {
			font-size: 2em;
		}

		& > ul > li > p {
			font-size: 1.2em;
			padding-top: 0.5em;
		}
	}
`;

const BackButton = styled.div`
	padding: 0.8em;
	width: 4em;

	position: absolute;
	top: 2em;
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
		top: 2em;
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

const BlogIndex = ({ data }) => {
	const { edges: posts } = data.allMdx;
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
							to="/"
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
							Blog
						</h1>
						<h2
							sx={{
								fontFamily: 'body',
								letterSpacing: 'body',
								color: 'darkText',
								fontWeight: 'body',
								wordWrap: 'break-word',
							}}
						>
							This is my blog where i write about projects im working on and things that interest me.
						</h2>
					</Header>
					<Posts>
						<ul
							sx={{
								listStyle: 'none',
								fontFamily: 'heading',
								letterSpacing: 'body',
								color: 'darkText',
								fontWeight: 'bold',
							}}
						>
							{posts.map(({ node: post }) => (
								<PostBox
									sx={{
										borderColor: 'black',
										borderStyle: 'solid',
										borderWidth: '1px',
									}}
								>
									<li key={post.id}>
										<Link
											sx={{
												textDecoration: 'none',
											}}
											to={post.fields.slug}
										>
											<h3
												sx={{
													fontFamily: 'heading',
													letterSpacing: 'body',
													color: 'darkText',
													fontWeight: 'body',
												}}
											>
												{post.frontmatter.title}
											</h3>
											<p
												sx={{
													fontFamily: 'body',
													letterSpacing: 'body',
													color: 'darkText',
													fontWeight: 'body',
												}}
											>
												{post.excerpt}
											</p>
										</Link>
									</li>
								</PostBox>
							))}
						</ul>
					</Posts>
				</Container>
			</Main>
		</Layout>
	);
};

export default BlogIndex;
