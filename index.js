const {app, Menu, Tray} = require('electron')

let tray = null

app.dock.hide()

app.on('ready', () => {
  tray = new Tray('trafficlight-green.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
    {label: 'Logging', type: 'radio', click () { console.log('clicked the button') } },
    {label: 'Change', type: 'radio', click () { tray.setImage('trafficlight-red.png') } },
    {role: 'quit'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
