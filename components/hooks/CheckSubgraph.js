import {useQuery, gql} from "@apollo/client";
const CHECK_USER = gql`
query GetUser($id: ID!){
  
    exampleEntities(where: { id: $id }) {
        id
        count
        NFTAddress
  }
}
`;

export const CheckSubgraph = (id) => {
    const {error, data, loading} = useQuery(CHECK_USER, {
        variables: {
            id
        }
    });

    return{
        error,
        data,
        loading
    }


}