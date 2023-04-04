import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../redux/actions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../assets/css/App.css';

const Comments = () => {
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
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const commentData = useSelector((state) => state.commentData);
	console.log(commentData);
	const comments = useSelector((state) => state.commentData.comments);
	const error = useSelector((state) => state.commentData.error);

	const dispatch = useDispatch();

	const { id } = useParams();
	console.log('comments: in params', id);

	useEffect(() => {
		dispatch(fetchComments(id));
	}, [dispatch, id]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	console.log('commentData', comments);

	return commentData.loading ? (
		<>
			<h1>Loading...</h1>
		</>
	) : commentData.error ? (
		<>
			<h1>{error}</h1>
		</>
	) : (
		// return (
		<>
			<h2 style={{ padding: '0 0 10px 0' }}>Comments</h2>
			<ThemeProvider theme={theme}>
				<Paper sx={{ width: '100%', overflow: 'hidden' }}>
					<TableContainer sx={{ maxHeight: 718 }}>
						<Table stickyHeader aria-label='sticky table'>
							<TableHead>
								<TableRow>
									<TableCell align='center'>Id</TableCell>
									<TableCell align='center'>Name</TableCell>
									<TableCell align='center'>Email</TableCell>
									<TableCell align='center'>Comment</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{comments &&
									comments
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((comments) => {
											const { id, name, email, body } = comments;

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
													<TableCell align='left'>{name}</TableCell>
													<TableCell align='left'>{email}</TableCell>
													<TableCell align='left'>{body}</TableCell>
												</TableRow>
											);
										})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component='div'
						count={comments && comments.length}
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

export default Comments;
