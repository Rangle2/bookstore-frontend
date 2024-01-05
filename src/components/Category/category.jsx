import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';




// Main Category component
function Category() {
  // State to hold the fetched categories
  const [categories, setCategories] = React.useState([]);

  // Function to render each row in the list
  function renderRow(props) {
    const { index, style } = props;
    const category = categories[index];
    
  
    return (
      <ListItem style={style} key={category.categoryId} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={category.categoryName} />
        </ListItemButton>
      </ListItem>
    );
  }
  

  // Effect hook to fetch categories when the component mounts
  React.useEffect(() => {
    // Fetch categories from the API
    fetch('http://localhost:8080/api/category/get')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []); // The useEffect runs only once when the component is initially rendered

  // Render the component
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={categories.length}
        overscanCount={5}
      >
        {/* Use the renderRow function to render each row */}
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}

export default Category;
