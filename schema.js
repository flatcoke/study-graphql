export default `
  type User {
    id: ID!
    username: String!
    posts: [Post!]!
    comments: [Comment!]!
  }
  type Post {
    id: ID!
    title: String
    content: String!
    userId: ID!
    user: User!
    comments: [Comment!]!
  }
  type Comment {
    id: ID!
    content: String!
    userId: ID!
    user: User!
    postId: ID!
    post: Post!
  }
  type Query {
    user(id: ID!): User
    users(after: ID, limit: Int): [User!]!
    post(id: ID!): Post
    posts(after: ID, limit: Int): [Post!]!
    comment(id: ID!): Comment
    comments(after: ID, limit: Int): [Comment!]!
  }
  type Mutation {
    createUser(username: String): User!
    createPost(title: String, content:String!, userId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
    createComment(content:String!, userId: ID!, postId: ID!): Comment!
    updateComment(id: ID!, content:String!): [Int!]!
    deleteComment(id: ID!): Int!
  }
`;
