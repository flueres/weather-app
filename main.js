
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');



function createWindow () {
    const MainWindow = new BrowserWindow({
        title: 'Weather App',
        width : 410,
        height : 470,

    });

    const startUrl = url.format({
        pathname: path.join (__dirname, 'mainpage.html'),
        protocol: 'file:',
    });

    MainWindow.loadURL(startUrl);
}

app.whenReady().then(createWindow);