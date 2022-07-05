import './App.css';
import client from "./graphql/graphql";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Todos from './components/Todo/Todos';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default App;
