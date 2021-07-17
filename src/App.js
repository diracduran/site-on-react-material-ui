import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Container, IconButton, Typography, 
  Box, Paper, Grid, Card,CardMedia, CardContent, CardActions,
  BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({

  route: {
    flexGrow: 1
  }, 

  menuButton: {
    marginRight: theme.spacing(1)
  },

  title: {
    marginRight: theme.spacing(1)
  },

  classTitle: {
    flexGrow: 1
  }, 

  AppBar: {
    backgroundColor: '#f48fb1'
  },

  signUp: {
    backgroundColor: '#d50000',
    color: '#fff'
  },

  learnMore: {
    backgroundColor: '#d50000',
    color: '#fff'
  },

  mainFeaturePost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  mainFeaturePostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  cardGrid: {
    marginTop: theme.spacing(2)
  },

  cardMedia: {
    paddingTop: '56.25%'
  },

  CardContent: {
    flexGrow: 1
  },

  cardGrid: {
    marginTop: theme.spacing(4)
  },

  formButtons: {
    color: '#d50000'
  }

}))


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   const [open, setOpen] = React.useState(false);
   const handleClickOpen = () => {
    setOpen(true);
   }
   const handleClose = () => {
    setOpen(false);
   }


  return (
      <>
        <AppBar position="fixed" className={classes.AppBar}>
            <Container fixed>
                <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="menu"
                      edge="start"
                      className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      React Material UI
                    </Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>


                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Log it to see videos</DialogContentText>
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="name"
                                  label="Email Address"
                                  type="email"
                                  fullWidth                         
                                />
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="password"
                                  label="Password"
                                  type="password"
                                  fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} className={classes.formButtons}>
                              Cancel
                            </Button>
                            <Button onClick={handleClose} className={classes.formButtons}>
                              Subscribe
                            </Button>
                          </DialogActions>
                        </Dialog>


                    </Box>
                    <Button variant="contained" className={classes.signUp}>Sing Up</Button>
                </Toolbar>
            </Container>
        </AppBar>

        <main>
            <Paper 
            className={classes.mainFeaturePost}
            style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
            >
                <Container fixed>
                    <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>

                                <div className={classes.mainFeaturePostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" paragraph>
                                      React Material UI
                                    </Typography>
                                    <Typography variant="h5" color="inherit" gutterBottom>
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </Typography>
                                    <Button variant="contained" className={classes.learnMore}>Learn More</Button>
                                </div>
                            </Grid>
                        </Grid>
                </Container>
            </Paper>

            <div className={classes.mainContent}>
                <Container maxWidth='md'>
                    <Typography variant="h2" color="textPrimary" align='center' paragraph>
                      React Material UI 
                    </Typography>
                    <Typography variant="h5" color="textSecondary" align="center" gutterBottom>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                      </Typography>
                    <div className={classes.mainButtons}> 
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                <Button variant="contained" className={classes.signUp}>Start Now</Button>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" variant="outlined">Learn More</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://source.unsplash.com/random"
                                  title="Image title"
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                      Blog post.
                                    </Typography>
                                    <Typography>
                                      Blog post. React Material UI blog React Material UI. Blog post.
                                    </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button variant="contained" className={classes.learnMore} size='small'>View</Button>
                                  <Button variant="contained" className={classes.learnMore} size='small'>Edit</Button>
                                  <LayersIcon />
                                  <PlayCircleFilledIcon />
                              </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>

        </main>

        <footer>
            <Typography variant='h6' align='center' gutterBottom>footer</Typography>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>React Material UI Site</Typography>
        </footer>

      </>
  );
}

export default App;
