let data = {
    username : "",
    password: ""
}
handleClick = () =>{
    console.log(data)
}

handleChangeUsername = () => {
    let username = document.getElementById("username").value;
    setData({username})
}

handleChangePassword = () => {
    let password = document.getElementById("password").value;
    setData({password})
}

setData = (state) => {
    let keys = Object.keys(state);
    keys.map((k)=>{
        data[k] = state[k]
    })
}
