class Services {

  fetchUsers() {
    return fetch('https://api.github.com/search/users?q=carlosvillu')
      .then(response => response.json())
      .then(results => results.items[0])
      .then(profile => this.setState({username: profile.login, avatar: profile.avatar_url}))
  }

}

export default Services;
