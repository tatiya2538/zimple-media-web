import { gql } from "@apollo/client/core"
export const SAVEUSERS = gql`
  mutation SaveUsers($input: UserInput!) {
    saveUsers(input: $input) {
      UserName
      UserPassword
      UserEmail
      UserFullName
      CreateAt
      CreateBy
      UpdateAt
      UpdateBy
    }
  }
`
