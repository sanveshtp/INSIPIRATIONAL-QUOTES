const url = 'https://api.adviceslip.com/advice'
const url1 = 'https://api.quotable.io/quotes/random'
const url3 = 'https://stoic.tekloon.net/stoic-quote'
const urlm = 'https://api.gameofthronesquotes.xyz/v1/random'
const d3 = document.getElementById('d33')
const but = document.getElementById("cngbut")
const d1 = document.getElementById('d1')
const quo = document.getElementById('quo')
let ran;

but.addEventListener("click", a)

async function a() {
    d1.style.backgroundColor = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
    let jsn = (Math.floor(Math.random() * 4))
    switch (jsn) {
        case 0:
            let x = await fetch(url)
            let data = await x.json()
            quo.innerHTML = String(data.slip.advice).toUpperCase() + '<p>-SANVESH</p>'
            break
        case 1:
            let n = await fetch(urlm)
            let data2 = await n.json()
            quo.innerHTML = `${data2.sentence.toUpperCase()}<p>-${data2.character.name}</p>`
            break

        case 2:
            let m = await fetch(url1)
            let data3 = await m.json()
            quo.innerHTML = `${data3[0].content.toUpperCase()}<p>-${data3[0].author}</p>`
            break

        case 3:
            let xx = await fetch(url3)
            let data4 = await xx.json()
            quo.innerHTML = `${data4.quote.toUpperCase()}<p>-${data4.author}</p>`
            break
    }
}

a()







