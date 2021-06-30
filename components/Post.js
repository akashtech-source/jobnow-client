import { Typography, Grid, Card } from '@material-ui/core';
import React from 'react';
import Image from 'next/image'
import pic from '../public/picture.jpg';


const Post = ({properties}) => {
    return (
        <div style={{marginTop: '50px'}}>
            <Grid container spacing={3}>
                {
                    properties.map(property => (
                        <Grid item key={property._id} xs={12} md={4}>
                            <Card>
                            <Image src={pic} alt="23"></Image>
                            <Typography>
                            {property.title}
                        </Typography>
                        <small>{property.description}</small>
                        <br />
                        <small>{property.time}</small>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Post;