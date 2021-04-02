import styled from 'styled-components/macro'

export const Container = styled.div`
	color: var(--footer-color);
	max-width: 1100px;
	margin: 0 auto;
	padding: 20px 5%;
`

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
`

export const Col = styled.div`
	flex: 0 1 25%;
	min-width: 145px;
	margin: 10px 0;
`

export const Link = styled.a`
	color: inherit;
	display: block;
	margin: 8px 0;
	font-size: 14px;

	:hover {
		text-decoration: underline;
	}
`

export const Title = styled.h4`
	font-size: 18px;
	font-weight: 500;

	@media screen and (min-width: 1200px) {
		font-size: 20px;
	}
`

export const Text = styled.p``

export const Break = styled.div`
	margin-bottom: 20px;
`
