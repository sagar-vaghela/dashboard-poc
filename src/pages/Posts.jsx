import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../assets/css/App.css';

const Posts = () => {
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

	const postData = useSelector((state) => state.postData);
	const posts = useSelector((state) => state.postData.posts);
	const error = useSelector((state) => state.postData.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const showComments = (id) => {
		// dispatch(fetchComments(id));
		console.log('Comment btn clicked...', id);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return postData.loading ? (
		<>
			<h1>Loading...</h1>
		</>
	) : postData.error ? (
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
									<TableCell align='center'>Title</TableCell>
									<TableCell align='center'>Content</TableCell>
									<TableCell align='center'>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{posts
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((posts) => {
										const { id, title, body } = posts;

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
												<TableCell align='left'>{title}</TableCell>
												<TableCell align='left'>{body}</TableCell>
												<TableCell align='left'>
													<Link to={`/posts/${id}/comments`}>
														<Button
															variant='outlined'
															size='small'
															onClick={() => showComments(id)}
														>
															Comments
														</Button>
													</Link>
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
						count={posts.length}
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

export default Posts;
