/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from './../components/layout';
import Navbar from './../components/navbar';
import Main from './../components/main';
import Footer from './../components/footer';

import { TweenLite, Power3 } from 'gsap';

// https://github.com/wrongakram/gsap-slider/blob/master/src/App.js

const ProjectSection = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
	content: "";
	position: absolute;
	width: 900px;
	height: 550px;
	background: #f2f2f6;
	right: 0;
	bottom: 0;
	opacity: 0.8;
	z-index: -10;
`;

const ProjectContainer = styled.div`
	width: 1280px;
	min-width: 1280px;
	height: 600px;
	position: relative;
`;

const Arrow = styled.div`
	position: absolute;
	display: flex;
	width: 100px;
	align-items: center;
	justify-content: center;
	bottom: 0;
	top: 0;
	cursor: pointer;
	border-radius: 8px;
	transition: 0.3s ease-in-out;

	&:hover {
		box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
	}
	&.right {
		right: 0;
	}
	&.left {
		left: 0;
	}
`;

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600px;
`;

const ProjectImage = styled.div`
	width: 500px;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		content: '';
		position: absolute;
		width: 200px;
		height: 200px;
		background: #3f56da;
		left: 140px;
		top: 0;
		border-radius: 100%;
		z-index: -9;
	}

	ul {
		display: flex;
		position: absolute;
		overflow: hidden;
		height: 460px;
		width: 340px;
		box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);

		li {
			height: 460px;
			width: 340px;
			img {
				height: 460px;
				width: 340px;
			}
		}
	}
`;

const ProjectDescription = styled.div`
	width: 500px;
	height: 600px;
	display: flex;
	align-items: center;

	ul {
		position: absolute;
		overflow: hidden;
		width: 500px;
		height: 400px;
		li {
			width: 500px;
			height: 400px;
			color: $text;
			display: flex;
			align-items: center;
			position: absolute;
			opacity: 0;

			.content-inner {
				width: 500px;
			}
		}
	}
`;

const Title = styled.div`
	font-size: 26px;
	letter-spacing: 0.88px;
	line-height: 40px;
	font-weight: 700;
	margin-bottom: 16px;
	color: white;
`;

const Description = styled.div`
	font-size: 18px;
	letter-spacing: 0.88px;
	line-height: 28px;
	color: white;
`;

// const OuterContainer = styled.div`
// 	// display: grid;
// 	// grid-template-columns: 1fr 1fr auto 1fr 1fr;
// 	// // grid-template-rows: 1fr 1fr 1fr;
// 	// grid-template-areas: '. leftNav content rightNav .';

// 	// height: 100%;

// 	// width: 1440px;
// 	// border: solid red 2px;
// `;

// const Container = styled.div`
// 	grid-area: content;
// 	grid-column: 3;

// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;

// 	height: 100%;
// `;

// const ContentContainer = styled.section`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

// const Card = styled.section`
// 	background: #ffffff;
// 	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
// 	border-radius: 20px;
// 	padding: 1em;

// 	width: 645px;
// 	height: 450px;
// `;

// const Images = styled.div`
// 	height: 60%;

// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

// const Content = styled.div`
// 	height: 20%;

// 	// display: flex;
// 	// justify-content: center;
// 	// align-content: center;
// 	// text-align: center;
// 	margin: 0 1em 0 1em;
// `;

// const Links = styled.div`
// 	height: 20%;

// 	display: flex;
// 	justify-content: space-evenly;
// 	align-items: center;
// `;

// export const Polygon = styled.div`
// 	width: 300px;
// 	height: 80px;
// 	background: #df7334;
// 	border: 2px solid #ffffff;
// 	transform: skew(-20deg);

// 	margin: 0.5em;
// 	margin-bottom: 3em;

// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	& > div {
// 		transform: skew(20deg);
// 	}
// `;

// const Button = styled.button`
// 	background: #212121;
// 	border-radius: 5px;
// 	width: 130px;
// 	height: 45px;
// 	padding: 1em;
// 	box-shadow: 3px 4px 9px 2px hsla(0, 0%, 0%, 0.25);
// 	cursor: pointer;

// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	color: #ffffff;

// 	// &:hover {
// 	// 	background: #A5A5A5;
// 	// 	color: #000000;
// 	// }
// `;

// const LeftNav = styled.div`
// 	grid-area: leftNav;
// 	grid-column: 2;
// `;

// const RightNav = styled.div`
// 	grid-area: rightNav;
// 	grid-column: 4;
// `;

const Projects = () => {
	const imagesRef = React.useRef(null);
	const projectRef = React.useRef(null);

	const [isActive, setIsActive] = React.useState({
		currentActive: true,
		previousActive: false,
	});

	React.useEffect(() => {
		TweenLite.to(projectRef.children[0], 0, {
			opacity: 1,
		});
	}, []);

	//Image transition
	const slideLeft = (index, duration, multiplied = 1) => {
		TweenLite.to(imagesRef.children[index], duration, {
			x: -imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const slideRight = (index, duration, multiplied = 1) => {
		TweenLite.to(imagesRef.children[index], duration, {
			x: imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const scale = (index, duration) => {
		TweenLite.from(imagesRef.children[index], duration, {
			scale: 1.2,
			ease: Power3.easeOut,
		});
	};

	//Content transition

	const fadeOut = (index, duration) => {
		TweenLite.to(projectRef.children[index], duration, {
			opacity: 0,
		});
	};

	const fadeIn = (index, duration) => {
		TweenLite.to(projectRef.children[index], duration, {
			opacity: 1,
			delay: 1,
		});
	};

	const nextSlide = (index) => {
		if (imagesRef.children[index].classList.contains('active')) {
			setIsActive({ currentActive: false, previousActive: true });
			//Image transition
			slideLeft(0, 1);
			slideLeft(1, 1);
			scale(1, 1);
			slideLeft(2, 1);
			slideLeft(2, 0);
			fadeOut(0, 1);
			fadeIn(1, 1);
		} else if (imagesRef.children[1].classList.contains('active')) {
			setIsActive({ isActive2: false, isActive3: true });
			//Image transition
			slideRight(0, 1);
			slideLeft(1, 1, 2);
			slideLeft(2, 1, 2);
			scale(2, 1);
			//content transition
			fadeOut(1, 1);
			fadeIn(2, 1);
		} else if (imagesRef.children[2].classList.contains('active')) {
			setIsActive({ isActive1: true, isActive3: false });
			//Image transition
			slideLeft(2, 1, 3);
			slideLeft(0, 1, 0);
			slideLeft(1, 0, 0);
			scale(0, 1);
			//content transition
			fadeOut(2, 1);
			fadeIn(0, 1);
		}
	};

	const prevSlide = (index) => {
		if (imagesRef.children[index].classList.contains('active')) {
			setIsActive({ isActive1: false, isActive3: true });
			//Image transition
			slideLeft(2, 0, 3);
			slideLeft(2, 1, 2);
			scale(2, 1);
			slideRight(0, 1);
			slideRight(1, 1);
			//content transtion
			fadeOut(0, 1);
			fadeIn(2, 1);
		} else if (imagesRef.children[1].classList.contains('active')) {
			setIsActive({ isActive2: false, isActive1: true });
			//Image transition
			slideLeft(0, 0);
			slideRight(0, 1, 0);
			slideRight(1, 1, 0);
			slideRight(2, 1, 2);
			scale(0, 1);
			//content transtion
			fadeOut(1, 1);
			fadeIn(0, 1);
		} else if (imagesRef.children[2].classList.contains('active')) {
			setIsActive({ isActive2: true, isActive3: false });
			slideLeft(2, 1);
			slideLeft(1, 0, 2);
			slideLeft(1, 1);
			scale(1, 1);
			//content transtion
			fadeOut(2, 1);
			fadeIn(1, 1);
		}
	};

	return (
		<Layout>
			<Navbar />
			<Main>
				<ProjectSection>
					<ProjectContainer>
						<Arrow className="left">Left</Arrow>
						<MainContainer>
							<ProjectImage>Image</ProjectImage>
							<ProjectDescription>
								<ul>
									<li>
										<div className="content-inner">
											<Title>Tim Deacon Architect</Title>
											<Description>
												A clean and simple SPA for an architect. Includes Instagram feed. Backend support is provided
												via Sanity. Created with JavaScript, React, Gatsby, Sanity and CSS Grid. Utilizes Gatsby Themes
											</Description>
										</div>
									</li>
								</ul>
							</ProjectDescription>
						</MainContainer>
						<Arrow className="right">Right</Arrow>
					</ProjectContainer>
				</ProjectSection>
			</Main>
			<Footer />
		</Layout>
	);
};

// const Projects = () => {
// 	return (
// 		<Layout>
// 			<Navbar />
// 			<Main>
// 				<OuterContainer>
// 					<LeftNav>left</LeftNav>
// 					<Container>
// 						<Polygon>
// 							<h1
// 								sx={{
// 									fontFamily: 'heading',
// 									fontSize: [5],
// 									fontWeight: 'body',
// 									color: 'text',
// 									letterSpacing: 'body',
// 									lineHeight: 'logo',
// 									textShadow: '5px 9px 13px #000',
// 								}}
// 							>
// 								PROJECTS
// 							</h1>
// 						</Polygon>
// 						<ContentContainer>
// 							<Card>
// 								<Images>
// 									<div style={{ border: '1px solid red', width: '80%', height: '80%' }}></div>
// 								</Images>
// 								<Content>
// 									<p
// 										sx={{
// 											fontFamily: 'body',
// 											flexBasis: 'center',
// 										}}
// 									>
// 										A clean and simple SPA for an architect. Includes Instagram feed. Backend support is provided via
// 										Sanity. Created with JavaScript, React, Gatsby, Sanity and CSS Grid. Utilizes Gatsby Themes
// 									</p>
// 								</Content>

// 								<Links>
// 									<Button
// 										sx={{
// 											fontWeight: 'heading',
// 											fontFamily: 'heading',
// 											letterSpacing: 'body',
// 											':hover': {
// 												color: 'darkText',
// 												backgroundColor: 'primary',
// 												fontFamily: 'heading',
// 												fontWeight: 'bold',
// 											},
// 										}}
// 									>
// 										VIEW CODE
// 									</Button>
// 									<Button
// 										sx={{
// 											fontWeight: 'heading',
// 											fontFamily: 'heading',
// 											letterSpacing: 'body',
// 											':hover': {
// 												color: 'darkText',
// 												backgroundColor: 'primary',
// 												fontFamily: 'heading',
// 												fontWeight: 'bold',
// 											},
// 										}}
// 									>
// 										VIEW SITE
// 									</Button>
// 								</Links>
// 							</Card>
// 						</ContentContainer>
// 					</Container>
// 					<RightNav>right</RightNav>
// 				</OuterContainer>
// 			</Main>
// 			<Footer />
// 		</Layout>
// 	);
// };

export default Projects;
