import React, { useState } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { PaperPlane } from "../components/svg/PaperPlane"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-items: center;
  align-items: center;
  margin: 20px;
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
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
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
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
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
  height: 100px;
  padding: 10px 14px 10px 14px;
  border: none;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Layout>
      <h1>Contact me</h1>
      <p>I'd love to chat!</p>

      <Form action={process.env.GETFORMS_ENDPOINT} method="POST">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <Label htmlFor="email">Email</Label>
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
          <PaperPlane />
        </Button>
      </Form>
    </Layout>
  )
}

export default Contact
