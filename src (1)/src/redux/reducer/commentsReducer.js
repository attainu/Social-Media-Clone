// const initialState= {
//     comments:[]
// }

// const commentsReducer = (state=initialState, action) =>{
//     switch(action.type){
//         case "CREATE_COMMENTS":
//             console.log("commented",action.comment)
//             return state;
//         case "CREATE_COMMENTS_ERROR" :
//             console.log("Comments error",action.err) 
//             return state;
//             default:
//                 return state   
//     }
// }

// export default commentsReducer

const initialState = {  
    comments: []  
  };  
  const commentsReducer = (state = initialState, action) => {  
    switch (action.type) {  
      case "ADD_COMMENT":  
        return { ...state,comments:[...state.comments,action.payload]};  
      default:  
        return state;  
    }  
  };  
  export default commentsReducer; 