const { app, BrowserWindow, ipcMain } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

ipcMain.on('re-render', () => {
    win.loadFile('index.html')
})

app.whenReady().then(() => {
    createWindow();
})
