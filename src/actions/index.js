import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creator
export const fetchPost = async () => {
    const response = await jsonPlaceholder.get('/posts')
    return {
        type: 'FETCH_POSTS',
        playload: response
    } ;
};