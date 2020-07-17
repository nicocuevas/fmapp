import { getTopAlbums, getTopArtists } from '../services/tag';
import AppLayout from '../layouts/AppLayout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CardList from '../components/CardList';
import Skeleton from '@material-ui/lab/Skeleton';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
  }),
);

function IndexPage(props) {
  const classes = useStyles();

  return (
    <AppLayout title="Home | Explore Top Music">
      <div className={classes.root}>
        
        {props.artists && props.artists.items ? (
          <CardList items={props.artists.items} title="Top Artists"/>
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
        {props.albums && props.albums.items ? (
          <CardList items={props.albums.items} title="Top Albums"/>
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </div>
    </AppLayout>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  const words = ['trap', 'rock', 'usa', 'japan', 'korea', 'argentina', 'rap']
  const ranNum = Math.floor(Math.random()*words.length)
  const topAlbums = await getTopAlbums(words[ranNum])
  const topArtists = await getTopArtists(words[ranNum])
  return { albums: topAlbums, artists: topArtists }
}

export default IndexPage
