import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers } from '../redux/reducer/userReducer'; // Adjust the path as needed
import { RootState } from '../redux/Store'; // Adjust the path as needed
import type { AppDispatch } from '../redux/Store'; // adjust path as needed
import { GridColDef } from '@mui/x-data-grid';
const UserTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);



    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'first_name', headerName: 'First Name', width: 250 },
        { field: 'last_name', headerName: 'Last Name', width: 200 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 150,
            renderCell: (params) => (
                <img
                    src={params.value as string}
                    alt="Avatar"
                    style={{ width: '50px', height: 'auto', borderRadius: '50%' }}
                />
            ),
        },
        {
            field: "actions",
            headerName: 'Actions',
            width: 150,
        }
    ];
    const values = users?.data || [];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={values}
                columns={columns}
                paginationModel={{ pageSize: 5, page: 0 }}
                loading={loading}
                disableRowSelectionOnClick
            />
        </div>
    );
};

export default UserTable;