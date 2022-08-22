import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client" //, ApolloLink, gql
import { onError } from "@apollo/client/link/error"
import { setContext } from "@apollo/client/link/context"
import { Alert } from "../components/alert/Alert"

const httpLink = new HttpLink({
  uri: `${process.env["REACT_APP_API"]}`
})

const authLink = setContext((_, { headers }) => {
  let access_token = ""
  if (localStorage.getItem("user")) {
    const userObj = localStorage.getItem("user")
    console.log("userObj ----------->", userObj)
    access_token = userObj.access_token
  }
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${access_token}`
    }
  }
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      if (err.status) {
        const { status } = err
        switch (status) {
          case 441:
            console.log("441")
            Alert({
              type: "warning",
              title: "Session Expired",
              onOk: () => {
                setTimeout(() => {
                  localStorage.removeItem("user")
                  window.location.href = "/login"
                }, 200)
              }
            })
            return
          default:
            return
        }
      }
    }
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: ApolloLink.from([httpLink])
  link: authLink.concat(errorLink).concat(httpLink)
})
