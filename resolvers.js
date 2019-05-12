export default {
  User: {
    posts: (parent, args, context, info) => parent.getPosts()
  },
  Post: {
    user: (parent, args, context, info) => parent.getUser()
  },
  Query: {
    posts: (parent, args, { db }, info) => db.Post.findAll(),
    users: (parent, args, { db }, info) => db.User.findAll(),
    post: (parent, { id }, { db }, info) => db.Post.findByPk(id),
    user: (parent, { id }, { db }, info) => db.User.findByPk(id)
  },
  Mutation: {
    createPost: (parent, { title, content, userId }, { db }, info) =>
      db.Post.create({
        title: title,
        content: content,
        userId: userId
      }),
    updatePost: (parent, { title, content, id }, { db }, info) =>
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
      })
  }
};
