import {
  GetAllCharactersQuery,
  useGetAllCharactersQuery,
} from 'src/generated/graphql'
import graphqlRequestsClient from 'src/lib/clients/graphqlRequestsClient'

const GraphqlRequestQuery: React.FC = () => {
  const { isLoading, error, data } = useGetAllCharactersQuery<
    GetAllCharactersQuery,
    Error
  >(graphqlRequestsClient, {})

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error: {error}</p>

  return (
    <>
      {data?.characters?.results?.map(character => (
        <div key={character?.id}>{character?.name}</div>
      ))}
    </>
  )
}

export default GraphqlRequestQuery
