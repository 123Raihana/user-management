import React from 'react';
import { Box, Typography, Card, TextField, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import UserTable from './UserTable';
const UserList = () => {
    return (
        <Box>
            <Card>
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Users
                    </Typography>
                    <Box>
                        <TextField
                            label="Input Search Text"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <SearchOutlinedIcon />
                                ),
                            }}
                        />
                        <Button variant='contained'> Create User</Button>
                    </Box>
                </Box>
                <UserTable />
            </Card>
        </Box>
    )
}
export default UserList;