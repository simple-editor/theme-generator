//Requires
const electron = require('electron');
const path = require('path');
const url = require('url');
const config = require('./config/index');

//Global variables/objects
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//Let variables
let mainWindow;

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
    if (mainWindow === null) {
      createWindow()
    }
  }
);

//////////////////////////
//Utility methods
//////////////////////////
function createWindow(arguments) {
  mainWindow = new BrowserWindow();

  //Load window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './windows/index/index.html'),
    protocol: 'file',
    slashes: true
  }));

  //Enable dev tools, to debug the app
  if (config.app.isDebug) {
    mainWindow.webContents.openDevTools();
  }

  //Garbage collection  if window is closed
  mainWindow.on('closed',
    (arguments) => {
      mainWindow = null;
    }
  );

}
