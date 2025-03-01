__path = process.cwd()
let express = require('express');
let db = require(__path + '/database/db');
try {
let zahirr = db.get("zahirr");
} catch (e) {
	console.log(e)  
}
let creator = "https://instagram.com/bryanrflynsh"
let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch');
let router  = express.Router();
let hxz = require('hxz-api')
let nhentai = require('nhentai-js');
let NanaAPI = require('nana-api')
let ch = require('canvas-hikki')
let kc = require('knights-canvas')
let RA = require('ra-api')
let brainly = require('brainly-scraper')
let nana = new NanaAPI()
let { asahotak, family100, tiktok, surah, pinterest, mediafireDl, doujindesu, pinterestdl, asupantiktok, xnxxsearch, xnxxdl, Shopee, sfilesearch, playstore, jooxdl, igStory, stickerSearch, ramalJodoh, trendtwit} = require('../lib/index')
let options = require(__path + '/lib/options.js');
let { color, bgcolor } = require(__path + '/lib/color.js');
let { getBuffer, fetchJson } = require(__path + '/lib/fetcher.js');
let { pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require('../lib/scraper/photooxy')

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

loghandler = {
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan Parameter URL'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukkan Parameter query'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukkan Parameter Username'
    },
    error: {
        status: 404,
        creator: `${creator}`,
        message: 'An internal error occurred. Please report via WhatsApp wa.me/6287724880504'
    }
}

router.get('/text/styletext', async (req, res, next) => {
  let text = req.query.text
  if (!text) return res.json('Input Parameter Text')
  fetch(encodeURI(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${text}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
       creator: `${creator}`,
       result: result.result
    })
  })
})

router.get('/tools/html-scraper', async (req, res, next) => {
  let url = req.query.url
  if (!url) return res.json(loghandler.noturl)
  axios.get(`${url}`)
  .then(result => {
    res.json(result.data)
  })
  .catch(e => {
    res.json('Internal Server Error!')
    console.log(e)
  })
})

router.get('/sosmed/igstalk', async(req,res, next) => {
  let username = req.query.username
  let cth = 'bryanrflynsh'
  if (!username) return res.json(`Input Username!\n\nExamp: ${exp}`)
  fetch(encodeURI(`https://freerestapi.herokuapp.com/api/igstalk?username=${username}&apikey=freekey`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      creator: `${creator}`,
      username: result.username,
      fullname: result.fullname,
      verif: result.verified,
      video_reel: result.video_count_reel,
      followers: result.followers,
      follow: result.follow,
      bussines: result.is_bussines,
      professional: result.is_professional,
      category: result.category,
      url_profile: result.thumbnail,
      biografi: result.bio
    })
  })
  .catch(e => {
    res.json('Message: Error!')
    console.log(e)
  })
})

router.get('/info/vaksincovid19', async (req, res, next) => {
  fetch(encodeURI('https://vaksincovid19-api.vercel.app/api/vaksin'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/search/sekolah', async (req, res, next) => {
  let jsekolah = req.query.jsekolah
  let page = req.query.page
  if (!jsekolah) return res.json('Input Parameter Jenjang Sekolah! Contoh: SD/SMP/SMA/SMK')
  if (!page) return res.json('Input Parameter Page From 1 - 10')
  fetch(encodeURI(`https://api-sekolah-indonesia.herokuapp.com/sekolah/${jsekolah}?page=${page}&perPage=30`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/search/sekolah-byname', async (req, res, next) => {
  let namasekolah = req.query.namasekolah
  if (!namasekolah) return res.json('Input Parameter Nama sekolah')
  fetch(encodeURI(`https://api-sekolah-indonesia.herokuapp.com/sekolah/s?sekolah=${namasekolah}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(data)
  })
  .catch(e => {
    res.json('Internal Sever Error!')
  })
})

router.get('/edukasi/translate', async (req, res, next) => {
     let text = req.query.text
     let lang = req.query.lang
fetch(encodeURI(`https://api-translate.azharimm.site/translate?engine=google&text=${text}&to=${lang}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/search/resepmasakan', async (req, res, next) => {
  let query = req.query.query
  if (!query) return res.json('Input Parameter Query')
  fetch(encodeURI(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${query}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/info/detail-resep', async (req, res, next) => {
  let key = req.query.key
  if (!key) return res.json('Input Parameter Key Resep Masakan')
  fetch(encodeURI(`https://masak-apa-tomorisakura.vercel.app/api/recipe/:${key}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/info/allfootballlang', async (req, res, next) => {
  fetch(encodeURI('https://api-football-standings.azharimm.site/leagues'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/info/detailleague', async(req, res, next) => {
  let league = req.quey.league
  if (!league) return res.json(loghandler.notuquery)
  fefch(encodeURI(`https://api-football-standings.azharimm.site/leagues/${league}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/pray/doaseharihari', async (req, res, next) => {
  fetch(encodeURI('https://doa-doa-api-ahmadramadhan.fly.dev/api'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/pray/caridoa', async (req, res, next) => {
  let doa = req.query.doa
  if (!doa) return res.json('Input Parameter Doa Yang Mau Di Cari!')
  fetch(encodeURI(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${doa}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
   .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/pray/randomdoa', async (req, res, next) => {
  fetch(encodeURI('https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
   .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/pray/allsurah', async (req, res, next) => {
  fetch(encodeURI('https://api.npoint.io/99c279bb173a6e28359c/data'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error')
  })
})

router.get('/info/resep-hariini', async (req, res, next) => {
  fetch(encodeURI('https://masak-apa-tomorisakura.vercel.app/api/recipes'))
  .then(response => response.json())
  .then(data => { 
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/info/resep-bypage', async (req, res, next) => {
  let page = req.query.page
  if (!page) return res.json('Input Parameter Page!')
  fetch(encodeURI(`https://masak-apa-tomorisakura.vercel.app/api/recipes/:${page}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json(result)
  })
  .catch(e => {
    res.json('Internal Server Error!')
  })
})

router.get('/info/cuaca', async (req, res, next) => {
  let provinsi = req.query.provinsi
  let kabupaten = req.query.kabupaten
  if (!provinsi) return res.json('Please Input Parameter Provinsi!')
  if (!kabupaten) return res.json('Please Input Parameter Kabupaten!')
  fetch(encodeURI(`https://cuaca-gempa-rest-api.vercel.app/weather/${provinsi}/${kabupaten}`))
  
   .then(response => response.json())
   .then(data => {
     var result = data;
     res.json(result)
   })
   .catch(e => {
     res.json(loghandler.error)
   })
})

router.get('/downloader/stickpackdl', async (req, res, next) => {
          let url = req.query.url
          if (!url) return res.json('Input Parameter Url!')
          fetch(encodeURI(`https://tyz-api.herokuapp.com/downloader/stickerpack?link=${url}`))
          .then(data => {
          var result = data;
          res.json(result)
     })
})
router.get('/search/stickersearch', async (req, res, next) => {
          let query = req.query.query
          if(!query) return res.json(loghandler.notquery)
          stickerSearch(query)
          .then(result => {
           res.json(result)
        })
 })
     
router.get('/primbon/ramalJodoh', async (req, res, next) => {
         let nama = req.query.nama
         let pasangan = req.query.pasangan
         if (!nama) return res.json('Input Parameter Nama!')
         if (!pasangan) return res.json('Input Parameter Nama Pasangan!')
         ramalJodoh(nama, pasangan)
         .then(result => {
          res.json(result)
       })
})

router.get('/search/trendtwit', async (req, res, next) => {
          let daerah = req.query.daerah
          if (!daerah) return res.json('Input Parameter Daerah!')
          trendtwit(daerah)
          .then(result => {
          res.json(result)
       })
})

router.get('/search/igStory', async (req, res, next) => {
         let username = req.query.username
         if (!username) return res.json(loghandler.notusername)
         igStory(username)
         .then(result => {
          res.json(result)
        })
   })

router.get('/downloader/jooxdl', async(req, res, next) => {
         let url = req.query.url
         if (!url) return res.json(loghandler.noturl)
         jooxdl(url)
         .then(result => {
          res.json(result)
         })
    })
router.get('/skrinsotweb', async(req, res) => {
  var url = req.query.url
  if (!url) return res.json(loghandler.notquery)
    const data = await getBuffer(`https://rya-kun.herokuapp.com/api/ssweb?link=${url}`)
    await fs.writeFileSync(__path +'/tmp/ssweb.png', data)
    await res.sendFile(__path +'/tmp/ssweb.png')
})


router.get('/search/shopee', async (req, res, next) => {
           let query = req.query.query
           let limit = req.query.limit
           if (!query) return res.json(loghandler.notquery)
           if (!limit) return res.json('Input Limit Pencarian')
           Shopee(query, limit)
           .then(result => {
            res.json(result)
        })
 })
router.get('/search/xnxxsearch', async (req, res, next) => {
            let query = req.query.query
            if (!query) return res.json(loghandler.notquery)
            xnxxsearch(query)
            .then(result => {
             res.json(result)
        })
 })
router.get('/download/xnxxdl', async (req, res, next) => {
            let url = req.query.url
            if (!url) return res.json(loghandler.noturl)
            xnxxdl(url)
            .then(result => {
             res.json(result)
        })
 })
router.get('/game/asahotak', async (req, res, next) => {
          asahotak()
          .then(result => {
           res.json(result)
          })
      })
router.get('/game/family100', async (req, res, next) => {
          family100()
          .then(result => {
           res.json(result)
          })
      })

router.get('/asupantt', async (req, res, next) => {
          let username = req.query.username
          if (!username) return res.json('Message: Input Parameter Username\nCr: Bryanrfly')
          asupantiktok(username)
          .then(result => {
          res.json(result)
       })
         .catch(e => {
          res.json(loghandler.error)
      })
 })
 
router.get('/search/joox', async (req, res, next) => {
  let query = req.query.query
  if (!query) return res.json(loghandler.error)
  fetch(encodeURI(`https://vinz12.herokuapp.com/api/joox?q=${query}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: 
      {
        judul: result.result.album,
        album: result.result.judul,
        publik: result.result.dipublukasikan,
       thumbnail: result.result.thumb,
       link_audio: result.result.mp3
      }
    })
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

 router.get('/pray/surah', async (req, res, next) => {
   let nomor = req.query.nomor
   if (!nomor) return res.json(loghandler.notquery)
   surah(nomor)
   .then(result => {
     res.json(result)
   })
   .catch(e => {
     res.json(loghandler.error)
   })
 })

router.get('/search/jsholat', async (req, res, next) => {
  let daerah = req.query.daerah
  if (!daerah) return res.json('Input Parameter Daerah!')
  fetch(encodeURI(`https://vinz12.herokuapp.com/api/jadwalshalat?q=${daerah}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({ 
      status: true,
      code: 200,
      creator: `${creator}`,
      result: 
      {
       isya: result.result.isha,
       subuh: result.result.subuh,
       terbit: result.result.sunrise,
       dzuhur: result.result.dzuhur,
       ashar: result.result.ashar,
       terbenam: result.result.sunset,
       maghrib: result.result.maghrib,
      }
    })
  })
  .catch(e => {
    res.json('Sorry Error')
  })
})

router.get('/anime/nekonime', async (req, res, next) => {
  fetch(encodeURI('https://vinz12.herokuapp.com/api/nekonime'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      creator:`${creator}`,
      image_url: result
    })
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/anime/randaime', async (req, res, next) => {
  fetch(encodeURI('https://vinz12.herokuapp.com/api/randonanime'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      creator:`${creator}`,
      image_url: result
    })
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})

router.get('/anime/randhentai', async (req, res, next) => {
  fetch(encodeURI('https://vinz12.herokuapp.com/api/hentai'))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      creator:`${creator}`,
      image_url: result
    })
  })
  .catch(e => {
    res.json(loghandler.error)
  })
})


router.get('/canvas/welcome', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
	    namagc = req.query.namagc,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    
let Welcome = await new ch.Welcome2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setGroupname(namagc)
.setMember(member)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/database/welcome.png', data)
  res.sendFile(__path+'/database/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/goodbye', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
let Goodbye = await new ch.Goodbye2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setMember(member)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/database/goodbye.png', data)
  res.sendFile(__path+'/database/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/promote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Promote = await new kc.Promote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Promote.toBuffer();
  await fs.writeFileSync(__path +'/database/promote.png', data)
  res.sendFile(__path+'/database/promote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/demote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Demote = await new kc.Demote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Demote.toBuffer();
  await fs.writeFileSync(__path +'/database/demote.png', data)
  res.sendFile(__path+'/database/demote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/level', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            logorank = req.query.logorank   
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!logorank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter logorank"})
    
var level = await new ch.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${logorank}`) 
    .toAttachment();
  data = level.toBuffer();
  await fs.writeFileSync(__path +'/database/rank.png', data)
  res.sendFile(__path +'/database/rank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/canvas/levelup', async (req, res, next) => {
            pp = req.query.pp
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var levelup = await new ch.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/database/sup.png', data)
  res.sendFile(__path +'/database/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gfx1', async (req, res) => {
            nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var gfx1 = await new ch.Gfx1()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = gfx1.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx1.png', data)
  res.sendFile(__path +'/database/gfx1.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx2', async (req, res) => {
        nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx2()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx2.png', data)
  res.sendFile(__path +'/database/gfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx3', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx3()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx3.png', data)
  res.sendFile(__path +'/database/gfx3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx4', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx4()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx5', async (req, res) => {
            text = req.query.teks

    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx5()
    .setText(`${text}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx1', async (req, res) => {
            text = req.query.teks,
            bg = req.query.bg
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
     if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx()
    .setText(text)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx.png', data)
  res.sendFile(__path +'/database/cgfx.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx2', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2,
            bg = req.query.bg
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx2()
    .setText1(text1)
    .setText2(text2)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx2.png', data)
  res.sendFile(__path +'/database/cgfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gura', async (req, res) => {
            teks = req.query.teks
    if (!teks) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
var gura = await new ch.Gura()
    .setName(teks) 
    .toAttachment();
  data = gura.toBuffer();
  await fs.writeFileSync(__path +'/database/Gura.png', data)
  res.sendFile(__path +'/database/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/spongebob', async (req, res) => {
        image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var burn = await new ch.Burn()
    .setAvatar(image)
    .toAttachment();
  
  data = burn.toBuffer();
  await fs.writeFileSync(__path +'/database/spongebob.png', data)
  res.sendFile(__path +'/database/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/patrick', async (req, res) => {
           image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var patrick = await new ch.Patrick()
    .setAvatar(image)
    .toAttachment();
  
  data = patrick.toBuffer();
  await fs.writeFileSync(__path +'/database/patrick.png', data)
  res.sendFile(__path +'/database/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/instagram', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username,
        post = req.query.post,
        followers = req.query.followers,
        following = req.query.following
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    if (!post) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter post"})
    if (!followers) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter followers"})
    if (!following) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter following"})
var Ig = await new ch.Ig()
    .setAvatar(pp)
    .setUsername(username)
    .setPost(post)
    .setFollowers(followers)
    .setFollowing(following)
    .toAttachment();
  data = Ig.toBuffer();
  await fs.writeFileSync(__path +'/database/instagram.png', data)
  res.sendFile(__path +'/database/instagram.png')
  .catch(e => {
            res.json(loghandler.error)
})
})
router.get('/canvas/xnxx', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    var Xnxx = await new ch.Xnxx()
    .setImage(pp)
    .setTitle(username)
    .toAttachment();
  data = Xnxx.toBuffer();
  await fs.writeFileSync(__path +'/database/xnxx.png', data)
  res.sendFile(__path +'/database/xnxx.png')
  .catch(e => {
            res.json(loghandler.error)
})
})

// ADD FEATURE
       router.get('/wikipedia', async(req, res, next) => {
          query = req.query.query
          let ptl = await pinterest(query)
          let hss = ptl[Math.floor(Math.random() * (ptl.length))]
          if (!query) return res.json(loghandler.notquery)
          fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/search/wikipedia?apikey=GRATISAN&q=${query}`))
          .then(response => response.json())
          .then(data => {
          var result = data;
          res.json({ 
               status: true,
               code: 200,
               creator: `${creator}`,
               image: hss,
               quest: `${query}`,
               answ: result.result.result
               })
          })
          .catch(e => {
          res.json(loghandler.error)
          })
        })
       router.get('/infonpm', async (req, res, next) => {
            query = req.query.query,
            host = req.hostname
       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `Nothing`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
         
         // Random Text
            router.get('/randquot/katailham', async (req, res, next) => {
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/random/katailham?apikey=GRATISAN`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                katanya: result.quote
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })
        router.get('/randquot/quotesdilan', async (req, res, next) => {
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/random/bacotandilan?apikey=GRATISAN`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                katanya: result.quote
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })    
        router.get('/randquot/quotesanime', async (req, res, next) => {
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/random/quotesanime?apikey=GRATISAN`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                katanya: result.quote
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })    
       router.get('/randquot/kata', async (req, res, next) => {
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/random/quotesad?apikey=GRATISAN`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                katanya: result.quote
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })   
       router.get('/randquot/quotesislam', async (req, res, next) => {
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/random/quotesislami?apikey=GRATISAN`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                result: result.quote
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })   
       router.get('/edukasi/brainly', async (req, res, next) => {
          let query = req.query.query
          if (!query) return res.json(loghandler.notquery)
          brainly(query)
          .then(res => {
          res.json({
             status: true,
             code: 200,
             creator: creator,
             res
          })
        })
         .catch(e => {
          res.json(loghandler.error)
          res.json(e)
     })
})
         
           //PRIMBON
              router.get('/artinama', async (req, res, next) => {
              let query = req.query.query
              if (!query) return res.json(loghandler.notquery)
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/primbon/artinama?apikey=GRATISAN&query=${query}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                result:
                 {
                nama: query,
                arti: result.result
                },
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })    
         router.get('/tafsirmimpi', async (req, res, next) => {
              let query = req.query.query
              if (!query) return res.json(loghandler.notquery)
            fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/primbon/artimimpi?apikey=GRATISAN&query=${query}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
            res.json({
                status: true,
                code: 200,
                creator: `${creator}`,
                hasil:
                 {
                mimpi: query,
                arti: result.result
                },
               })
             })
            .catch(e => {
         	res.json(loghandler.error)
        })
      })    
  
         // Edukasi Feature
          router.get('/kbbi', async(req, res, next) => {
          query = req.query.query
          if (!query) return res.json(loghandler.notquery)
          fetch(encodeURI(`https://api.xteam.xyz/kbbi?kata=${query}&APIKEY=unravelB`))
          .then(response => response.json())
          .then(data => {
          var result = data;
          res.json({
               status: true,
               code: 200,
               quest: result.message.word,
               answ: result.message.list
               })
          })
                   .catch(e => {
         	res.json(loghandler.error)
        })
      })
      // Searching
       router.get('/search/wattpad', async(req, res, next) => {
       let query = req.query.query
       if (!query) return res.json(loghandler.notquery)
        hxz.wattpad(query)
        .then(result => {
         res.json({
         result
     })
   })
})
       router.get('/info/covid', async(req, res, next) => {
       hxz.covid()
       .then(result => {
        res.json({
         result
       })
    })
})
       router.get('/search/ghstalk', async(req, res, next) => {
  let query = req.query.query
  if (!query) return res.json(loghandler.notquery)
  fetch(encodeURI(`https://api.github.com/users/${query}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result
    })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  })
})
router.get('/search/loker', async(req, res, next) => {
  let query = req.query.query
  if (!query) return res.json(loghandler.notquery)
  fetch(encodeURI(`https://abdillah-api.herokuapp.com/api/search/infoloker?apikey=GRATISAN&query=${query}`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      hasil: result.result
    })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  })
})
      router.get('/search/playstore', async(req, res, next) => {
  let query = req.query.query
  if (!query) return res.json(loghandler.notquery)
  fetch(encodeURI(`https://hardianto-chan.herokuapp.com/api/info/playstore?query=${query}&apikey=hardianto`))
  .then(response => response.json())
  .then(data => {
    var result = data;
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      hasil: result.result
      })
    .catch(e => {
      console.log(e)
      res.json(loghandler.error)
    })
  })
})
      router.get('/search/gcwa', async(req, res, next) => {
       let query = req.query.query
       if (!query) return res.json(loghandler.notquery)
       hxz.linkwa(query)
       .then(result => {
         res.json({
          status: true,
          code: 200,
          creator: `${creator}`,
          result
          })
        })
       })
     // Downloader
    router.get('/tiktok', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
	      let result = await tiktok(url)
	      try {
		  res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	   } catch(err) {
		    console.log(err)
		    res.json(loghandler.error)
	     }
    })
router.get('/telesticker', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
let packName = url.replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror

    let json = await gas.json()
    const result = []
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()
   result.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
  
    }
res.json({
  status: 200,
  creator: creator,
  result: result
})
    })
    
    router.get('/igdl', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.igdl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/mediafire', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await mediafireDl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/youtube', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.youtube(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
     })
     router.get('/twitter', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.twitter(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
     })

      // Searching
      router.get('/pinterest', async(req, res) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let result = await pinterest(query)
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
      })
router.get('/cerpen', async(req, res) => {
RA.RandomCerpen().then(respon => {
     res.json(respon)
})
})
router.get('/asupan', async (req, res) => {
     
       fetch(encodeURI(`https://raw.githubusercontent.com/BryanRfly/Random/main/P.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
              status: 200,
             	creator: creator,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
      router.get('/google', async (req, res, next) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let google = require('google-it')
	      let result = google({'query': query}).then(result => {
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
        .catch(e => {
         	 res.json(loghandler.error)
           })
       })
   })

      router.get('/nHentaiSearch', async (req, res) => {
            let query = req.query.query
            let hasil = await nana.search(query)
            let result = hasil.results
		    res.json({
                 status: 200,
                 creator: `${creator}`,
                 result
            })
       })
       router.get('/doujindesuSearch', async (req, res) => {
             let query = req.query.query
             let result = await doujindesu(query)
             res.json({
                  status: 200,
                  creator: `${creator}`,
                  result
              })
         })
         
         // Random Image
          router.get('/randomimage/waifu', async (req, res, next) => {
              fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
             .then(response => response.json())
             .then(async data => {
                  let result = data;
                  let buffer = await fetch(data.url)
                  res.type('png')
                  res.send(await buffer.buffer())
              })
           .catch(e => {
            	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/neko', async (req, res, next) => {
            fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
           .then(response => response.json())
           .then(async data => {
                let result = data;
                let buffer = await fetch(data.url)
                res.type('png')
                res.send(await buffer.buffer())
            })
           .catch(e => {
           	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/husbu', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/loli', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/milf', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/cosplay', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
            let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
     
 router.use(function (req, res) {
     res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
