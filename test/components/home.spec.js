import Home from '../../assets/js/components/home';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

describe('Home Component', () => {
	let expectedProps,
		componentElement,
		renderedElement,
		component,
		renderedNode,
		sectionNode,
		sandbox;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		expectedProps = {};
		renderedElement = React.createElement(Home, expectedProps);
		component = ReactDOM.render(renderedElement, document.body.querySelector('#test'));
		renderedNode = ReactDOM.findDOMNode(component);
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should have a containing section', () => {
		expect(renderedNode.tagName).to.equal('SECTION');
		expect(renderedNode.className).to.equal('home');
	});
	
	describe('Navbar', () => {
		let navbarElement,
			navbarHeaderElement,
			navbarBrandElement,
			navbarToggleElement;

		beforeEach(() => {
			navbarElement = ReactTestUtils.findRenderedComponentWithType(component, Navbar);
			navbarHeaderElement = ReactTestUtils.findRenderedComponentWithType(component, Navbar.Header);
			navbarBrandElement = ReactTestUtils.findRenderedComponentWithType(component, Navbar.Brand);
			navbarToggleElement = ReactTestUtils.findRenderedComponentWithType(component, Navbar.Toggle);
		});

		it('should have a navbar', () => {
			expect(navbarElement).to.not.equal(undefined);
			expect(navbarElement.props.inverse).to.equal(true);
		});

		it('should have a navbar header', () => {
			expect(navbarHeaderElement).to.not.equal(undefined);
			expect(ReactDOM.findDOMNode(navbarHeaderElement).parentNode.parentNode.className).to.equal(navbarElement.getDOMNode().className);
		});

		it('should have a navbar brand', () => {
			expect(navbarBrandElement).to.not.equal(undefined);
			expect(ReactDOM.findDOMNode(navbarBrandElement).parentNode.className).to.equal(navbarHeaderElement.getDOMNode().className);
		});

		it('should contain a link to the home page with the brand name', () => {
			const brandLinkNode = ReactDOM.findDOMNode(navbarBrandElement);

			expect(brandLinkNode.tagName).to.equal('A');
			expect(brandLinkNode.href).to.equal('/');
			expect(brandLinkNode.textContent).to.equal('ImSplosion');
		});

		it('should have a navbar toggle', () => {
			expect(navbarToggleElement).to.not.equal(undefined);
			expect(ReactDOM.findDOMNode(navbarToggleElement).tagName).to.equal('BUTTON');
			expect(ReactDOM.findDOMNode(navbarToggleElement).parentNode.className).to.equal('navbar-header');
			expect(ReactDOM.findDOMNode(navbarToggleElement).parentNode.childNodes[0].tagName).to.equal('A');
		});

		describe('Navbar Collapse', function () {
			let navbarCollapseElement,
				navbarCollapseNode;
			beforeEach(() => {
				navbarCollapseElement = ReactTestUtils.findRenderedComponentWithType(component, Navbar.Collapse);
				navbarCollapseNode = ReactDOM.findDOMNode(navbarCollapseElement);
			});

			it('should exist', () => {
				expect(navbarCollapseElement).to.not.equal(undefined);
			});

			it('be a child of the navbar', () => {
				expect(ReactDOM.findDOMNode(navbarElement).firstChild.childNodes[1].className).to.equal(navbarCollapseNode.className);
			});
		});
	});
});
