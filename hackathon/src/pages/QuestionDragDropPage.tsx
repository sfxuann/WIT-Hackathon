import {
	Stack,
	Box,
	Typography,
	List,
	ListItem,
	ListItemButton,  
	ListItemDecorator,
	ListItemContent,
	Button,
} from '@mui/joy';
// import ProgressBar from '../components/ProgressBar';
import React, {useState} from 'react'; 
import ProgressBar from '../components/ProgressBar.tsx';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'wouter';
// import {Home} from '@mui/material'
// 
const QuestionDragDropPage = () => {
    
	
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [result, setResult] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);

	const correctAnswer = '0 1 2';
	const [, navigate] = useLocation();

	const handleAnswerClick = (answer: any) => {
			setSelectedAnswer(answer);
	};

	const handleSubmit = () => {
			if (selectedAnswer === correctAnswer) {
					setResult('Correct! +6pts');
					setIsCorrect(true);
			} else {
					setResult('Wrong. Try again.');
					setIsCorrect(false);
			}
	};

	const handleNextQuestion = () => {
			navigate('/question-drag-drop');
			setSelectedAnswer(null);
			setResult('');
			setIsCorrect(false);
	};

    return (
			<Stack  flexDirection="column" paddingTop="100px" alignItems="center" height="100%" width="100%" >

				{/* <Typography level="h1">this is the drag and drop page</Typography> */}
				<Stack flexDirection="row" justifyContent="center" alignItems="center" gap="20px" width="80%">
					<ProgressBar progress={20}></ProgressBar>
					<Typography level="h4" sx={{ color: 'black'}}>Q 2/10</Typography>
				</Stack>

				<Typography marginY="60px" level="h3">Rearrange the following code to fix the error</Typography>
				<List sx={{width: "40%", gap:"10px", height: "100px"}} >
					
					<ListItem  >
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg" marginLeft="30px">print("hello")</Typography>
						</ListItemButton>
					</ListItem>
					<ListItem  >
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg" marginLeft="30px">print(word)</Typography>
						</ListItemButton>
					</ListItem>
					<ListItem sx={{borderRadius:"10px"}}>
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg">for i in range(4)</Typography>
						</ListItemButton>
					</ListItem>
					<ListItem  >
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg" >word = "cat"</Typography>
						</ListItemButton>
					</ListItem>
					
					<ListItem  >
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg" marginLeft="60px">print("word is cat")</Typography>
						</ListItemButton>
					</ListItem>
					<ListItem  >
						<ListItemButton
							disabled={false}
							selected={false}
							variant="outlined"
							sx={{gap:"40px", width:"100%", borderRadius:"10px"}}
						>
							<ListItemDecorator><DragIndicatorIcon/></ListItemDecorator>
							<Typography level="body-lg" marginLeft="30px">if word == "cat"</Typography>
						</ListItemButton>
					</ListItem>
				</List>
				<Stack direction="row" alignItems="center" justifyContent="flex-end"
                spacing={20}
                sx={{ width: '100%', maxWidth: 625 }}>
                {result && (
                    <Typography level='body-lg' sx={{ color: result === 'Correct! +6pts' ? 'green' : 'red' }}>{result}</Typography>
                )}
                <Button onClick={isCorrect ? handleNextQuestion : handleSubmit}>{isCorrect ? 'Next' : 'Submit'}</Button>
            </Stack>
			</Stack>
    )

}

export default QuestionDragDropPage;