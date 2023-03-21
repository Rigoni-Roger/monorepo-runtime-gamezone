import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell, Header, Title, Box, Button, useMantineTheme, } from '@mantine/core';
import { useAppShell } from './index';
export const Shell = ({ title, children }) => {
    const { user, score, setUser } = useAppShell();
    const theme = useMantineTheme();
    const handleSetUser = () => {
        setUser('Jack');
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (_jsx(AppShell, Object.assign({ padding: "md", styles: {
            main: {
                background: theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
            },
        }, header: _jsxs(Header, Object.assign({ height: 60, p: "xs", style: {
                display: 'flex',
                alignItems: 'center',
                background: theme.colors.blue[8],
            } }, { children: [_jsx(Title, Object.assign({ style: { color: 'white' } }, { children: title })), _jsx(Box, { sx: { flexGrow: 1 } }), user && (_jsxs(Box, Object.assign({ sx: { display: 'flex', alignItems: 'center' } }, { children: [_jsxs(Title, Object.assign({ mr: "md", style: { color: 'white' } }, { children: [user, " | ", score] })), _jsx(Button, Object.assign({ onClick: handleLogout }, { children: "Logout" }))] }))), !user && (_jsx(Button, Object.assign({ variant: "light", onClick: handleSetUser }, { children: "Login" })))] })) }, { children: children })));
};
