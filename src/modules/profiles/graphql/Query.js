import { gql } from "@apollo/client"

export const GET_USER = gql`
  query getUser {
    getUser {
      UserId
      UserFullName
      UserEmail
      UserName
      UserPasword
    }
  }
`
