import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Container, Relative, Center, Background, Frame, Logo, ButtonLink } from './styles/header'

function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : {children}
}

export default Header

Header.Container = function HeaderContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Relative = function HeaderRelative({ children, ...restProps }) {
	return <Relative {...restProps}>{children}</Relative>
}

Header.Center = function HeaderCenter({ children, ...restProps }) {
	return <Center {...restProps}>{children}</Center>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
			<ReactRouterLink to={to}>
				<Logo {...restProps} />
			</ReactRouterLink>
		)
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>
}