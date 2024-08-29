import { Stack, Box, Typography } from '@mui/material';

function ExerciseProgressBar() {

  return (
    <Stack alignContent='center' style={{ width: '80%', margin:3}}>
      <Box
        style={{
          height: '15px',
          width: '100%',
          backgroundColor: '#E0E0E0',
          borderRadius: '5px',
        }}
      >
        <Box
          style={{
            height: '90%',
            width: '41%',
            backgroundColor: '#3F51B5',
            borderRadius: '5px',
          }}
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
        }}
      >
        <Typography variant="caption">Exercise 1</Typography>
        <Typography variant="caption">Exercise 2</Typography>
        <Typography variant="caption">Exercise 3</Typography>
        <Typography variant="caption">Exercise 4</Typography>
        <Typography variant="caption">Exercise 5</Typography>
        <Typography variant="caption">Exercise 6</Typography>
      </Box>
    </Stack>
  );
}

export default ExerciseProgressBar;
