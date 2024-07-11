import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

console.log('app.tmpPath:', app.tmpPath('db.sqlite3'))
console.log('evn', process.env.NODE_ENV)

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.tmpPath('db.sqlite3'),
        debug: true,
        // mode: '',
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
