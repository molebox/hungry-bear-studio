/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Main from '../components/main';
import Layout from '../components/layout';

import PortableText from '@sanity/block-content-to-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		margin-top: 2rem;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 1fr);
	grid-gap: 2em;
	margin: 1em;
	align-items: center;

	height: 100vh /* 48em = 768px DESKTOP */ @media (min-width: 48em) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: fit-content;

	background: #1a1a1a;
	padding: 2rem;
	border-radius: 0.4em;

	& h4 {
		margin-bottom: 2rem;
	}
`;

const Image = styled(Img)`
	border-radius: 0.4em;
	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	& > div > div {
		font-size: 16px;
		font-family: Open Sans;
		color: white;
		letter-spacing: 2px;
		font-weight: 300;
	}

	& > div > p {
		font-size: 16px;
		font-family: Open Sans;
		color: white;
		letter-spacing: 2px;
		font-weight: 300;
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const Polygon = styled.div`
	width: 200px;
	height: 50px;
	background: #212121;
	border: 1px solid #df7334;
	transform: skew(-20deg);

	margin-top: 2em;
	margin-bottom: 1em;

	display: flex;
	justify-content: center;
	align-items: center;

	& > h1 {
		transform: skew(20deg);
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 200px;
		height: 50px;
		background: #212121;
		border: 1px solid #df7334;
		transform: skew(-20deg);

		margin: 0.5em;
		margin-bottom: 3em;

		display: flex;
		justify-content: center;
		align-items: center;

		& > h1 {
			transform: skew(20deg);
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 2em;
`;

const Button = styled.a`
	background: #212121;
	border: 1px solid #df7334;
	border-radius: 5px;
	width: 130px;
	height: 40px;
	font-size: 1em;
	padding: 1.2em;
	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;

	&:hover {
		background: #a5a5a5;
		color: #000000;
	}

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		width: 130px;
		height: 45px;
	}
`;

const ProjectIndex = () => {
	const projects = useStaticQuery(query);
	const projectList = projects.allSanityProject.edges;

	return (
		<Layout>
			<Navbar />
			<Main>
				<Header>
					<Polygon>
						<h1
							sx={{
								fontFamily: 'heading',
								fontSize: [4],
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
				</Header>
				<Grid>
					{projectList.map(({ node }) => (
						<Card key={node.slug.current}>
							{node.projectImage ? (
								<Image className="img" fluid={node.projectImage.asset.fluid} alt={node.title} />
							) : null}
							<Description>
								<div>
									<h4
										sx={{
											color: 'text',
											fontFamily: 'heading',
											fontWeight: 'heading',
											fontSize: [3],
											lineHeight: 'body',
											letterSpacing: 'body',
											borderBottom: 'solid 0.1em',
											borderColor: 'text',
											padding: '1em',
										}}
									>
										{node.title}
									</h4>
									<PortableText
										sx={{
											fontFamily: 'heading',
											fontWeight: 'heading',
											lineHeight: 'body',
										}}
										blocks={node._rawDescription}
									/>
								</div>
							</Description>
							<ButtonContainer>
								{node.githubLink ? (
									<>
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
									</>
								) : null}
								{node.exampleSiteLink ? (
									<>
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
									</>
								) : null}
								{node.packageLink ? (
									<>
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
									</>
								) : null}
							</ButtonContainer>
						</Card>
					))}
				</Grid>
			</Main>
			<Footer />
		</Layout>
	);
};

export default ProjectIndex;

export const query = graphql`
	query MyProjectsQuery {
		allSanityProject {
			edges {
				node {
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
