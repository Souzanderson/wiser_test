import axios from 'axios';

const restConnection = {
    test: () => {
        return axios.get("http://127.0.0.1:5000/")
    },

    login: async (email: any,senha: any) => {
        return axios.post("http://127.0.0.1:5000/login", { email: email, senha: senha });
    }
}
export default restConnection