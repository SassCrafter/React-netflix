import React from 'react'
import { Inner, Background, Frame, Logo, Button } from './styles/header'

function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : {children}
}

export default Header

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return <Logo {...restProps} />
}

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>
}