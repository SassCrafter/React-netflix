import styled from 'styled-components/macro'




export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`

export const Container = styled.div`
	@media (max-width: 900px) {
		${Item}:last-of-type h4 {
			margin-bottom: 50px;
		}
	}
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media screen and (min-width: 900px) {
  	flex-direction: ${({ direction }) => direction};
  }
`

export const Pane = styled.div`
	width: 100%;
	text-align: center;

	@media screen and (min-width: 900px) {
		width: 50%;
		text-align: left;
	}
`

export const Title = styled.h2`
	font-size: 35px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media screen and (min-width: 600px) {
		font-size: 50px;
	}
`

export const SubTitle = styled.h4`
	font-size: 18px;
	font-weight: normal;
	line-height: normal;

	@media screen and (min-width: 600px) {
		font-size: 26px;
	}
`

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`
