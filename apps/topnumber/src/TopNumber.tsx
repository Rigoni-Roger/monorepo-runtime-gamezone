import React from 'react';
import { Paper, Button, Title } from '@mantine/core';

import { useAppShell } from 'ui';

const pickNumber = () => Math.ceil(Math.random() * 10) + 2;

export const TopNumber = () => {
  const [topNumber, setTopNumber] = React.useState<number>(0);
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [currentValue, setCurrentValue] = React.useState<number>(0);

  const { addToScore, user } = useAppShell();
  const handlePlaying = () => {
    setPlaying(true);
    setTopNumber(pickNumber());
  };
  const handleStopPlaying = () => {
    addToScore(currentValue);
    setCurrentValue(0);
    setPlaying(false);
  };

  React.useEffect(() => {
    if (playing) {
      const timer = setTimeout(() => {
        if (currentValue < topNumber) {
          setCurrentValue((prevState) => prevState + 1);
        } else {
          addToScore(-1);
          setCurrentValue(0);
          setPlaying(false);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [addToScore, currentValue, playing, topNumber]);

  if (!user) {
    return null;
  }
  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title>Top Number!!</Title>
      {playing && (
        <Button
          mt="md"
          variant="outline"
          color="violet"
          size="xl"
          fullWidth
          onClick={handleStopPlaying}
        >
          {currentValue} - Snag It!
        </Button>
      )}
      {!playing && (
        <Button mt="md" size="xl" fullWidth onClick={handlePlaying}>
          Play
        </Button>
      )}
    </Paper>
  );
};
