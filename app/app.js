const fs = require('fs')
const exec = require('child_process').exec
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

let appVersion = 'v.0.0.3'

// exec("/sbin/ip route|awk '/default/ { print $3 }'", (error, stdout, stderr) => {
//     f_db.hostIP = stdout.replace(/[^0-9\.]/gi,'')
//     f_db.connectToDB().then(() => {
//         require('./models')()
//         require('./cron')
//     })
// })

var app = express()

app.use(helmet({
    frameguard: false
}))

function allowCrossDomain(req, res, next) {
    let originHost = req.headers.origin || req.headers.host
    res.header('Access-Control-Allow-Origin', originHost)
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}

app.use(allowCrossDomain)
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('*', (req, res) => {
    fs.readFile('./frontend/templates/index.html', 'utf8', (err, output) => {
        output = output.replace(/\<script backend\-env\>\<\/script\>/gi, '<script>var appVersion = "' + appVersion + '";</script>')
        output = output.replace(/\?version\=1/gi, `?version=${new Date().getTime()}`)
        res.send(output)
    })
})

exec('cd ./frontend && gulp', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    console.log(`stdout: ${stdout}`);

    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
});

app.listen(process.env.PORT || 8080)