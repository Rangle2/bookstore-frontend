import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const user = localStorage.getItem('username');

        if (!token || !user) {
          setLoading(false);
          return;
        }

        const response = await fetch(`http://localhost:8080/api/user/username/${user}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on the current tab
    if (value === 0) {
      // Logic for changing username
    } else if (value === 1) {
      // Logic for changing password
    }
  };



  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box sx={{
      flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, width: '30%', margin: 'auto', alignItems: 'center',
      height: '80vh'
    }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        style={{
          borderRight: 1,
          borderColor: 'divider'
        }}
        sx={{
          '@media (max-width: 600px)': {
            width: '100px',
            overflow: 'visible',
            position: 'relative',
            right: '90px',

          },
        }}


      >
        <Tab label="Change Username" {...a11yProps(0)} />
        <Tab label="Change Password" {...a11yProps(1)} />
        <Tab label="User Information" {...a11yProps(2)} />
      </Tabs>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TabPanel value={value} index={0}>
          <TextField
            id="newUsername"
            label="New Username"
            variant="outlined"
            margin="normal"
            fullWidth
            style={{ marginBottom: '20px', color: 'black' }}
            sx={{
              '@media (max-width: 600px)': {
                height: '30px',
                width: '160px',
                fontSize: '20px',
                position: 'relative',
                top: '-10px',
                left: '-80px'
              },
            }}
          />
          <TextField
            id="currentPassword"
            label="Current Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            style={{ marginBottom: '20px' }}
            sx={{
              '@media (max-width: 600px)': {
                height: '30px',
                width: '160px',
                fontSize: '20px',
                position: 'relative',
                top: '-10px',
                left: '-80px'
              },
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField
            id="currentUsername"
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            style={{ marginBottom: '20px' }}
            sx={{
              '@media (max-width: 600px)': {
                height: '30px',
                width: '160px',
                fontSize: '20px',
                position: 'relative',
                top: '-10px',
                left: '-80px'
              },
            }}
          />
          <TextField
            id="currentPassword"
            label="Current Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            style={{ marginBottom: '20px' }}
            sx={{
              '@media (max-width: 600px)': {
                height: '30px',
                width: '160px',
                fontSize: '20px',
                position: 'relative',
                top: '-10px',
                left: '-80px'
              },
            }}
          />
          <TextField
            id="newPassword"
            label="New Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            style={{ marginBottom: '20px' }}
            sx={{
              '@media (max-width: 600px)': {
                height: '30px',
                width: '160px',
                fontSize: '20px',
                position: 'relative',
                top: '-10px',
                left: '-80px'
              },
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {userData && (
            <>
              <Typography>Username : {userData.username}</Typography>
              <Typography>Email: {userData.email}</Typography>
              {/* Add more information as needed */}
            </>
          )}
        </TabPanel>
        {value !== 2 && (
          <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{
              
              backgroundColor: 'black',
              marginLeft: '100px'
          }}
          sx={{
              '@media (max-width: 600px)': {
                  width: '100%', 
                  position: 'relative',
                  top: '-10px',
                  left: '-150px',
              },
              '@media (min-width: 701px)': {
                  width: '50%', 
              },
          }}
      >
          Save
      </Button>
        )}
      </form>
    </Box>
  );
}
