import styled from 'styled-components'

export const Container = styled.div`
	color: white;
	max-width: 1100px;
	margin: 0 auto;
	padding: 50px 5%;
`

export const Inner = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
`

export const Item = styled.div`
	width: 100%;
	height: auto;
	background-color: #333;
	margin: 10px 0;
`

export const Frame = styled.div``

export const Title = styled.h3`
	text-align: center;
	font-size: 25px;
	margin-bottom: 20px;

	@media screen and (min-width: 900px) {
		font-size: 50px;
		margin-bottom: 40px;
	}
`

export const Header = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 18px;
	cursor: pointer;
	user-select: none;

	@media screen and (min-width: 900px) {
		font-size: 20px;
	}
`

export const Body = styled.div`
	padding: 0 20px 20px;
	font-size: 14px;
	transition: height 250ms ease-in-out;
`

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	filter: invert(1);

	@media screen and (min-width: 900px) {
		width: 25px;
		height: 25px;
	}
`