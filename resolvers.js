export default {
  User: {
    posts: (parent, args, context, info) => parent.getPosts(),
    comments: (parent, args, context, info) => parent.getComments()
  },
  Post: {
    user: (parent, args, context, info) => parent.getUser(),
    comments: (parent, args, context, info) => parent.getComments()
  },
  Comment: {
    user: (parent, args, context, info) => parent.getUser(),
    post: (parent, args, context, info) => parent.getpost()
  },
  Query: {
    users: (parent, args, { db }, info) => db.User.findAll(),
    posts: (parent, args, { db }, info) => db.Post.findAll(),
    comments: (parent, args, { db }, info) => db.Comment.findAll(),
    user: (parent, { id }, { db }, info) => db.User.findByPk(id),
    post: (parent, { id }, { db }, info) => db.Post.findByPk(id),
    comment: (parent, { id }, { db }, info) => db.Comment.findByPk(id)
  },
  Mutation: {
    createUser: (parent, { username }, { db }, info) =>
      db.User.create({
        username: username
      }),
    createPost: (parent, { title, content, userId }, { db }, info) =>
      db.Post.create({
        title: title,
        content: content,
        userId: userId
      }),
    updatePost: (parent, { id, title, content }, { db }, info) =>
      db.Post.update(
        {
          title: title,
          content: content
        },
        {
          where: {
            id: id
          }
        }
      ),
    deletePost: (parent, { id }, { db }, info) =>
      db.Post.destroy({
        where: {
          id: id
        }
      }),
    createComment: (parent, { content, userId, postId }, { db }, info) =>
      db.Comment.create({
        content: content,
        userId: userId,
        postId: postId
      }),
    updateComment: (parent, { id, content }, { db }, info) =>
      db.Comment.update(
        {
          content: content
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteComment: (parent, { id }, { db }, info) =>
      db.Comment.destroy({
        where: {
          id: id
        }
      })
  }
};
