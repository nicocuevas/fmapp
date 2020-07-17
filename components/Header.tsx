import Link from 'next/link'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import SearchInputText from './SearchInputText';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    links: {
        marginLeft: theme.spacing(5),
    }
  }),
);

const links = [
    {title:'home', route:'/'},
    {title:'live', route:'live'},
    {title:'music', route:'music'},
    {title:'charts', route:'charts'},
    {title:'events', route:'events'},
    {title:'features', route:'features'}
]

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
            <Toolbar>
                <Box>
                    <img src="logo_static.png" />
                </Box>
                <Box className={classes.links}>
                    {
                        links.map((page, index) => (
                            <Link href={`${page.route}`} key={index} as={`${page.route}`}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    disableElevation
                                >
                                    <a>{page.title}</a>
                                </Button>
                            </Link>
                        ))
                    }
                </Box>
                <SearchInputText />
            </Toolbar>
    </AppBar>
  );
}
