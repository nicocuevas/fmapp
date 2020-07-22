import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { searchAlbums } from '../../services/album';
import { searchArtists } from '../../services/artist';
import AppLayout from '../../layouts/AppLayout'
import CardList from '../../components/CardList';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
  }),
);

function SearchPage(props) {
  const classes = useStyles();

  return (
    <AppLayout title="Search | Explore Top Music">
      <Container>
        <Typography variant="h2" gutterBottom>
            Search Result
        </Typography>
      <div className={classes.root}>
        {props.artists && props.artists.artist ? (
          <CardList items={props.artists.artist} title={`Artists`}/>
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
        {props.albums && props.albums.album ? (
          <CardList items={props.albums.album} title={`Albums`}/>
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </div>
      </Container>
    </AppLayout>
  );
}

SearchPage.getInitialProps = async ({ query: { word } }) => {
  const albumsData = await searchAlbums(word, 25)
  const artistsData = await searchArtists(word, 25)
  return { albums: albumsData.albummatches, artists: artistsData.artistmatches }
}

export default SearchPage
