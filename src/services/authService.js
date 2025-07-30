import axios from 'axios';

export async function login(username, password) {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const res = await axios.post("http://localhost:8000/token", formData);
    const token = res.data.access_token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
}
