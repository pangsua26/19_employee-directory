import axios from "axios";

export default {
    // get users from randomuser API and return results
    getUsers: function() {
        return new Promise((resolve,reject) => {
            axios
            .get("https://randomuser.me/api/?results=200&nat=us")
            .then(res => {
                const users = res.data.results;
                const results = users.map(user => {
                    return {
                        image: user.picture.large,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                        email: user.email,
                        id: user.login.uuid
                    };
                });
                resolve(results);
            })
            .catch(err => {
                console.log(err);
                
            });
        });
    }
}