import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch', // Responsive width
      '&:focus': {
        width: '30ch', // Responsive width on focus
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1000, marginBottom: '30px' }}>
      <FormGroup></FormGroup>
      <AppBar position="sticky" sx={{ backgroundColor: 'black', marginBottom: '30px' }}>
        <Container maxWidth="lm">
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" component="div" sx={{
                  width: { xs: '100px', md: '150px' },
                  '@media (max-width: 600px)': { fontSize: 20 },
                  color: 'white',
                  fontSize: 32,
                  fontFamily: 'Inria Serif',
                  fontWeight: '100',
                  wordWrap: 'break-word',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1000,
                }}>
                  BookStore
                </Typography>
              </Grid>
              <Grid item>
                <Search sx={{ width: { xs: '110px', md: '400px' } }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{ fontSize: '12px', padding: '8px' }}
                  />
                </Search>
              </Grid>
              <Grid item>
                <Button
                component={Link}
                to="/Login"
                  sx={{
                    width: { xs: '110px', md: '150px' },
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    right: '200px',
                    top: '20px',
                    '&:hover': { background: 'white', color: 'black' },
                    '@media (max-width: 600px)': {
                      fontSize: 10,
                      alignItems: 'center',
                      top: '-5px',
                      right: '0px',
                      marginBlock: '10px',
                      display: 'flex',
                      wordWrap: 'break-word',
                      justifyContent: 'center',
                    },
                  }}
                >
                  Login
                </Button>
                <div>
                  <Button
                    component={Link}
                    to="/register"
                    sx={{
                      width: { xs: '110px', md: '150px' },
                      backgroundColor: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                      bottom: '15px',
                      '&:hover': { background: 'white', color: 'black' },
                      '@media (max-width: 600px)': {
                        fontSize: 10,
                        top: '-10px',
                        alignItems: 'center',
                        display: 'flex',
                        wordWrap: 'break-word',
                        justifyContent: 'center',
                      },
                    }}
                  >
                    Sign in
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
