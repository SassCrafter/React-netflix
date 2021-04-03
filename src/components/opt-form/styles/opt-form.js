import styled from 'styled-components/macro'

export const Container = styled.div`
	width: 100%;
	max-width: 850px;
	color: white;
	margin: 0 auto;
`

export const Form = styled.form`
	width: 90%;
	max-width: 320px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media screen and (min-width: 600px) {
		max-width: 750px;
	}
`

export const Group = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 600px) {
		flex-direction: row;
	}
`

export const Input = styled.input`
	height: 40px;
	width: 100%;
	margin-bottom: 10px;
	border: none;
	outline: none;
	padding: 10px;
	font-size: 14px;
	@media screen and (min-width: 600px) {
		width: 60%;
		height: 50px;
		margin-bottom: 0;
		font-size: 20px;
	}
	@media screen and (min-width: 900px) {
		height: 70px;
	}
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	padding: 0 10px;
	border: none;
	background-color: var(--primary-color);
	color: white;
	cursor: pointer;
	transition: filter 250ms linear;

	:hover {
		filter: brightness(1.2);
	}

	@media screen and (min-width: 600px) {
		width: 40%;
		height: 50px;
		margin-left: 2px;
	}
	@media screen and (min-width: 900px) {
		height: 70px;
		font-size: 20px;
	}
`

export const Title = styled.h3`
	width: 80%;
	margin: 0 auto 20px;
	text-align: center;
	font-size: 20px;

	@media screen and (min-width: 600px) {
		font-size: 24px;
	}
`

export const Subtitle = styled.h4`
	width: 80%;
	margin: 0 auto 20px;
	text-align: center;
	font-size: 18px;

	@media screen and (min-width: 600px) {
		font-size: 22px;
	}
`


export const Icon = styled.img`
	filter: invert(1);
	width: 20px;
	display: inline-block;
	margin-left: 5px;
`