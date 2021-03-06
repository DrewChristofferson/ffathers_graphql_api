const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
  
    const user = await context.prisma.user.create({ data: { ...args, password } })
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    const user = await context.prisma.user.findUnique({ where: { email: args.email } })
    if (!user) {
      throw new Error('No such user found')
    }
  
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user,
    }
  }

  async function createQuote(parent, args, context, info) {
    const { userId } = context;
  
    return await context.prisma.quote.create({
      data: {
        content: args.content,
        year: args.year,
        foundingFather: { connect: { id: args.foundingFatherID } },
        url: args.url,
        classPeriod: args.classPeriod,
        postedBy: { connect: { id: userId } },
      }
    })
  }

  async function createFoundingFather(parent, args, context, info) {
    const { userId } = context;
  
    return await context.prisma.foundingFather.create({
      data: {
        name: args.name,
        description: args.description
      }
    })
  }
  
  module.exports = {
    signup,
    login,
    createQuote,
    createFoundingFather,
  }