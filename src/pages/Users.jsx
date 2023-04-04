import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../assets/css/App.css';

const Users = () => {
	let theme;
	const curremtTheme = useSelector((state) => state.ThemeReducer.mode);

	if (curremtTheme === 'theme-mode-dark') {
		theme = createTheme({
			palette: {
				mode: 'dark',
			},
		});
	} else {
		theme = createTheme({
			palette: {
				mode: 'light',
			},
		});
	}

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const userData = useSelector((state) => state.userData);
	const users = useSelector((state) => state.userData.users);
	const error = useSelector((state) => state.userData.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const deleteData = (id) => {
		console.log('User btn clicked...', id);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return userData.loading ? (
		<>
			<h1>Loading...</h1>
		</>
	) : userData.error ? (
		<>
			<h1>{error}</h1>
		</>
	) : (
		<>
			<ThemeProvider theme={theme}>
				<Paper sx={{ width: '100%', overflow: 'hidden' }}>
					<TableContainer sx={{ maxHeight: 520 }}>
						<Table stickyHeader aria-label='sticky table'>
							<TableHead>
								<TableRow>
									<TableCell align='center'>Id</TableCell>
									<TableCell align='center'>Name</TableCell>
									<TableCell align='center'>Email</TableCell>
									<TableCell align='center'>Phone</TableCell>
									<TableCell align='center'>Address</TableCell>
									<TableCell align='center'>Operations</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((users) => {
										const { id, name, email, phone } = users;
										const { suite, street, city, zipcode } = users.address;

										return (
											<TableRow
												key={id}
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}
											>
												<TableCell component='th' scope='row' align='center'>
													{id}
												</TableCell>
												<TableCell align='center'>{name}</TableCell>
												<TableCell align='center'>{email}</TableCell>
												<TableCell align='center'>{phone}</TableCell>
												<TableCell align='center'>{`${suite}, ${street}, ${city}, ${zipcode}`}</TableCell>
												<TableCell align='center'>
													<Button
														variant='outlined'
														size='small'
														onClick={() => deleteData(id)}
													>
														Delete
													</Button>
												</TableCell>
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25, 100]}
						component='div'
						count={users.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			</ThemeProvider>
		</>
	);
};

export default Users;
