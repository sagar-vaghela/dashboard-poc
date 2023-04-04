import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const theme = createTheme();

export default function Register() {
	let theme;
	const currentTheme = useSelector((state) => state.ThemeReducer.mode);

	if (currentTheme === 'theme-mode-dark') {
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

	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	// const navigate = useNavigate();

	let userCred = [];

	const register_btn = () => {
		const user = {
			name: name,
			email: email,
			password: password,
		};
		// console.log(user);
		userCred.push(user);
		if (localStorage.getItem('users')) {
			userCred = JSON.parse(localStorage.getItem('users'));
			// console.log(userCred)
			userCred.push(user);
			localStorage.setItem('users', JSON.stringify(userCred));
		} else {
			localStorage.setItem('users', JSON.stringify(userCred));
		}

		// console.log({name, email, password});
		document.getElementsByTagName('form')[0].reset();
		// navigate('/login');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			{/* <Header /> */}
			<div id='register_form'>
				<ThemeProvider theme={theme}>
					<Container component='main' maxWidth='xs'>
						<CssBaseline />
						<Box
							sx={{
								marginTop: 8,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Register
							</Typography>
							<Box
								component='form'
								onSubmit={handleSubmit}
								noValidate
								sx={{ mt: 1 }}
							>
								<TextField
									margin='normal'
									required
									fullWidth
									id='name'
									label='Name'
									name='name'
									autoComplete='name'
									autoFocus
									onChange={(e) => setName(e.target.value)}
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									onChange={(e) => setEmail(e.target.value)}
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Link to='/login'>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 3, mb: 2 }}
										onClick={register_btn}
									>
										Register
									</Button>
								</Link>
								<Grid container>
									<Grid item>
										<Link
											to='/login'
											variant='body2'
											className='already'
											color='primary'
										>
											{'Already have an account? Log In'}
										</Link>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Container>
				</ThemeProvider>
			</div>
		</>
	);
}
