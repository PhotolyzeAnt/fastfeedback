import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()

  console.log(auth.user)

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
      <pre>{JSON.stringify(auth.user)}</pre>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
  )
}
