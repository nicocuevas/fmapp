import { getTopAlbums, getTopArtists } from '../services/tag';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CardList from '../components/CardList';
import AppLayout from '../layouts/AppLayout'




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
      <Container>
        <div className={classes.root}>
          {props.artists && props.artists.items ? (
            <CardList items={props.artists.items} title={`Top ${props.word} Artists`}/>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
          {props.albums && props.albums.items ? (
            <CardList items={props.albums.items} title={`Top ${props.word} Albums`}/>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
        </div>
      </Container>
    </AppLayout>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  const words = ['trap', 'rock', 'usa', 'japan', 'korea', 'argentina', 'rap']
  const ranNum = Math.floor(Math.random()*words.length)
  const selectedWord = words[ranNum]
  const topAlbums = await getTopAlbums(selectedWord)
  const topArtists = await getTopArtists(selectedWord)
  return { albums: topAlbums, artists: topArtists, word: selectedWord }
}

export default IndexPage
