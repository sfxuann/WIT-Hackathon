import './App.css'
import { Route, Switch, Link} from 'wouter';
import ProfilePage from './pages/ProfilePage.tsx';
import { Typography, Button, CssBaseline, CssVarsProvider } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Navbar from './components/Navbar.tsx';
import QuizPage from './pages/QuizPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.tsx';
import TrafficLightPage from './pages/TrafficLightPage.tsx';


function App() {

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/projects/trafficlightsystem" component={TrafficLightPage} />
      </Switch>
    </CssVarsProvider>

  )
}

const LandingPage = () => {
  return (
    <>
    <Stack height="100%" width="100%" justifyContent="center" alignItems="center" gap={3}>
      <Typography level="h1">startup</Typography>
      <Link href="/leaderboard">
          <Button variant="soft">leaderboard</Button>
      </Link>
      <Link href="/dashboard">
          <Button variant="soft">dashboard</Button>
      </Link>
    </Stack>
    </>
  )
}

export default App