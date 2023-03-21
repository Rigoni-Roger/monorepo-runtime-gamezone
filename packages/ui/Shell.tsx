import * as React from 'react';
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from '@mantine/core';

import { useAppShell } from './index';

export const Shell: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  const handleSetUser = () => {
    setUser('Jack');
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p="xs"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: theme.colors.blue[8],
          }}
        >
          <Title style={{ color: 'white' }}>{title}</Title>
          <Box sx={{ flexGrow: 1 }}></Box>
          {user && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Title mr="md" style={{ color: 'white' }}>
                {user} | {score}
              </Title>
              <Button onClick={handleLogout}>Logout</Button>
            </Box>
          )}
          {!user && (
            <Button variant="light" onClick={handleSetUser}>
              Login
            </Button>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
