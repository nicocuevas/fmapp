import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getArtistsInfo, getTopAlbums, getTopTracks } from '../../services/artist';
import AppLayout from '../../layouts/AppLayout'
import CardList from '../../components/CardList';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
    header: {
      minHeight: '200px',
      backgroundColor: '#dcdcdc',
      textAlign: 'center'
    },
    main: {
      marginTop: theme.spacing(4),
    },
    cardAlbums: {
      maxWidth: '200px',
    },
    cardAlbumMedia: {
      height: 160,
      width: '100%',
    }
  }),
);

function artistPage(props) {
  const classes = useStyles();
  const [showBio, setShowBio] = useState(false);

  function getBioContent() {
    return {__html: props.artist.bio.content }
  }

  function getBioSummary() {
    return {__html: props.artist.bio.summary }
  }

  function getAlbums() {
    return props.albums && props.albums.album || []
  }

  function getTracks() {
    return props.tracks && props.tracks.track || []
  }

  function handleClickShowBio(event) {
    return true
  }

  return (
    <AppLayout title={`Artist|${props.artist && props.artist.name ? props.artist.name : ''}`}>
      <Paper className={classes.header} elevation={0}>
        <Typography variant="h2" color="textSecondary">
             {props.artist && props.artist.name ? props.artist.name : ''}
        </Typography>
      </Paper>
      <Container>
        <Grid container spacing={4} className={classes.main}>
          <Typography variant="h5"> Biography </Typography>
        </Grid>
        <Grid container spacing={4} className={classes.main}>
          <Grid item xs={12} md={8}>
              <Grid container spacing={4} className={classes.main}>
              {
                showBio ?
                  <div>
                    <Typography variant="body1" dangerouslySetInnerHTML={getBioContent()}/>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => {setShowBio(false)}}>
                        Hide
                    </Button>
                  </div>
                :
                  <div>
                    <Typography variant="body1" dangerouslySetInnerHTML={getBioSummary()}/>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      onClick={() => {setShowBio(true)}}>
                        Show All
                    </Button>
                  </div>
              }
              </Grid>
              <Grid container spacing={4} className={classes.main}>
                <Typography variant="h5"> Top Albums </Typography>
              </Grid>
              <Grid container spacing={4} className={classes.main}>
              {
                getAlbums().map(
                  (item, index)=>
                  <Grid item xs={12} md={3} key={index}>
                    <Card className={classes.cardAlbums}>
                      <CardMedia
                          className={classes.cardAlbumMedia}
                          image={item.image[2]['#text'] ? item.image[2]['#text'] : '/no_image.png'}
                       />
                      <CardContent>
                        <Typography  gutterBottom variant="caption">
                          {item.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              }
              </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5"> Top Tracks </Typography>
            <Grid item xs={12} md={12}>
              <div>
                <List dense>
                  {
                    getTracks().map(
                      (item, index) =>
                      <ListItem key={index}>
                        <ListItemIcon>
                          {index+1}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                        />
                      </ListItem>
                    )
                  }
                </List>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}

artistPage.getInitialProps = async ({ query: { mbid } }) => {
  const artistInfo = await getArtistsInfo(mbid)
  const topTracks = await getTopTracks(mbid)
  const topAlbums = await getTopAlbums(mbid)
  return { artist: artistInfo, albums: topAlbums, tracks: topTracks }
}

export default artistPage
