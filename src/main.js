import './style.css'
import { setupCounter } from './counter.js'
import myHtmlPage from './my-html-page.md'

document.querySelector('#app').innerHTML = `
  <div>
      ${myHtmlPage}
  </div>
`

setupCounter(document.querySelector('#counter'))
