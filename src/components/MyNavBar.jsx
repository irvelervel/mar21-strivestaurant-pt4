// .jsx is the standard filename extension for React Components
// always name your components starting with a capital letter (PascalCase)

// a functional component is just an arrow function returning JSX

import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const MyNavBar = (props) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/">
            <Navbar.Brand>{props.title} - Strive For Food</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link>Menu</Nav.Link>
                <Link to="/reservations">
                    <div className={`nav-link${props.location.pathname === '/reservations' ? ' active' : ''}`}>Reservations</div>
                </Link>
                <Nav.Link>Contact us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default withRouter(MyNavBar)
// exporting your component with withRouter will enrich it with history, location and match
// without the need of wrapping it in a <Route /> component