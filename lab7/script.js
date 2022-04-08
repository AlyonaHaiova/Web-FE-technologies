const downloadButton = document.getElementById('downloadButton')

const downloadUser = () => {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(responseJson => responseJson.results[0])
        .then(user => mapUser(user))
        .then(data => addToHtml(data));
}

const mapUser = user => {
    const userPicture =  user["picture"]["large"];
    const latitude = user["location"]["coordinates"]["latitude"];
    const longitude = user["location"]["coordinates"]["longitude"];
    const userCity = user["location"]["city"];
    const country = user["location"]["country"];
    const userEmail = user["email"];
    const mappedUser = {
        picture: userPicture,
        location: country,
        city: userCity,
        coordinates: {
            latitude: latitude,
            longitude: longitude
        },
        email: userEmail
    }
    return mappedUser;
}

const addToHtml = user => {
    const divContainer = document.createElement("div");
    const div = document.createElement("div");
    divContainer.appendChild(div)
    divContainer.classList.add("user")
    div.classList.add("userTextInfoDiv")
    addPhotoToHtml(divContainer, user.picture)
    addTextToHtml(div, `Location: ${user.location}, ${user.city}`)
    addTextToHtml(div, `Coordinates: ${user.coordinates.longitude}, ${user.coordinates.latitude}`)
    addTextToHtml(div, `Email: ${user.email}`)
    document.getElementById("users").appendChild(divContainer);
}

const addPhotoToHtml = (parent, url) => {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("photo")
    parent.appendChild(img)
}

const addTextToHtml = (parent, string) => {
    const p = document.createElement("p");
    p.classList.add("userInfoP")
    const text = document.createTextNode(string)
    p.appendChild(text)
    parent.appendChild(p)
}

downloadButton.addEventListener('click', downloadUser)


