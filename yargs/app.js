const yargs = require('yargs')
let movies = require('./database/movies')

yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(movies)

  })
  .command({
    command: 'find',
    describe: 'Find a movies by ID',
    builder: {
      id: {
        alias: 'i',
        describe: 'Movie ID',
        type: 'number',
        demandOption: true
      }
    },
    handler: ({ id }) => console.log(movies.find(movie => movie.id === id))

  })
  .command({
    command: 'create',
    describe: 'Movie ID',
    builder: {
      producer: {
        alias: 'p',
        describe: 'Film producer',
        type: 'string',
        demandOption: true
      },
      title: {
        alias: 't',
        describe: 'Film title',
        type: 'string',
        demandOption: true
      }
    },
    handler: ({ title, producer }) => {
      const sortedMovies = [...movies].sort((a, b) => a.id > b.id)
      const id = sortedMovies[sortedMovies.lenght - 1].id + 1
      const movie = { id, producer, title }
      movies = [...movies, movie]
      console.log(movies.find(movie => movie.id === id))
    }

  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
