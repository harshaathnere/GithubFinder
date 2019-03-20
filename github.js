class Github {
    constructor(){
        this.client_id = 'b4723074006a9e0e81b2';
        this.secret_id = '59dfeb004c3c91ced6dc2e13da6b78fe94f2ce2c';
    }
    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id= ${this.client_id}&client_secret_id = &${this.secret_id}`);
        const profile = await profileResponse.json();
        return{
            profile
        }

    }
}