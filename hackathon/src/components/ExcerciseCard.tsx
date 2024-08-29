import { Stack, Card, Button, IconButton } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import LockIcon from '@mui/icons-material/Lock'; // Import the lock icon

interface ExerciseCardProps {
  title: string;
  description: string;
  showButton?: boolean;
  completed?: boolean;
}

function ExerciseCard({ title, description, showButton, completed }: ExerciseCardProps) {
  return (
    <Card
      sx={{
        width: 320,
        cursor: 'pointer',
        boxShadow: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transform: 'scale(1.05)',
        },
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3',
        p: 3.5
      }}
    >
      <Stack spacing={2} sx={{ width: '100%', textAlign: 'center' }}>
        <Stack>
          <Typography level="h3" fontWeight="bold">
            {title}
          </Typography>
          <Typography level="body-md">{description}</Typography>
        </Stack>
        {showButton ? (
          <Button
            variant="solid"
            sx={{ width: '50%', alignSelf: 'center' }}
          >
            {completed ? 'Review' : 'Start'}
          </Button>
        ) : (
          <IconButton>
            <LockIcon />
          </IconButton>
        )}
      </Stack>
    </Card>
  );
}

export default ExerciseCard;
