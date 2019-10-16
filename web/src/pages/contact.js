/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from './../components/layout';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Footer from '../components/footer';
import SEO from 'gatsby-theme-seo/src/components/seo';

const Container = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	height: 60vh;
`;

const Form = styled.form`
	width: 50%;
	position: relative;
	height: 50%;

	& > fieldset > input {
		width: 100%;
		height: 100%;
		padding-top: 20px;
		border: none;
	}

	& > fieldset > label {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border-bottom: 1px solid black;
		pointer-events: none;
	}

	& > fieldset > label::after {
		content: '';
		position: absolute;
		left: 0px;
		bottom: -1px;
		height: 100%;
		width: 100%;
		border-bottom: 3px solid #df7334;
		transition: all 0.3s ease;
	}

	& > fieldset > input:focus + .label-name .content-name {
		transform: translateY(-150%);
		font-size: 14px;
		color: #df7334;
	}
`;

const Card = styled.div`
	background: #1a1a1a;
	margin-bottom: 2rem;
	padding: 2rem;
	border-radius: 0.4em;
	border: 1px solid #df7334;

	// width: 500px;
	// height: 500px;
`;

// https://www.youtube.com/watch?v=IxRJ8vplzAo&t=31s

const Contact = () => {
	return (
		<Layout>
			<Navbar />
			<Main>
				<Container>
					<Form name="contact" method="POST" data-netlify="true">
						<fieldset
							sx={{
								border: 'none',
							}}
						>
							<label htmlFor="name" className="label-name">
								<span className="content-name">Name</span>
							</label>
							<input type="text" name="name" id="name" />
						</fieldset>
						{/* 
                        <label>Your Email: <input type="email" name="email" /></label>
                    
                  
                        <label>Message: <textarea name="message"></textarea></label>
                     */}

						{/* <button type="submit">Send</button> */}
					</Form>
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Contact;
