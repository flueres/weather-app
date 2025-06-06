
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');



function createWindow () {
    const MainWindow = new BrowserWindow({
        title: 'Weather App',
        width : 410,
        height : 470,
        resizable: false,
        titleBarStyle: 'hidden', // Removes the title bar
        frame: false, // Removes the window frame
        

    });

    const startUrl = url.format({
        pathname: path.join (__dirname, 'mainpage.html'),
        protocol: 'file:',
    });

    MainWindow.loadURL(startUrl);   
}

app.on('web-contents-created', (event, contents) => {
  contents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'geolocation') {
      callback(true); // Approve geolocation requests
    } else {
      callback(false);
    }
  });
});
app.whenReady().then(createWindow);


