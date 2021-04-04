import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	
`

export const Relative = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 2;
`

export const Center = styled.div`
	width: 100%;
	height: calc(100% - 80px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`

export const Background = styled.div`
	height: 100vh;
	max-height: 1000px;
	background-image: url(${({ src }) => src ? `/images/misc/${src}` : '/images/misc/home-bg.jpg'});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;

	::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0.5) 40%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.8) 100%);
		z-index: 1;
	}

	::after {
		width: 100%;
		height: 70%;
		position: absolute;
		background-image: linear-gradient(to bottom,#000,rgba(0,0,0,0));
	}
`

export const Frame = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 2;
`

export const Logo = styled.img`
	width: 100px;

	@media screen and (min-width: 600px) {
		width: 120px;
	}
	@media screen and (min-width: 900px) {
		width: 150px;
	}
`

export const ButtonLink = styled(Link)`
	display: inline-block;
	padding: 10px 20px;
	color: white;
	background-color: var(--primary-color);
	font-weight: 600;
	font-size: 18px;
	border-radius: 3px;
	transition: filter 200ms linear;

	@media screen and (min-width: 900px) {
		font-size: 20px;
	}

	:hover {
		filter: brightness(1.1);
	}
`

// export const ReactRouterLink = styled.Link``