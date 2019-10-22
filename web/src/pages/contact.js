/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Footer from '../components/footer';

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	& > fieldset {
		display: flex;
		flex-direction: column;
	}

	& > fieldset > label {
		margin: 1em auto;
	}

	& > fieldset > input {
		width: 100%;
		border-radius: 0.4em;
		border: 2px solid #1a1a1a;
	}

	& > fieldset > input:focus {
		border: 3px solid #df7334;
		outline: #df7334;
	}

	& > fieldset > textarea:focus {
		border: 3px solid #df7334;
		outline: #df7334;
	}

	& > fieldset > textarea {
		width: 100%;
		border-radius: 0.4em;
		border: 2px solid #1a1a1a;
	}
`;

const Card = styled.div`
	padding: 1em;

	& > h1 {
		align-text: center;
		padding-bottom: 0.5em;
	}

	width: 300px;
	height: auto;

	/* 48em = 768px DESKTOP */
	@media (min-width: 48em) {
		background: #1a1a1a;
		padding: 1em;
		border-radius: 0.4em;
		border: 1px solid #df7334;

		& > h1 {
			align-text: center;
			padding-bottom: 1em;
		}

		width: 600px;
		height: auto;
	}
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

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 2em;
`;

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
										letterSpacing: 'body',
									}}
									htmlFor="name"
									className="label-name"
								>
									Name
								</label>
								<input
									sx={{
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
										letterSpacing: 'body',
									}}
									htmlFor="email"
									className="email"
								>
									Email
								</label>
								<input
									sx={{
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
										letterSpacing: 'body',
									}}
									htmlFor="email"
									className="email"
								>
									Message
								</label>
								<textarea
									sx={{
										fontFamily: 'heading',
										padding: '1em',
									}}
									rows="10"
									name="message"
									id="message"
									aria-describedby="required-message"
									required
								/>
							</fieldset>

							<ButtonContainer>
								<Button type="submit">SEND</Button>
							</ButtonContainer>
						</Form>
					</Card>
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Contact;
