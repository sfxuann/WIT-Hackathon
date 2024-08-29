import './App.css'
import { Route, Switch } from 'wouter';
import ProfilePage from './pages/ProfilePage.tsx';
import { Button, CssBaseline, CssVarsProvider } from '@mui/joy';

function App() {

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </CssVarsProvider>

  )
}

const LandingPage = () => {
  return (
    <>
      <Button variant="solid">Hello world</Button>
      <div>
        <h1>start page</h1>
      </div>
    </>
  )
}

export default App