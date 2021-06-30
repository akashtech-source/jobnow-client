import { Typography, Grid, Card } from '@material-ui/core';
import React from 'react';
import Image from 'next/image'
import pic from '../public/picture.jpg';


const Post = ({properties}) => {
    return (
        <div style={{ padding: '100px'}}>
            <Grid container spacing={3}>
                {
                    properties.map(property => (
                        <Grid item key={property._id} xs={12} md={4}>
                            <Card>
                            <Image src={pic} alt="23"></Image>
                                <div style={{padding: '20px'}}>
                                    <Typography 
                                    variant="h5"
                                    >
                                    {property.title}
                                    </Typography>
                                    <small>{property.description}</small>
                                    <br />
                                    <small>{property.time}</small>
                                </div>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Post;