class Github{
    constructor(){
        this.client_id='42497f243a56877bc105';
        // this.client_secret='b07812d1d7e845c858c99893da13d47586f5d65d';
        this.client_secret='305b7392bf6e8fdf5427b58be48b77bf4ac61476';
        this.repos_count   = 100;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile= await profileResponse.json();
         
        // const reposResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos= await reposResponse.json();
        return{
             profile,
             repos
         }
    }
}