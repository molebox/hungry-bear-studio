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
	align-items: center;

	height: 100%;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;

	& > fieldset {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	& > fieldset > label {
		margin: 1em auto;
	}

	& > fieldset > input {
		width: 100%;
		// height: 100%;
		padding-top: 20px;
		border-radius: 0.4em;
		border: 2px solid #df7334;
	}

	// & > fieldset > input:invalid {
	// 	border: 3px solid red;
	// }

	// & > fieldset > input:valid {
	// 	border: 2px solid #df7334;
	// }

	& > fieldset > textarea {
		width: 100%;
		height: 100%;
		padding-top: 20px;
		border-radius: 0.4em;
		border: 2px solid #df7334;
		resize: none;
	}
`;

const Card = styled.div`
	background: #1a1a1a;
	margin-bottom: 2rem;
	padding: 2rem;
	border-radius: 0.4em;
	border: 1px solid #df7334;

	& > h1 {
		align-text: center;
		padding-bottom: 1em;
	}

	width: 700px;
	// height: 500px;
`;

// https://www.youtube.com/watch?v=IxRJ8vplzAo&t=31s

const Contact = () => {
	return (
		<Layout>
			<Navbar />
			<Main>
				<Container>
					<Card>
						<h1
							sx={{
								color: 'text',
								fontFamily: 'heading',
								fontWeight: 'heading',
								fontSize: [4],
								lineHeight: 'body',
								letterSpacing: 'body',
							}}
						>
							Lets Talk..
						</h1>
						<Form name="contact" method="POST" data-netlify="true">
							<fieldset
								sx={{
									border: 'none',
								}}
							>
								<label
									sx={{
										color: 'text',
										fontFamily: 'heading',
										fontWeight: 'heading',
										fontSize: [2],
										lineHeight: 'body',
										letterSpacing: 'body',
									}}
									htmlFor="name"
									className="label-name"
								>
									Name
								</label>
								<input
									sx={{
										fontSize: [2],
										fontFamily: 'heading',
										padding: '1em',
									}}
									autofocus
									type="text"
									name="name"
									id="name"
									aria-describedby="required-message"
									required
								/>
							</fieldset>
							<fieldset
								sx={{
									border: 'none',
								}}
							>
								<label
									sx={{
										color: 'text',
										fontFamily: 'heading',
										fontWeight: 'heading',
										fontSize: [2],
										lineHeight: 'body',
										letterSpacing: 'body',
									}}
									htmlFor="email"
									className="email"
								>
									Email
								</label>
								<input
									sx={{
										fontSize: [2],
										fontFamily: 'heading',
										padding: '1em',
									}}
									type="email"
									name="email"
									id="email"
									aria-describedby="required-message"
									required
								/>
							</fieldset>
							<fieldset
								sx={{
									border: 'none',
								}}
							>
								<label
									sx={{
										color: 'text',
										fontFamily: 'heading',
										fontWeight: 'heading',
										fontSize: [2],
										lineHeight: 'body',
										letterSpacing: 'body',
									}}
									htmlFor="email"
									className="email"
								>
									Message
								</label>
								<textarea
									sx={{
										fontSize: [2],
										fontFamily: 'heading',
										padding: '1em',
										lineHeight: '1.5',
									}}
									rows="10"
									name="message"
									id="message"
									aria-describedby="required-message"
									required
								/>
							</fieldset>
							{/* 
                        <label>Your Email: <input type="email" name="email" /></label>
                    
                  
                        <label>Message: <textarea name="message"></textarea></label>
                     */}

							{/* <button type="submit">Send</button> */}
						</Form>
					</Card>
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Contact;
