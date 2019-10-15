/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
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
	margin-top: 2rem;

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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2em;

	margin: 2em;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	background: #1a1a1a;
	margin-bottom: 2rem;
	padding: 2rem;
	border-radius: 0.4em;

	//border: solid white 1px;

	// &:hover {
	// 	box-shadow: 3px 4px 7px 0px hsl(22.100000000000023, 72.8%, 53.9%);
	// }

	& h4 {
		margin-bottom: 2rem;
	}

	@media (max-width: 700px) {
		display: block;
	}
`;

const Image = styled(Img)`
	// width: 100%;
	// height: 100%;
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
	justify-content: space-around;
	align-items: center;
	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	& > div > h4 {
		@media (max-width: 700px) {
			font-size: 1.5rem;
		}
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

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 1em;
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

	&:hover {
		background: #a5a5a5;
		color: #000000;
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
						<div
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
						</div>
					</Polygon>
				</Header>
				<Grid>
					{projectList.map(({ node }) => (
						<Card>
							{node.projectImage && <Image className="img" fluid={node.projectImage.asset.fluid} alt={node.title} />}
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
											color: 'primary',
											fontFamily: 'heading',
											fontWeight: 'heading',
											fontSize: [1],
											lineHeight: 'body',
										}}
										blocks={node._rawDescription}
									/>
								</div>
							</Description>
							<ButtonContainer>
								{node.githubLink ? (
									<>
										<Button>VIEW CODE</Button>
									</>
								) : null}
								{node.exampleSiteLink ? (
									<>
										<Button>VIEW SITE</Button>
									</>
								) : null}
								{node.packageLink ? (
									<>
										<Button>VIEW NPM</Button>
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
