import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-items: flex-end;
  align-items: flex-end;
`
const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  height: 1.5rem;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 14px;
  }
`

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  height: 250px;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  &::placeholder {
    font-size: 14px;
  }
`

const Button = styled.button`
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.callToAction},
    ${props => props.theme.colors.callToActionGradient}
  );
  text-align: center;
  width: 100px;
  border: 0px;
`

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    let formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzFnOcV8qU9IafsHmcqJ0qHxFt2OagbrdhqguOiPxaXkEf0phs/exec"
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(response => console.log("Success!!", response))
      .catch(error => console.log("Error!!", error.message))
  }

  return (
    <Layout>
      <h1>Contact me</h1>
      <p>Do you have a question or would like to work with me?</p>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name </Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <Label htmlFor="message">Message:</Label>
        <TextArea
          type="text"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message"
          required
        />

        <Button type="submit" value="Submit">
          Send
        </Button>
      </Form>
    </Layout>
  )
}

export default Contact
