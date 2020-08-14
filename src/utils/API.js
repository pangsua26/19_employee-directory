import axios from "axios";

export default {
    getUsers: function() {
        return new Promise((resolve,reject) => {
            axios
            .get("https://randomuser.me/api/?results=50&nat=us")
            .then(res => {
                const users = res.data.results;
                const results = users.map(user => {
                    return {
                        image: user.picture.large,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                        email: user.email,
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