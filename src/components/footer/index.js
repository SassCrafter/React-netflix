import React from 'react'
import { Container, Row, Col, Link, Title, Text, Break } from './styles/footer'

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

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link { ...restProps } >{ children }</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title { ...restProps } >{ children }</Title>
}
Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text { ...restProps } >{ children }</Text>
}
Footer.Break = function FooterBreak() {
	return <Break />
}