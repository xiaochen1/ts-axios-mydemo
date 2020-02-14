document.body.innerHTML = "<h1>test ggedddd</h1>"

import axios from  '../../src/index'
axios({
  url: '/simple/get',
  method: 'get',
  params: {
    a: 1,
    b: 2
  }
})