import Input from '@mui/joy/Input';
import { Box } from '@mui/joy';

export default function SearchBar() {
  return (
    <Box width="30%" sx={{alignItems: 'center', margin:3}}>
      <Input
        placeholder="Search excersises"
        color="primary"
        variant="soft"
        sx={{fontSize: 'body-lg', borderRadius: '20px',}}/>
    </Box>
  );
}