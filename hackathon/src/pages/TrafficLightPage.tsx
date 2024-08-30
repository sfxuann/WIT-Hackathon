import { Stack, Typography, Box } from '@mui/joy';

const TrafficLightCode = () => {
  const code = `
  # Set initial state and time
    light_color = "Red"
    time_passed = 0

    # Simulate traffic light changes
    while True:
        if light_color == "Red" and time_passed >= 0:
            print("The light is Red.")
            time_passed += 1
            if time_passed >= 5:  # Change after 5 seconds
                light_color = "Green"
                time_passed = 0

        elif light_color == "Green" and time_passed >= 0:
            print("The light is Green.")
            time_passed += 1
            if time_passed >= 3:  # Change after 3 seconds
                light_color = "Yellow"
                time_passed = 0

        elif light_color == "Yellow" and time_passed >= 0:
            print("The light is Yellow.")
            time_passed += 1
            if time_passed >= 2:  # Change after 2 seconds
                light_color = "Red"
                time_passed = 0
  `;

  return (
    <Stack
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: 8 }}
    >
      <Box
        sx={{
          width: '80%',
          maxWidth: 800,
          border: '1px solid #ddd',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#D7D7D7',
            color: '#000',
            padding: 1,
            borderBottom: '1px solid #ddd',
          }}
        >
          <Typography level="body-sm" sx={{ fontWeight: 'bold' }}>
            Python
          </Typography>
        </Box>

        <Box
          component="pre"
          sx={{
            backgroundColor: '#2d2d2d',
            color: '#f8f8f2',
            padding: 2,
            margin: 0,
            fontFamily: 'monospace',
            overflowX: 'auto',
            maxHeight: 'calc(100vh - 160px)',
          }}
        >
          {code}
        </Box>
      </Box>
    </Stack>
  );
};

export default TrafficLightCode;
