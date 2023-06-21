// Importación de ApolloClient
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

function QueryByApollo() {
    // creación de la Query
    const GET_CHARACTERS_NAME = gql`
    query GetCharactersName {
        characters {
            results {
                id
                name
                }
            }
        }
    `;

    // desestructuración del loagind, error y data
    const { loading, error, data } = useQuery(GET_CHARACTERS_NAME);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.characters.results.map(({ id, name }) => (
        <div key={id}>
            <ul>
                <li key={id}>{name}</li>
            </ul>
            <p>{name}</p>
        </div>
    ));
}

export default QueryByApollo;











