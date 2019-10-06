import React from 'react';
// import styled from '@emotion/styled';
import Layout from './../components/layout';
import Navbar from './../components/navbar';
import Main from './../components/main';
import Footer from './../components/footer';

// const Container = styled.div`

// `;

const Projects = () => {
	return (
		<Layout>
			<Navbar />
			<Main>
				<h1>some projects</h1>
			</Main>
			<Footer />
		</Layout>
	);
};

export default Projects;
