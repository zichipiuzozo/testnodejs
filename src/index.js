const express = require('express')
var hbs = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

//connect to DB
db.connect()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'src/public')))

//http logger
app.use(morgan('combined'))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//template-engine
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b
    }
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources', 'views'))

route(app)

app.listen(3000)
