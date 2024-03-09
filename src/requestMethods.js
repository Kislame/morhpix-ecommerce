import axios from 'axios';

const BASE_URL = 'http//:localhost:3000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjg2MmY3NDI3YjAyOWI3YWIwN2VjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTk0NDUzMywiZXhwIjoxNjgyMjAzNzMzfQ.F6Vq0OcUKHVVaM_LK9D8jc-J8Ek_TfVgK7hTm4eubGE';

export const puplicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  headers: { 'X-auth-token': TOKEN },
});
