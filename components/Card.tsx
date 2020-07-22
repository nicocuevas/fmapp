import React from 'react';
import Router from 'next/router';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      width: 150,
      height: 125,
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 150,
    },
    actions: {
      display: 'flex',
      alignItems: 'start',
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
    title: {
      fontSize: '0.80rem',
    },
  }),
);

export default function CustomCard(props) {
    const classes = useStyles();

    function handleClick(event) {
      const mbid = props.item && props.item.artist ? props.item.artist.mbid : props.item.mbid
      Router.push({
        pathname: `/artist/${mbid}`,
      });
    }

    return (
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2" className={classes.title}>
              {props.item.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
             {props.item && props.item.artist ? props.item.artist.name : ''}
            </Typography>
            <div className={classes.actions}>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleClick}>
                  View More
              </Button>
            </div>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.item.image[2]['#text'] ? props.item.image[2]['#text'] : '/no_image.png'}
          title="Live from space album cover"
        />
      </Card>
    );
}
