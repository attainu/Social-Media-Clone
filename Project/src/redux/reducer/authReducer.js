
const initState = {
    authError : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){

        case "LOGIN_ERROR":
            console.log("loggin error")
            return {
                 ...state,
                authError:"Login failed"
                } 
      
        case "LOGIN_SUCCESS" :
            console.log("login success")
            alert("login success")
            return {
                ...state,
                authError:null
              
                
            } 
          
            
        case "SIGNOUT_SUCCESS" :
            alert ("sign out successful ")      
            console.log ("sign out successful ") 
        break;    
           
            default:
            return state; 
           
            
               
            
    }
}

export default authReducer;