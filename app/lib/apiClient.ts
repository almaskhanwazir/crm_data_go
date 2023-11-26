// api/apiClient.ts

import axios, { AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: process.env.Base_URL,
})

export const get = async (
  url: string,
  params?: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.get(url, { params })
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const post = async (
  url: string,
  data: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.post(url, data)
  } catch (error) {
    handleError(error)
    throw error
  }  
}

export const put = async (
  url: string,
  data: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.put(url, data)
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const deleteRequest = async (url: string): Promise<AxiosResponse> => {
  try {
    return await apiClient.delete(url)
  } catch (error) {
    handleError(error)
    throw error
  }
}

function handleError(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else {
      console.log(error.message)
    }
  } else {
    console.log(error)
  }
}

export const ApiUrls = {
  TblDataAPI: {
    getTblData: `https://swapi.py4e.com/api/people/?search=signal`,
  }


}



// // GET request
// const response = await get('/users'); 

// // POST request 
// await post('/users', { name: 'John' });

// // PUT request
// await put('/users/123', { name: 'Jane' }); 

// // DELETE request  
// await deleteRequest('/users/123');