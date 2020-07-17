import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      '& input': {
          color: 'white'
      },
      marginLeft: theme.spacing(10),
    },
  }),
);


export default function SearchInputText() {
  const classes = useStyles();

  return (
    <TextField
        className={classes.search}
        id="input-search"
        color="secondary"
        placeholder="Search for music"
        InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    <SearchIcon color="secondary"/>
                </InputAdornment>
            ),
        }}
    />
  );
}
