
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = ()=> async (dispatch,getState) =>
{
await dispatch(fetchPosts());
console.log(getState().posts);
const userIDs= getState().posts.map(a => a.userId);
var unique = userIDs.filter(function(item, i, ar) {
    return ar.indexOf(item) === i;
  });
  unique.forEach(id =>dispatch(fetchUser(id)));
}

export const fetchPosts = ()=>
{
   return async dispatch =>{
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    });
}
}

export const fetchUser = (id) =>
{
    
    return async dispatch =>
    {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        
        dispatch({type:'FETCH_USER',payload:response.data});

    }
}


