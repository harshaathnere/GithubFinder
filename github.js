class Github {
    constructor(){
        this.client_id = 'b4723074006a9e0e81b2';
        this.client_secret = '59dfeb004c3c91ced6dc2e13da6b78fe94f2ce2c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id= ${this.client_id}&client_secret_id = &${this.secret_id}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
        
        return{
            profile,
            repos
        }

    }
}