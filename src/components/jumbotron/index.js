import React from 'react'
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron'

function Jumbotron({children, direction='row', ...restProps}) {
	console.log(direction);
	return (
		<Item>
			<Inner direction={direction}>
				{children}
			</Inner>
		</Item>
	)
}

export default Jumbotron

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return (
			<Container>
				{children}
			</Container>
		)
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return (
			<Pane>
				{children}
			</Pane>
		)
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return (
			<Title>
				{children}
			</Title>
		)
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return (
			<SubTitle>
				{children}
			</SubTitle>
		)
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
	return (
			<Image {...restProps} />
		)
}