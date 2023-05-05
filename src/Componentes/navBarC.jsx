import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Estilos/navbar.css';

export function NavBarC(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className='linkes'>Inicio</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                            <Link to='/desayuno' className='linkes'>Desayuno</Link>
                            <Link to='/almuerzo' className='linkes'>Almuerzo</Link>
                            <Link to='/cena' className='linkes'>Cena</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
