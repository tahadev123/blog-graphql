import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
      posts {
          author {
          ... on Author {
              name
              avatar {
                url
              }
              }
            }
          title
          slug
          id
          coverPhoto {
            url
          }
      }
  }
`

const GET_AUTHOR = gql`
  query {
      authors {
        id
        name
        slug
        avatar {
          url
        }
      }
  }
`

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`

const GET_POST_INFO = gql`
  query ($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        ... on Author {
          avatar {
            url
          }
          field
          name
        }
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`

export { GET_BLOGS_INFO, GET_AUTHOR, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENTS }