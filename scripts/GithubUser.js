export class GithubUser {
    static search( username ) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
            .then( data => data.json() )
            //desestruturando como argumento
            .then( ({ login, name, public_repos, followers }) => ({
                login,
                name,
                public_repos,
                followers,
            }));
            //exemplo de como seria normalmente
            // .then( data => ({
            //     login: data.login,
            //     name: data.name,
            //     public_repos: data.public_repos,
            //     followers: data.followers,
            // }))
    }
}