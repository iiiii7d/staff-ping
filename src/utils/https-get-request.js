/**
 * 
 * @param {string} url The URL to query
 */
 function request(url) {
    const https = require('follow-redirects').https


    return new Promise((resolve, reject) => {
        const req = https.get(url, res => {

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
    })

}


module.exports = request;