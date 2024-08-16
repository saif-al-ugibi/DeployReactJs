import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import { ApolloClient, InMemoryCache, HttpLink  , ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_KEY,
    credentials: 'same-origin',
    headers: {
      Authorization: localStorage.getItem('token') || '',
    },
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <Helmet>
      <title>Graduaat Programmeren</title>
      <meta name='description' content='This is platform about Graduaat Programmeren'/>
      <meta name='keywords' content='PGM , Reactjs , GraphQl , Mysql' />
  </Helmet>
  <App />
  </ApolloProvider>
);

