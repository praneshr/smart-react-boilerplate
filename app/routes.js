import page from 'page'

import Render from './render'

const render = new Render(document.getElementById('app'))

page('/test', (context) => {
  console.log('here');
  render.renderPage({ context, component: 'about' })
})

export default page
