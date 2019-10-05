/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Container = styled.main`
    grid-area: main;
    flex: 1;
    background-color: #212121;
`;

const Main = ({children}) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Main;