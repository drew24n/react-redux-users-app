import axios from "axios";

const instance = axios.create({
    baseURL: 'http://77.120.241.80:8811/api'
})

export const usersAPI = {
    getUsers() {
        return instance.get('/users')
            .then(res => res.data)
            .catch(e => alert(e))
    },
    addUser(user) {
        return instance.post('/users', user)
            .then(res => res.data)
            .catch(e => alert(e))
    },
    editUser(id, user) {
        return instance.put(`/user/${id}`, user)
            .then(res => res.data)
            .catch(e => alert(e))
    },
    deleteUser(id) {
        return instance.delete(`/user/${id}`)
            .then(res => res.data)
            .catch(e => alert(e))
    }
}