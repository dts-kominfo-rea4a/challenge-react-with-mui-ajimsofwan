// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid } from "@mui/material"; 
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <div>
      {data.map((contact, i) => (
        <Card key={i} variant="outlined" sx={{ display: "block", mb: 1 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={2}>
                <Avatar src={contact.photo} sx={{ width: 65, height: 65 }} />
              </Grid>
              <Grid item md={10}>
                <Typography>{contact.name}</Typography>
                <Typography color="text.secondary">{contact.phone}</Typography>
                <Typography color="text.secondary">{contact.email}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}    
    </div>
    );
};

export default Contact;
