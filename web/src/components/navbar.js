/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';


const Nav = styled.nav`
    grid-area: navbar;
    height: 4em;

    display: flex;
    justify-content: space-between;
    align-items: center;
    word-spacing: 0.5em;
`;

const Navbar = () => {

    return (
            <Nav sx={{
                borderBottomColor: 'primary',
                borderBottomWidth: '3px',
                backgroundColor: 'secondary',
                borderBottomStyle: 'solid'
            }}>
            <h1 sx={{
                fontFamily: 'heading',
                fontSize: [4],
                fontWeight: 'body',
                marginLeft: '5em'
            }}>HUNGRY BEAR STUDIO</h1>
            <h3>links</h3>
            </Nav>
    )
}

export default Navbar;