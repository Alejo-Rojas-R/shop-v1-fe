import React from 'react'
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { NavDropdown, Navbar, Container, Nav, Stack, Col } from 'react-bootstrap';
import { CategoriesList } from './CategoriesList';
import { CartButton } from './CartButton';

export const Header = () => {

    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light d-flex justify-content-between position-sticky p-0'>
            <Col xs={3}>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink className='navbar-brand m-0' to='/'>
                                <img alt='' src='/assets/shopping-basket-blue-clipart-md.png' width='30' height='30' className='d-inline-block align-top me-2' />
                                MyShop
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse >
                            <Nav>
                                <NavDropdown title="Categories">
                                    <Container>
                                        <Stack direction='vertical' className='d-flex flex-wrap' gap={2}>
                                            <CategoriesList />
                                        </Stack>
                                    </Container>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>

            <Col xs={6}>
                <SearchInput />
            </Col>

            <Col xs={2}>
          
            </Col>

            <Col xs={1}>
                <CartButton />
            </Col>
        </nav>
    )
}
