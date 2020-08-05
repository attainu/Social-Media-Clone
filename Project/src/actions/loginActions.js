export const userLogin = (username,password,list) =>{
return {
    type:"LOG_IN",
    payload:{
        username,
        password,
        list
    
    }
}
}
export const userLogout = () =>{
    return {
        type:"LOG_OUT"
    }
}
