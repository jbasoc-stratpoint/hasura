import Layout from "../components/layout"

export default function ApiExamplePage() {
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" />
      <h2>JSON Web Token</h2>
      <p>
        /api/examples/jwt
      </p>
      <p>
        You may decode the JSON Web Token (<a href="https://jwt.io/">https://jwt.io/</a>) to check the added payload generated by hasura
      </p>
      <iframe src="/api/examples/jwt" />
    </Layout>
  )
}
