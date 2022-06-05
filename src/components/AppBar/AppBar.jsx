import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/';
import { Container } from './AppBar.styled';

const AppBar = () => {
    return (
        <>
            <Container>
                <Navigation />
            </Container>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppBar;