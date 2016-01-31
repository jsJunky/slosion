import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Home extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	navBarCollapse: true
	    };
	}

	toggleCollapse() {
		this.setState({
			navBarCollapse: !this.state.navBarCollapse
		});
	}

	render() {
		return (
			<section className="home">
				<Navbar inverse>
				    <Navbar.Header>
				        <Navbar.Brand>
				        	<a href="/">ImSplosion</a>
				        </Navbar.Brand>
				        <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				        <Nav pullRight>
				        	<NavItem eventKey={1} href="/">Link Right</NavItem>
				        	<NavItem eventKey={2} href="/">Link Right</NavItem>
				        </Nav>
				    </Navbar.Collapse>
				</Navbar>
			</section>
		);
	}
}

export default Home;
