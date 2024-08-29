import { Stack, Typography } from '@mui/joy';
import ExerciseCard from '../components/ExerciseCard.tsx';
import SearchBar from '../components/SearchBar';
import ExerciseProgressBar from '../components/ExerciseProgressBar.tsx';

const DashboardPage = () => {
  return (
    <Stack height="100%" justifyContent="space-evenly" alignItems="center">
      <Typography level="h1" sx={{ margin: 4, pt: 10, pb: 1 }}>Intro to CS</Typography>
      <ExerciseProgressBar />
      <SearchBar />
      <Stack direction="row" justifyContent="space-between" gap={3} sx={{ margin: 1 }}>
        <ExerciseCard
          title="1. Hello World!"
          description="Intro to Python"
          showButton={true}
          completed={true}
          link="/"
        />
        <ExerciseCard
          title="2. Primitives"
          description="Basic data types"
          showButton={true}
          completed={true}
          link="/"
        />
        <ExerciseCard
          title="3. Variables"
          description="If-else statements"
          showButton={true}
          completed={true}
          link="/"
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" gap={3} sx={{ margin: 1 }}>
        <ExerciseCard
          title="4. Loops"
          description="While and for loops"
          showButton={true}
          completed={false}
          link="/mq"
        />
        <ExerciseCard
          title="5. Loops pt2"
          description="Nested loops"
          showButton={false}
          completed={false}
          link="/"
        />
        <ExerciseCard
          title="6. Basic Functions"
          description="Defining and calling functions"
          showButton={false}
          completed={false}
          link="/"
        />
      </Stack>
    </Stack>
  );
};

export default DashboardPage;
