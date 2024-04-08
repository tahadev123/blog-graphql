import { gql } from "@apollo/client"

const SEND_COMMENT = gql`
mutation sendComment(
    $name: String!,
    $email: String!,
    $text: String!,
    $slug: String!
    ) {
    createComment(
      data: {
        name: $name,
        email: $email,
        text: $text,
        post: {connect: {slog: $slug}}}
    ) {
      id
    }
}
`

export { SEND_COMMENT }