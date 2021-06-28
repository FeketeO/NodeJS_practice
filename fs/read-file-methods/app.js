const { readFileSyncLog, readFileLog } = require('./utils')

readFileSyncLog('./fs/read-file-methods/mese.txt', { encoding: 'utf8' })

readFileLog('./fs/read-file-methods/mese.txt', { encoding: 'utf8' })
