const {app, Menu, Tray} = require('electron')

let tray = null
let appIcon = 'trafficlight-green.png'

app.dock.hide()

var getIcon = function () {
  if (appIcon === 'trafficlight-green.png') {
    appIcon = 'trafficlight-red.png'
  } else {
    appIcon = 'trafficlight-green.png'
  }
  return appIcon
}

app.on('ready', () => {
  tray = new Tray(appIcon)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
    { label: 'Logging', type: 'radio', click () { console.log('clicked the button') } },
    { label: 'Change', type: 'radio', click () { tray.setImage(getIcon()) } },
    { role: 'quit' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
