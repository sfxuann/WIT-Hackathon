import './App.css'
import { Route, Switch, Link} from 'wouter';
import ProfilePage from './pages/ProfilePage.tsx';
import { Typography, Button, CssBaseline, CssVarsProvider } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Navbar from './components/Navbar.tsx';
import QuizPage from './pages/QuizPage.tsx';
import MqQuestionPage from './pages/MqPage.tsx';
import NextQPage from './pages/NextQ.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import LeaderboardPage from './pages/LeaderboardPage.tsx';
import QuestionDragDropPage from './pages/QuestionDragDropPage.tsx';


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
        <Route path="/nextq" component={NextQPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        
        <Route path="/question-drag-drop" component={QuestionDragDropPage} />
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