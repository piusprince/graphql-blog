const {blog} = require("./model/data")
module.exports = {
    Query: {
        blog(_,ctx) { 
            // console.log(ctx, data.blog, ctx.input)
            return blog.find((item) => item.id == ctx.input)
        }
    },
    Mutation: {
        createBlog(_, {input}) {
            console.log(blog)
            blog.push({id: blog.length + 1, ...input})
            console.log(blog)
            return input
        },

        updateBlog(_, {input}, ctx) {
            const addblog = ctx.model.blog.update(input.author, input.updates)
            return addblog
        }
    }
    
}