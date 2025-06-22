import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log({ email, password, rememberMe });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: 300,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Log in
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Remember me"
                    sx={{ marginBottom: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    Log in
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;