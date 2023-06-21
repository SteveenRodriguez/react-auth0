import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
// Importación de ApolloClient
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Inicializar ApolloClient
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

// const GET_CHARACTERS_NAME = gql`
//   query GetCharactersName {
//     characters {
//       results {
//         id
//         name
//       }
//     }
//   }
// `;



// Variables del .env para configurar Auth0
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {/* Conectamos apollo con react el cual recibe un prop {client} */}
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
