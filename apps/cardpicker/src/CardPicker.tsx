import * as React from 'react';
import { Box, Paper, Text, Button, Title } from '@mantine/core';
import { shuffle } from 'lodash';
import { useAppShell } from 'ui';

const OPTIONS = [10, 5, 2, -1, -2];

export const CardPicker = () => {
  const [cards, setCards] = React.useState<number[]>(shuffle(OPTIONS));
  const [played, setPlayed] = React.useState<number | null>(null);
  const handlePlay = (card: number, index: number) => {
    if (played !== null) {
      return;
    }
    addToScore(card);
    setPlayed(index);
  };
  const handlePlayAgain = () => {
    setCards(shuffle(OPTIONS));
    setPlayed(null);
  };

  const { addToScore, user } = useAppShell();
  if (!user) {
    return null;
  }

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title sx={{ color: 'black' }}>Card Picker</Title>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '1rem',
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            onClick={() => handlePlay(card, index)}
            p={5}
            sx={{
              borderRadius: 15,
              height: 200,
              border: '5px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background:
                played !== null
                  ? index === played
                    ? '#ccc'
                    : 'white'
                  : 'black',
            }}
          >
            {played !== null && <Text sx={{ fontSize: '40pt' }}>{card}</Text>}
          </Box>
        ))}
      </Box>
      {played !== null && (
        <Button mt="md" size="lg" fullWidth onClick={handlePlayAgain}>
          Play Again
        </Button>
      )}
    </Paper>
  );
};
