import './App.css'
import { Route, Switch, Link} from 'wouter';
import ProfilePage from './pages/ProfilePage.tsx';
import { Button, CssBaseline, CssVarsProvider } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Navbar from './components/Navbar.tsx';
import QuizPage from './pages/QuizPage.tsx';
import MqQuestionPage from './pages/MqPage.tsx';


function App() {

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/mq" component={MqQuestionPage} />
      </Switch>
    </CssVarsProvider>

  )
}

const LandingPage = () => {
  return (
    <>
    <Stack height="100%" width="100%" justifyContent="center" alignItems="center">
      <Link href="/quiz">
          <Button variant="solid">quiz</Button>
      </Link>
      <div>
        <h1>start page</h1>
      </div>
    </Stack>
    </>
  )
}

export default App