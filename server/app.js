const express = require('express')
const path = require('path')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')

// Constants
const PORT = process.env.PORT || 8080

// App
const app = express()

app.use(compression())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
    } else
        next();
});

app.use("/", express.static(path.join(__dirname, "dist")));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.use(cors());
app.listen(PORT);
