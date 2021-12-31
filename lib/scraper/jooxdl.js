const axios = require('axios')

function jooxdl (url) {
    const URL = url.replace('https://www.joox.com/id/single/', '')
    return new Promise((resolve, reject) => {
        axios.get('http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid='+URL, {
            headers: {
                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
            }
            }).then(res => {
                const result = JSON.parse(res.data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                const hasil = {
                    status: true,
                    code: 200,
                    lagu: result.msong,
                    album: result.malbum,
                    penyanyi: result.msinger,
                    publish: result.public_time,
                    img: result.imgSrc,
                    mp3: result.mp3Url
                }
                resolve(hasil)
            }).catch(reject)
    })
}

module.exports = jooxdl
