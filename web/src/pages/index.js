import React from 'react';
// import { styled } from '@emotion/styled';
import Layout from './../components/layout';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Footer from '../components/footer';


const Index = () => {

    return (
        <Layout>
            <Navbar/>
            <Main>
            <h1>some content</h1>
            </Main>
            <Footer/>
        </Layout>
    )
}

export default Index;