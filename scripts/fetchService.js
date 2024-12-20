class FetchService {
    constructor() {}

    async fetchRandomUser() {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok || (Math.round(Math.random()) === 0)) return null;

        const data = await response.json();
        const user = data.results[0];
        console.log(user);
        return {
            name: {
                first: user.name.first,
                last: user.name.last,
            },
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            picture: {
                large: user.picture.large,
                medium: user.picture.medium,
                thumbnail: user.picture.thumbnail,
            },
        }
    }
}