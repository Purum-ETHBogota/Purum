import {useQuery, gql} from "@apollo/client";
const CHECK_USER = gql`
query GetUser($nullifierHash: String! $coordinatesHash:String!){
  
    exampleEntities(where: {nullifierHash: $nullifierHash coordinatesHash:$coordinatesHash}) {
    id
    count
    nullifierHash
    coordinatesHash
  }
}
`;

export const CheckSubgraph = (nullifierHash, coordinatesHash) => {
    const {error, data, loading} = useQuery(CHECK_USER, {
        variables: {
            nullifierHash,
            coordinatesHash
        }
    });

    return{
        error,
        data,
        loading
    }


}