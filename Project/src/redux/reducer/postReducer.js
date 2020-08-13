

const initState = {
    posts :[
        {id:"1",image:"https://picsum.photos/id/237/200/300",caption:"beautiful",author:"Karthik"},
        {id:"2",image:"https://picsum.photos/id/237/200/300",caption:"beautifulll",author:"Karthik"},
        {id:"3",image:"https://picsum.photos/id/237/200/300",caption:"beautifulyy",author:"Karthik"},
        {id:"4",image:"https://picsum.photos/id/237/200/300",caption:"beautifulyy",author:"Karthik"},
    ]
}

const postReducer = (state=initState,action) =>{
    switch(action.type){
        case "CREATE_POST":
            console.log("Post Created", action.post)
            alert("Post Created")
            return state;
        case "CREATE_POST_ERROR":
            console.log("create post error",action.err)   
            return state;
            default:
                return state 
    }

}
export default postReducer;