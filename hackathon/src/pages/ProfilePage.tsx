import { Stack, Typography, Card, CardContent, Avatar, Link } from '@mui/joy';

const ProfilePage = () => {
  return (
    <Stack height="100%" direction="row" spacing={3} justifyContent="center" alignItems="center" sx={{ p: 3 }}>
      <Card sx={{ width: '40%', p: 3, boxShadow: 'none' }}>
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <Avatar>BC</Avatar>
            <Typography level="h4" fontWeight="bold">Bea Cruz</Typography>
            <Typography level="body-md">bea@gmail.com</Typography>

            <Typography level="body-sm">Progress: 40</Typography>
            <Typography level="body-md">Level: 3</Typography>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ width: '60%', p: 3, boxShadow: 'none' }}>
        <CardContent>
          <Typography level="h3" fontWeight="bold" mb={2}>Student Portfolio</Typography>
          <Link
            href="/projects/basic-calculator"
            underline="none"
            sx={{
              display: 'block',
              mb: 2,
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Typography level="h4" fontWeight="bold">Basic Calculator</Typography>
            <Typography level="body-md">Simple calculator</Typography>
          </Link>
          <Link
            href="/projects/traffic-light-system"
            underline="none"
            sx={{
              display: 'block',
              mb: 2,
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Typography level="h4" fontWeight="bold">Traffic Light System</Typography>
            <Typography level="body-md">Basic traffic light system with if statements</Typography>
          </Link>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProfilePage;
