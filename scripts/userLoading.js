(async function main() {
    await new Promise(resolve =>
        setTimeout(() => resolve("Long task complete."), 3000))

    const service = new FetchService();

    const user = await service.fetchRandomUser();

    hideLoading()
    if (user) {
        renderUser(user);
    } else {
        showError();
    }
})();

function showError() {
    const errorElement = document.getElementsByClassName('main__user-error')[0];
    errorElement.style.display = "flex";

    const userInfoElement = document.getElementsByClassName('main__user')[0];
    userInfoElement.style.display = "none";
}

function hideLoading() {
    const loadingElement = document.getElementById('load');
    loadingElement.remove();
}

function renderUser(user) {
    const userInfoElement = document.getElementsByClassName('main__user')[0];
    userInfoElement.style.display = "flex";

    const profilePictureElement = document.getElementById('user-profile-picture');
    profilePictureElement.setAttribute("src", user.picture.large);

    const profileUserProfileName = document.getElementById('user-profile-name');
    profileUserProfileName.textContent = user.name.first + " " + user.name.last;

    const profileUserProfileGender = document.getElementById('user-profile-gender');
    profileUserProfileGender.textContent = user.gender;

    const profileUserProfileEmail = document.getElementById('user-profile-email');
    profileUserProfileEmail.textContent = user.email;

    const profileUserProfilePhone = document.getElementById('user-profile-phone');
    profileUserProfilePhone.textContent = user.phone;
}