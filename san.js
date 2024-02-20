const url = '	https://api.adviceslip.com/advice'
const url1 = 'https://api.quotable.io/quotes/random'
const quo = document.getElementById('quo')
const d3 = document.getElementById('d33')
const but = document.getElementById("cngbut")
const d1 = document.getElementById('d1')

but.addEventListener("click", a)

async function a() {
    let x = await fetch(url)
    let data = await x.json()
    // console.log(data.slip.advice);
    quo.innerHTML = String(data.slip.advice).toUpperCase() + '<div id="auth"><p>-SANVESH</p></div > '
    let clr = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 3)
    d1.style.backgroundColor = clr
    console.log(clr);
}

a()



