import React, { useState } from "react"
import { gql } from "@apollo/client"
import { Mutation } from "@apollo/client/react/components"
import SeoHelmet from "../components/SeoHelmet/SeoHelmet"
import Layout from "../components/Layout/Layout"
import { Wrapper } from "../components/ContactStyles/Contact.styles"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $message: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        firstName: $firstName
        lastName: $lastName
        emailAddress: $emailAddress
        message: $message
      }
    ) {
      success
      data
    }
  }
`

const Contact = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailAddressValue, setEmailAddressValue] = useState("")
  const [messageValue, setMessageValue] = useState("")

  const formReset = () => {
    window.location.reload()
  }

  return (
    <Layout>
      <SeoHelmet title={`Contact`} description={`Contact page`} />
      <h1>Contact</h1>
      <Mutation mutation={CONTACT_MUTATION}>
        {(createSubmission, { loading, error, data }) => (
          <React.Fragment>
            <form
              id="contactForm"
              onSubmit={async event => {
                event.preventDefault()
                createSubmission({
                  variables: {
                    clientMutationId: "example",
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    emailAddress: emailAddressValue,
                    message: messageValue,
                  },
                })
              }}
            >
              <Wrapper>
                <label htmlFor="firstNameInput">First Name: </label>
                <input
                  id="firstNameInput"
                  required
                  value={firstNameValue}
                  onChange={event => {
                    setFirstNameValue(event.target.value)
                  }}
                />
              </Wrapper>
              <Wrapper>
                <label htmlFor="lastNameInput">Last Name: </label>
                <input
                  id="lastNameInput"
                  required
                  value={lastNameValue}
                  onChange={event => {
                    setLastNameValue(event.target.value)
                  }}
                />
              </Wrapper>
              <Wrapper>
                <label htmlFor="emailAddressInput">Email Address: </label>
                <input
                  id="emailAddressInput"
                  type="email"
                  required
                  value={emailAddressValue}
                  onChange={event => {
                    setEmailAddressValue(event.target.value)
                  }}
                />
              </Wrapper>
              <Wrapper>
                <label htmlFor="messageInput">Message: </label>
                <textarea
                  id="messageInput"
                  required
                  value={messageValue}
                  onChange={event => {
                    setMessageValue(event.target.value)
                  }}
                ></textarea>
              </Wrapper>
              <Wrapper>
                <button type="submit">Send</button>
              </Wrapper>
            </form>

            <Wrapper>
              {loading && <p>Sending...</p>}
              {error && (
                <p>An unknown error has occured, please try again later...</p>
              )}
              {data && (
                <div className="success">
                  <p>Your message has been sent.</p>
                  <Wrapper>
                    <button onClick={() => formReset()}>Clear form</button>
                  </Wrapper>
                </div>
              )}
            </Wrapper>
          </React.Fragment>
        )}
      </Mutation>
    </Layout>
  )
}

export default Contact
