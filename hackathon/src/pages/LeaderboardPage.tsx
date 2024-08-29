import { Stack, Typography, Card, CardContent, Box } from '@mui/joy';

const LeaderboardPage = () => {
  return (
    <Stack height="100%" justifyContent="center" alignItems="center">
      <Card sx={{ width: '80%', maxWidth: 600, p: 3, boxShadow: 'none' }}>
        <CardContent>
          <Typography level="h2" sx={{ textAlign: 'center', color: '#66B0FF' }}>
            Leaderboard
          </Typography>
          <Typography level="body-sm" sx={{ textAlign: 'center' }}>
            Class | School | State
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography level="body-md">1. Alice</Typography>
            <Typography level="body-md">1200 pts</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography level="body-md">2. Bob</Typography>
            <Typography level="body-md">1150 pts</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography level="body-md">3. Charlie</Typography>
            <Typography level="body-md">1100 pts</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography level="body-md">4. David</Typography>
            <Typography level="body-md">1050 pts</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Typography level="body-md">5. Eve</Typography>
            <Typography level="body-md">1000 pts</Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default LeaderboardPage;
