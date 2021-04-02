import React from 'react'
import { Container, Title, Form, Input, Button, Icon, Group } from './styles/opt-form'

function OptForm({ children, ...restProps }) {
	return (
		<Container {...restProps}>{children}</Container>
	)
}

export default OptForm

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

OptForm.Form = function OptFormFunc({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>
}

OptForm.Group = function OptFormGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

OptForm.Icon = function OptFormIcon({ ...restProps }) {
	return <Icon {...restProps} />
}

OptForm.Input = function OptFormInput({ ...restProps }) {
	return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>
}