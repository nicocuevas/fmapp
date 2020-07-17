import React, { ReactNode } from 'react';
import Head from 'next/head';

import Container from '@material-ui/core/Container';
import Header from '../components/Header';

type Props = {
  children?: ReactNode
  title?: string
}


const AppLayout = ({ children, title = '' }: Props) => (
  <div>
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <Header/>
    <div>
        {children}
    </div>
    <style global jsx>{`
        html {
            font-family: 'Open Sans', sans-serif;
        }
    `}</style>
  </div>
)

export default AppLayout
