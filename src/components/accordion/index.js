import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Item, Frame, Header, Title, Body, Icon } from './styles/accordion'

const toggleContext = createContext();

function Accordion({children, ...restProps}) {
	return (
		<Container>
			<Inner>{children}</Inner>
		</Container>
	)
}

export default Accordion


Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);

	return (
			<toggleContext.Provider value={{toggleShow, setToggleShow}}>
				<Item {...restProps}>{children}</Item>
			</toggleContext.Provider>
		)
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(toggleContext);

	const setToggle = () => {
		setToggleShow((prevState) => !prevState);
	}
	return (
			<Header onClick={setToggle} {...restProps}>
				{children}
				{toggleShow ? 
					<Icon src='/images/icons/close-slim.png' alt='close' />
					: <Icon src='/images/icons/add.png' alt='open' />	
				}
			</Header>
		)
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(toggleContext);
	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}
