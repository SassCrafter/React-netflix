import React from 'react'
import { Container, Row, Col, Link, Title } from './styles/footer'

function Footer({ children, ...restProps}) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Footer

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row { ...restProps } >{ children }</Row>
}

Footer.Col = function FooterCol({ children, ...restProps }) {
	return <Col { ...restProps } >{ children }</Col>
}

Footer.Link = function Link({ children, ...restProps }) {
	return <Link { ...restProps } >{ children }</Link>
}

Footer.Title = function Title({ children, ...restProps }) {
	return <Title { ...restProps } >{ children }</Title>
}