import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../components/redux/reducer/authReducer'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from './redux/Store'; // adjust path as needed


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { token, loading, error } = useSelector((state: { auth: { token: null; loading: boolean; error: string | { error: string } } }) => state.auth);
    const handleLogin = () => {
        const loginData = { email: email, password: password }; // Fixed 'username' to 'email'
        dispatch(loginUser(loginData)).then((action) => {
            if (action.type === 'auth/loginUser/fulfilled') {
                // Store token in localStorage if rememberMe is checked
                if (rememberMe) {
                    localStorage.setItem('authToken', action.payload);
                }
                // Redirect to user list page
                navigate('/userlist');
            }
        });
    };
    console.log(error);
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
                    borderRadius: 2,
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
                    InputProps={{
                        startAdornment: (
                            <AccountCircleOutlinedIcon />
                        ),
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <LockOutlinedIcon />
                        ),
                    }}
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
                    sx={{ textTransform: 'none' }}
                >
                    Log in
                </Button>
                {loading && <p>Loading...</p>}
                {error && (
                    <Typography sx={{ marginTop: 2, color: 'red' }}>
                        Error: {typeof error === 'string' ? error : error?.error}
                    </Typography>
                )}
            </Paper>
        </Box>
    );
};

export default Login;