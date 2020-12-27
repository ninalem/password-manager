function LogoutButton (): JSX.Element {
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default LogoutButton

function logout () {
  // Remove token from LS
  // Redirect to Login route
}