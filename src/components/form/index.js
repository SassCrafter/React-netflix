import React from 'react'
import { Container, Title, FormEl, Input, Submit, Error, Text, TextSmall, Link } from './styles/form'

function Form({ children, ...restProps}) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Form

Form.Title = function FormTitle ({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}


Form.FormEl = function FormFormEl ({ children, ...restProps }) {
	return <FormEl {...restProps}>{children}</FormEl>
}

Form.Input = function FormInput ({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit ({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>
}

Form.Text = function FormText ({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall ({ children, ...restProps }) {
	return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink ({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>
}

Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>
}