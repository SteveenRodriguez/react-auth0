import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";
import QueryByApollo from './Apollo';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="App">
      <h1>React + Auth0</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
      <QueryByApollo />
    </div>
  );
}

export default App;
