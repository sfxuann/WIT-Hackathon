import { Stack, Typography, Card, CardContent, Button } from '@mui/joy';
import ProgressBar from '../components/ProgressBar';
import { useState } from 'react';

const MqQuestionPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const correctAnswer = '0 1 2';

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
        // reset states
        setSelectedAnswer(null);
        setResult('');
        setIsCorrect(false);
    };

    return (
        <Stack 
            alignItems="center" 
            justifyContent="center" 
            spacing={3}
            height="100%"
            sx={{ bgcolor: '#white' }}
        >   
            <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" sx={{ width: '80%' }}>
                <ProgressBar progress={20} />
                <Typography level='h4' sx={{ color: 'black'}}>Q 2/10</Typography>
            </Stack>

            <Typography level='h3'>What will be the output of the following?</Typography>
            
            <Card variant='soft' sx={{ width: 450, height: 100, backgroundColor: '#D9D9D9'}}>
                <CardContent >
                <Stack alignItems="center" justifyContent="center">
                    <Typography level='body-lg'>for i in range(3):</Typography>
                    <Typography level='body-lg'>print(i)</Typography>
                </Stack>
                </CardContent>
            </Card>

            <Stack direction="row" spacing={3}>
                <Card variant='soft' sx={{ width: 300, height: 80, cursor: 'pointer', backgroundColor: selectedAnswer === '1 2 3' ? '#a8d2ff' : '#D9D9D9' }} onClick={() => handleAnswerClick('1 2 3')}>
                    <CardContent >
                    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%', display: 'flex' }}>
                        <Typography level='body-md'>1 2 3</Typography>
                    </Stack>
                    </CardContent>
                </Card>

                <Card variant='soft' sx={{ width: 300, height: 80, cursor: 'pointer', backgroundColor: selectedAnswer === '0 1 2 3' ? '#a8d2ff' : '#D9D9D9' }} onClick={() => handleAnswerClick('0 1 2 3')}>
                    <CardContent >
                    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%', display: 'flex' }}>
                        <Typography level='body-md'>0 1 2 3</Typography>
                    </Stack>
                    </CardContent>
                </Card>
            </Stack>

            <Stack direction="row" spacing={3}>
                <Card variant='soft' sx={{ width: 300, height: 80, cursor: 'pointer', backgroundColor: selectedAnswer === '1 2' ? '#a8d2ff' : '#D9D9D9' }} onClick={() => handleAnswerClick('1 2')}>
                    <CardContent >
                    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%', display: 'flex' }}>
                        <Typography level='body-md'>1 2</Typography>
                    </Stack>
                    </CardContent>
                </Card>

                <Card variant='soft' sx={{ width: 300, height: 80, cursor: 'pointer', backgroundColor: selectedAnswer === '0 1 2' ? '#a8d2ff' : '#D9D9D9' }} onClick={() => handleAnswerClick('0 1 2')}>
                    <CardContent >
                    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%', display: 'flex' }}>
                        <Typography level='body-md'>0 1 2</Typography>
                    </Stack>
                    </CardContent>
                </Card>
            </Stack>    

            <Stack direction="row" justifyContent="flex-end" sx={{ width: '49%' }} gap={21}>
                {result && (
                    <Typography level='body-lg' sx={{ color: result === 'Correct! +6pts' ? 'green' : 'red' }}>{result}</Typography>
                )}
                <Button onClick={isCorrect ? handleNextQuestion : handleSubmit}>{isCorrect ? 'Next' : 'Submit'}</Button>
            </Stack>
            
            
        </Stack>
    );
}

export default MqQuestionPage;


