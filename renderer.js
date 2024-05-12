const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
const func = async () => {
    const response = await window.versions.ping()
    const msg = document.getElementById('msg')
    msg.innerText = `ping response : ${response}`
    console.log(response)
}

func()