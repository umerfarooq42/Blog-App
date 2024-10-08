import { Box, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#28282B'
    },
    textlink: {
        color: '#28282B',
        fontSize:20
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Building a better future for writing</Typography>
                <Typography variant="h5" className={classes.text}>
                    Replica goods are close copies of the original goods.Also reffered to as knockoffs,they are acknowledged to be modeled after the original famous Product.
                </Typography>
                <Typography variant="h5" className={classes.text}>
                 Therefore, even though they share a striking resemblance with the original goods,they are not passed off as being the real
                </Typography>
            </Box>
        </Box>
    )
}

export default About;