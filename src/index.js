//Requires
const electron = require('electron');
const path = require('path');
const url = require('url');
const config = require('./config/index');

//Global variables/objects
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//Let variables
let window;

//////////////////////////
//Events handeling
//////////////////////////
app.on('ready',
  createWindow
);

app.on('window-all-closed',
  () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }
);

app.on('activate',
  () => {
    if (win === null) {
      createWindow()
    }
  }
);

//////////////////////////
//Utility methods
//////////////////////////
function createWindow(arguments) {
  window = new BrowserWindow();

  //Load window
  window.loadURL(url.format({
    pathname: path.join(__dirname, '../static/index.html'),
    protocol: 'file',
    slashes: true
  }));

  //Enable dev tools, to debug the app
  // TODO: Enable this only if configuraiton (Enviornmental variables) is set to debug mode/development
  if (config.isDebug) {
    window.webContents.openDevTools();
  }

  //Garbage collection  if window is closed
  window.on('closed',
    (arguments) => {
      window = null;
    }
  );

}
