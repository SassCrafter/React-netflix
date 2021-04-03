import styled from 'styled-components/macro'

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

export const Title = styled.h1`
	font-size: 35px;
	margin-bottom: 10px;

	@media screen and (min-width: 600px) {
		font-size: 40px;
	}
	@media screen and (min-width: 900px) {
		font-size: 70px;
		margin-bottom: 20px;
	}

`

export const Subtitle = styled.h2`
	font-size: 25px;
	margin-bottom: 20px;
	font-weight: 500;

	@media screen and (min-width: 600px) {
		font-size: 30px;
	}
	@media screen and (min-width: 900px) {
		font-size: 35px;
		margin-bottom: 30px;
	}

`