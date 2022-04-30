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

// ==================================

class Header2 extends Header {
  constructor(h1, h2, hero) {
    super(h1, h2) // наследует все свойства и методы предыдущего обьекта с переменными h1 и h2
    this.hero = hero
  }

}

const header = new Header('Hello', 'My site')
header.render('root')
console.log(header)

const header2 = new Header2('Hi', 'Folks, you are ok!', 'Man, you look cool')
header2.render('root2')
console.log(header2)