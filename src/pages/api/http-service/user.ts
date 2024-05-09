import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiURL } from '../api';

declare interface Error{
  message: string,
  title: string
}

declare interface ValidationError {
  errors: Error[]
}

export const login = async (loginData: any) => {
  try {
    const response = await axios.post(`${apiURL}/token`, loginData)
    return response.data;
  } catch (e) {
    if (axios.isAxiosError<ValidationError, Error[]>(e))  {
      if(e.response?.status == 400 && e.response?.data.errors[0].message == 'Email ou senha incorretos'){
        console.error('Email e/ou senha incorretos');
      }
    } else {
      toast.error('Erro ao realizar login');
      console.error('Erro ao realizar login:', e);
    }
  }
};