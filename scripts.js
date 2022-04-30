class Header {
  constructor(h1, h2) {
    this.h1 = h1
    this.h2 = h2
  }

  render(x) {
    let out = ''
    out += `<h1>${this.h1}</h1>`
    out += `<h2>${this.h2}</h2>`
    document.getElementById(x).innerHTML = out
  }
}

const header = new Header('Hello', 'My site')
header.render('root')
console.log(header)