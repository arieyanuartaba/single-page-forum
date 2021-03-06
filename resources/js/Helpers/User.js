import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login(data){
        // console.log(data)
        axios.post('/api/auth/login', data)        
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data.errors))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;
        
        if(Token.isValid(access_token)){
            AppStorage.store(username, access_token)
            window.location = '/forum'
        }
    }

    hasToken() {
        const storeToken = AppStorage.getToken()

        if(storeToken) {
            return Token.isValid(storeToken) ? true : this.logout()
        }

        return false
    }

    loggedIn() {

        return this.hasToken()
    }

    logout() {

         AppStorage.clear()
         return window.location = '/forum'
    }

    name() {
        if(this.loggedIn()) {
            return AppStorage.getUser()
        }
    }

    id() {
        if(this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())

            return payload.sub
        }
    }

    own(id) {

        return this.id() == id 
    }

    isAdmin() {
        return this.id() == 11
    }
}

export default User = new User();