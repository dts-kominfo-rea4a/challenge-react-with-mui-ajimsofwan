// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
      <>
      {Array.from(data).map((contact, i) => (              
        <List key={i} sx={{display: 'block', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={contact.photo} sx={{ width: 65, height: 65, mr: 2 }} />
          </ListItemAvatar>
          <ListItemText
            primary={contact.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {contact.phone}
                </Typography>
                {contact.email}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>         
      ))} 
      </>    
    );
};

export default Contact;
