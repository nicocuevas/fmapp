import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import CustomCard from './Card'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: theme.spacing(5)
    }
  }),
);



export default function CardList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
            {props.title}
        </Typography>
        <Grid container spacing={3}>
            {props.items.map(
                (item, index) =>
                    <Grid item xs={12} sm={3}>
                        <CustomCard item={item}/>
                    </Grid>
                )
            }
        </Grid>
    </div>
  );
}
