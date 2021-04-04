import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
	width: 90%;
	max-width: 400px;
	background-color: rgba(0,0,0, 0.8);
	border-radius: 5px;
	padding: 20px;
	text-align: left;
	color: var(--gray-color);

	@media screen and (min-width: 600px) {
		padding: 30px 40px;
	}
`

export const Title = styled.h2`
	font-size: 30px;
	letter-spacing: 2px;
	line-height: 1;
	margin-bottom: 20px;
	color: white;
`

export const FormEl = styled.form`
	width: 100%;
	height: 100%;
`

export const Input = styled.input`
	outline: none;
	display: block;
	width: 100%;
	height: 40px;
	padding: 0 10px;
	border: none;
	border-radius: 3px;
	background-color: #333333;
	color: white;
	margin-bottom: 20px;
	transition: background-color 200ms linear;

	:hover,
	:focus {
		background-color: #555;
	}
`

export const Submit = styled.button`
	cursor: pointer;
	outline: none;
	display: block;
	width: 100%;
	height: 40px;
	text-align: center;
	border: none;
	border-radius: 3px;
	background-color: var(--primary-color);
	color: white;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 20px;

	:disabled {
		filter: brightness(0.4);
		cursor: not-allowed;
	}
`

export const Error = styled.h5`
	border-radius: 3px;
	padding: 10px;
	margin-bottom: 20px;
	background-color: var(--error-color);
	color: white;
`

export const Text = styled.p`
	margin-bottom: 15px;
`

export const TextSmall = styled.p`
	font-size: 12px;
`
export const Link = styled(ReactRouterLink)`
	color: white;

	:hover {
		text-decoration: underline;
	}
`