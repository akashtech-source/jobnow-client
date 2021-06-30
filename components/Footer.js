import { Typography, Grid, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import FooterImg from '../public/picture.png';

const useStyles = makeStyles({

})

const Footer = () => {
    return (
        <div style={{marginTop: '50px', 
        marginLeft: '100px', 
        color: 'grey',
        borderTop: '1px solid lightgrey',
        padding: '20px',
        paddingBottom: '50px'
        }}>
            <Grid container>
                <Grid item lg={3}>
                    <Image src={FooterImg} alt=""></Image>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="h6"
                    >Product</Typography>
                    <Typography>Feature</Typography>
                    <Typography>For IT & Developers</Typography>
                    <Typography>For Business</Typography>
                    <Typography>Integration</Typography>
                    <Typography>Pricing</Typography>
                    <Typography>ROI Calculator</Typography>
                    <Typography>Customer Success</Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="h6">Users</Typography>
                    <Typography>Supported Platform</Typography>
                    <Typography>FAQs</Typography>
                    <Typography>Trust</Typography>
                    <Typography>System Status</Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="h6">Education</Typography>
                    <Typography>Customer Resources</Typography>
                    <Typography>CMS Guides</Typography>
                    <Typography>Blog</Typography>
                    <Typography>Docs</Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="h6">Company</Typography>
                    <Typography>About</Typography>
                    <Typography>News</Typography>
                    <Typography>Press</Typography>
                    <Typography>Carrers</Typography>
                    <Typography>Become a Partner</Typography>
                    <Typography>Contact Us</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;