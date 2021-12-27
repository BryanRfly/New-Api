const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

function family100() {
    return new Promise((resolve, reject) => {
        fetch('https://teknologital.com/kunci-jawaban-ica-ica')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('div.entry-content').text().split('Jawaban :')
                for (let i = 1; i < go.length; i++) {
                    y = (go[i - 1].split('\n')[1]).trim()
                    z = (go[i].split('\n')[0]).trim()
                    if (i !== 1) {
                        data.push({ pertanyaan: y, jawaban: z })
                    }
                }
                // save json
                // fs.writeFileSync('./ica.json', JSON.stringify(data))
                resolve(data)
            }).catch(reject)
    })
}

module.exports = family100
