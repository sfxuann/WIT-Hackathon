import { Box, LinearProgress } from "@mui/joy";
interface ProgressBarProps {
    progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Box sx={{ bgcolor: 'white', width: '70%' }}>
      <LinearProgress
        determinate
        variant="outlined"
        size="sm"
        thickness={32}
        value={progress}
        sx={{
          '--LinearProgress-radius': '0px',
          '--LinearProgress-progressThickness': '24px',
          borderColor: 'black',
          color: "#70FF93"
        }}
      >
      </LinearProgress>
    </Box>
  );
}

export default ProgressBar