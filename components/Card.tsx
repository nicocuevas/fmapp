import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
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
    }
  }),
);

export default function CustomCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              {props.item.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
             {props.item && props.item.artist ? props.item.artist.name : ''}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.item.image[2]['#text']}
          title="Live from space album cover"
        />
      </Card>
    );
}
