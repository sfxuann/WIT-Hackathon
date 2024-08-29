import { Stack, Typography } from '@mui/joy';
import ExcerciseCard from '../components/ExcerciseCard';
import SearchBar from '../components/SearchBar';
import ExcerciseProgressBar from '../components/ExcerciseProgressBar';

const HomePage = () => {
  return (
    <Stack height="100%" justifyContent="space-evenly" alignItems="center">
        <Typography level="h1" sx={{ margin: 4, pt: 10, pb: 1}}>Intro to CS</Typography>
        <ExcerciseProgressBar></ExcerciseProgressBar>
        <SearchBar></SearchBar>
        <Stack direction="row" justifyContent="space-between" gap={3} sx={{margin: 1}}>
            <ExcerciseCard title="1. Hello World!" description='intro to python' showButton={true} completed={true}></ExcerciseCard>
            <ExcerciseCard title="2. Primatives" description='basic data types' showButton={true} completed={true}></ExcerciseCard>
            <ExcerciseCard title="3. Variables" description='if-else statements' showButton={true} completed={true}></ExcerciseCard>
        </Stack>
        <Stack direction="row" justifyContent="space-between" gap={3} sx={{margin: 1}}>
            <ExcerciseCard title="4. Loops" description='while and for loops' showButton={true} completed={false}></ExcerciseCard>
            <ExcerciseCard title="5. Loops pt2" description='nested loops' showButton={false} completed={false}></ExcerciseCard>
            <ExcerciseCard title="6. Basic Functions" description='defining and calling functions' showButton={false} completed={false}></ExcerciseCard>
        </Stack>
    </Stack>
  );
};

export default HomePage;