class Github{
  constructor(){
    this.client_id = '1fdf56ee589cabf8e454';
    this.client_secret = 'f5b847331d9b3808f81b677970733cc1c671a06d';
    this.repos_count = 5;
    this.repos_sort ='created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await reposResponse.json();


    return{
      profile, //в ES6 это == profile: profile     
      repos: repos
    }
  }
}