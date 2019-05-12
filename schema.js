export default `
  type User {
    id: ID!
    username: String!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String
    content: String!
    userId: ID!
    user: User!
  }
  type Query {
    posts: [Post!]!
    post(id: ID!): Post
    user(id: ID!): User
    users: [User!]!
  }
  type Mutation {
    createPost(title: String, content:String!, userId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;
