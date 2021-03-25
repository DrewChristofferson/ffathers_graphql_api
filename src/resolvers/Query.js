
function listFoundingFathers(parent, args, context, info) {
    return context.prisma.foundingFather.findMany()
  }

async function listQuotes(parent, args, context, info) {
    const where = args.filter
        ? {
            classPeriod: { in: args.filter } 
        }
        : {}

    const quotes = await context.prisma.quote.findMany({
        where,
    })

    return quotes
  }
  
  module.exports = {
    listFoundingFathers,
    listQuotes,
  }