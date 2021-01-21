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
    addUser({newUser}) {
        return instance.post('/users', newUser)
            .then(res => res.data)
            .catch(e => alert(e))
    },
    updateUser({userId, updateUserData}) {
        return instance.put(`/user/${userId}`, updateUserData)
            .then(res => res.data)
            .catch(e => alert(e))
    },
    deleteUser(id) {
        return instance.delete(`/user/${id}`)
            .then(res => res.data)
            .catch(e => alert(e))
    }
}