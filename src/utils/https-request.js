/**
 * 
 * @param {string} hostname The host name (EG script.google.com)
 * @param {string} path The path (EG /apps/a)
 * @param {object} data 
 */
function request(hostname, path, data) {
    const https = require('follow-redirects').https
    data = JSON.stringify(data)

    const options = {
        hostname: hostname,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {

            res.setEncoding('utf-8')

            res.on('data', d => {
                try {
                    resolve(JSON.parse(d))
                } catch (err) {
                    resolve(null)
                }
            })

        })

        req.on('error', error => {
            reject(error)
        })

        req.write(data)
        req.end()
    })

}


module.exports = request;