import axios from 'axios';


const _URL = "https://wiserservertest.herokuapp.com/"

const restConnection = {
    test: () => {
        return axios.get(_URL)
    },

    login: async (email: any,senha: any) => {
        return axios.post(_URL+"login", { email: email, senha: senha });
    }
}
export default restConnection