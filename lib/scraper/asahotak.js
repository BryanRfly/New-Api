const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

function asahotak() {
    return new Promise((resolve, reject) => {
        fetch('https://www.cademedia.com/jawaban-tebak-tebakan-asah-otak')
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res)
                data = []
                go = $('body').find('div.entry-content').text().split('P:')
                for (let i = 2; i < go.length; i++) {
                    x = (go[i].split('J:')[0]).trim()
                    switch (i) {
                        case 229: y = (go[i].split('J:')[1].split('Level')[0].split('Demikian')[0]).trim()
                            break; default: y = (go[i].split('J:')[1].split('Level')[0]).trim()
                    } data.push({ creator: 'Bryanrfly', pertanyaan: x, jawaban: y })
                }
                // save json
                // fs.writeFileSync('./asahotak.json', JSON.stringify(data))
                resolve(data)
            }).catch(reject)
    })
}

module.exports = asahotak
