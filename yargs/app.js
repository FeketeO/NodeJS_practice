const yargs = require('yargs')
const {
  getAllMovies,
  findMovieById,
  createMovie,
  editMovie,
  removeMovie
} = require('./movies_service')
const {
  id,
  producer,
  title
} = require('./option')

yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(getAllMovies())

  })
  .command({
    command: 'find',
    describe: 'Find a movies by ID',
    builder: { id },
    handler: (args) =>
      console.log(findMovieById(args.id))

  })
  .command({
    command: 'create',
    describe: 'Movie ID',
    builder: { producer, title },
    handler: (args) => {
      console.log(createMovie(args))
    }
  })
  .command({
    command: 'edit',
    describe: 'Edit a movie',
    builder: { id, producer, title },
    handler: (args) => {
      console.log(editMovie(args))
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a movie',
    builder: { id },
    handler: (args) => {
      removeMovie(args.id)
      console.log('deleted')
    }
  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
