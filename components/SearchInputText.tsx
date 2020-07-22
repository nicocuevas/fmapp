import React, { useState } from 'react';
import Router from 'next/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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
  const [searchText, setSearchText] = useState(String);

  function updateSearchText(event){
    setSearchText(event.target.value);
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      Router.push({
        pathname: `/search/${searchText}`,
      });
    }
  }

  function handleClick(event) {
    Router.push({
      pathname: `/search/${searchText}`,
    });
  }

  return (
    <TextField
        className={classes.search}
        id="input-search"
        color="secondary"
        placeholder="Search for music"
        value={searchText}
        onChange={updateSearchText.bind(this)}
        onKeyPress={keyPressed.bind(this)}
        InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleClick}>
                    <SearchIcon color="secondary"/>
                  </IconButton>
                </InputAdornment>
            ),
        }}
    />
  );
}
