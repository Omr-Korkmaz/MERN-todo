import {gql} from "apollo-server-express"

const typeDefs = gql`
type  Query {
    welcome:String
    
}`


export default typeDefs;