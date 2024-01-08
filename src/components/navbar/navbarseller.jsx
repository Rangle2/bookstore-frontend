import * as React from 'react';
import { useState } from 'react';
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

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
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleBecomeSeller = () => {
    navigate('/createSeller')
  }

  const [firstName, setFirstName] = useState(localStorage.getItem("firstname") || '');
  const [lastName, setLastName] = useState(localStorage.getItem("lastname") || '');


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  
  const handleCartBtn = () =>{
    navigate("/userId/cart")
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1000, marginBottom: '30px' }}>
      <FormGroup></FormGroup>
      <AppBar position="sticky" sx={{ backgroundColor: 'black', marginBottom: '30px' }}>
        <Container maxWidth="lm">
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              {/* Sol Taraftaki Kısım */}
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

              {/* Orta Kısım - Search Bar */}
              <Grid item>
                <Search sx={{ width: { xs: '110px', md: '400px' } }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{ fontSize: '12px', padding: '9px' }}
                  />
                </Search>
              </Grid>


              {/* Sağ Taraftaki Kısım */}
              <Grid item sx={{ bottom: '10px', paddingTop: '20px' }}>
                {/* Account Circle Icon */}
                <div>
                  <Grid sx={{ position: 'inherit', textAlign: 'center', fontFamily: 'Roboto', wordBreak: 'break-word', fontSize: '24px' }
                  }>{firstName},{lastName}
                  </Grid>


                  <Button onClick={handleBecomeSeller} sx={{
                    width: { xs: '110px', md: '150px' },
                    position: 'sticky',
                    padding: '5px',
                    mt: '10px',
                    mb: '30px',
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    '&:hover': { background: 'white', color: 'black' },
                    '@media (max-width: 600px)': {
                      fontSize: 10,
                      alignItems: 'center',
                      display: 'flex',
                      wordWrap: 'break-word',
                      justifyContent: 'center',

                      position: 'relative',
                      bottom: '-5px',
                      left: '20px'
                    },
                    
                  }}>Become Seller</Button>

                  <ShoppingCart onClick={handleCartBtn} sx={{width:'60px', height:'40px', position:'relative', top:'5px', cursor:'pointer'}}></ShoppingCart>

                  

                  <AccountCircleIcon s sx={{
                    height: '40px',
                    width: '60px',
                    position: 'relative',
                    top: '5px',
                    cursor:'pointer',
                    zIndex: 1001,
                    '@media (max-width: 600px)': {
                      height: '30px',
                      width: '30px',  
                      position: 'relative',
                      top: '-100px',
                      left: '80px'
                    },

                  }}

                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle} />


                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleProfile}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>My account</MenuItem>
                              <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>

                  {/* Become Seller Button */}

                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
