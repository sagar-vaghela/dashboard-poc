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
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/registration.css';
import { useSelector } from 'react-redux';

export default function Login() {
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

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const navigate = useNavigate();

	const usersCred = JSON.parse(localStorage.getItem('users'));
	// console.log("usersCred===", usersCred);

	const login_btn = () => {
		usersCred.map((e) => {
			if (email === e.email && password === e.password) {
				localStorage.setItem('isLoggedIn', 'true');
				navigate('/');
			} else {
				localStorage.removeItem('isLoggedIn');
				navigate('/login');
				alert('Please enter valid credentials...');
			}
		});
		const layout__content = (document.getElementsByClassName(
			'layout__content'
		)[0].style.paddingLeft = '300px');

		setEmail('');
		setPassword('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
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
								Log In
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
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									autoFocus
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
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
									onClick={login_btn}
								>
									Login
								</Button>
								<Grid container>
									<Grid item>
										<Link to='/register' variant='body2' className='already'>
											{"Don't have an account? Register"}
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
