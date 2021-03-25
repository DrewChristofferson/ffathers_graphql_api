function quotes(parent, args, context) {
    return context.prisma.foundingFather.findUnique({ where: { id: parent.id } }).quotes()
  }
  
  module.exports = {
    // links,
    quotes
  }