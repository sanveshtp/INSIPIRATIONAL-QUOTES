const url = '	https://api.adviceslip.com/advice'
const url1 = 'https://api.quotable.io/quotes/random'
const url2 = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'
const url3 = 'https://stoic.tekloon.net/stoic-quote'
const urlm = 'https://api.gameofthronesquotes.xyz/v1/random'
const d3 = document.getElementById('d33')
const but = document.getElementById("cngbut")
const d1 = document.getElementById('d1')
const quo = document.getElementById('quo')
let ran;

but.addEventListener("click", a)

async function a() {

    let x = await fetch(url)
    let data = await x.json()
    let fin = String(data.slip.advice).toUpperCase() + '<p>-SANVESH</p>'

    let n = await fetch(urlm)
    let data2 = await n.json()
    let fin2 = `${data2.sentence.toUpperCase()}<p>-${data2.character.name}</p>`

    let m = await fetch(url1)
    let data3 = await m.json()
    let fin3 = `${data3[0].content}<p>-${data3[0].author}</p>`


    let xx = await fetch(url3)
    let data4 = await xx.json()
    console.log(data3[0]);
    let fin4 = `${data3[0].content}<p>-${data3[0].author}</p>`

    ran = [fin, fin2, fin3, fin4]
    quo.innerHTML = ran[Math.floor(Math.random() * 4)]

    let clr = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 3)
    d1.style.backgroundColor = clr

}







