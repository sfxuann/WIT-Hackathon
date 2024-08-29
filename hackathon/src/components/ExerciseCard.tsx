import { Stack, Card, Button, IconButton, Link } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import LockIcon from '@mui/icons-material/Lock';

interface ExerciseCardProps {
  title: string;
  description: string;
  link: string;
  showButton?: boolean;
  completed?: boolean;
}

function ExerciseCard({ title, description, link, showButton, completed }: ExerciseCardProps) {
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
          <Link
            href={link}
            underline="none"
            sx={{ display: 'block', width: '50%', alignSelf: 'center' }}
          >
            <Button
              variant="solid"
              sx={{ width: '100%' }}
            >
              {completed ? 'Review' : 'Start'}
            </Button>
          </Link>
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
