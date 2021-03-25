function postedBy(parent, args, context) {
    return context.prisma.quote.findUnique({ where: { id: parent.id } }).postedBy()
  }

function foundingFather(parent, args, context) {
    return context.prisma.quote.findUnique({ where: { id: parent.id } }).foundingFather()
  }
  
  module.exports = {
    postedBy,
    foundingFather
  }