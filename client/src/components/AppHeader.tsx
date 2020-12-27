import LogoutButton from './LogoutButton'

interface HeaderProps {
  loggedIn: boolean;
}

function AppHeader ({ loggedIn }: HeaderProps): JSX.Element {
    return (
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {loggedIn && <LogoutButton />}
      </header>
    )
}

export default AppHeader