import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-key': '2f6f1784b1msh73e7691fbf3943fp19cba2jsn0d2032f58b4d',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}