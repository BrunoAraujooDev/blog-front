import { api } from "../lib/axios";


export const getPosts = async () => {

    try {
        const response = await api.get("/posts");

        return  {'response': response.data, 'status': response.status};
    } catch (error) {
        return error;
    }
}

export const getPostById = async (id) => {

    try {
        const response = await api.get(`/posts/${id}`);

        return  {'response': response.data, 'status': response.status};
    } catch (error) {
        return error;
    }
}

export const getCommentsById = async (id) => {
    
    try {
        const response = await api.get(`/posts/${id}/comments`);
        
        return {'response': response.data, 'status': response.status};
    } catch (error) {
        return error;
    }
}

export const getUsers = async () => {

    try {
        const response = await api.get("/users");
        
        return {'response': response.data, 'status': response.status};
    } catch (error) {
        return error;
    }
}

export const getUsersById = async (id) => {
    
    try {
        const response = await api.get(`/users/${id}`);
        
        return {'response': response.data, 'status': response.status};
    } catch (error) {
        return error;
    }
}