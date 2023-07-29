import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../Hooks/useAuth';


const MyOrder = () => {
    const [orderData, setOrderData] = useState([]);
    const { user, token } = useAuth();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const color = (status) => {
        if (status === 'approved') {
            return 'green';
        } else if (status === 'rejected') {
            return 'red'
        } else {
            return '#48525b'
        }
    }


    useEffect(() => {
        const url = `https://easy-pear-moth-fez.cyclic.app/orders/${user?.email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrderData(data);
            })
    }, [user.email, token]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <Paper sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <TableContainer style={{ height: 600, width: "100%" }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Visitor Name</TableCell>
                            <TableCell align="left">Destination Name</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="left">phone</TableCell>
                            <TableCell align="center">Total Price</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    key={row?._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row?.name}
                                    </TableCell>
                                    <TableCell align="left">{row?.destinationName}</TableCell>
                                    <TableCell align="center">{row?.email}</TableCell>
                                    <TableCell align="left">{row?.phone}</TableCell>
                                    <TableCell align="center">{row?.price}</TableCell>
                                    <TableCell align="center"><span clasName="option" style={{ backgroundColor: `${color(row.status)}`, color: 'white', borderRadius: '5px', padding: '10px 15px' }} >{row?.status}</span></TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={orderData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default MyOrder;