// Submit event listener
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit)

// Regex
const nameRegex = /[a-zA-Zа-яА-Я]+\s[A-ZА-Я][.][A-ZА-Я]$/;
const groupRegex = /[A-Z]{2}[-][0-9]{2}$/;
const phoneRegex = /[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/;
const addressRegex = /(м.)\s[А-Я][а-я]+/
const emailRegex = /[\w]{3,}[@][\w]{2,}(.com)$/

// Alerts
const alerts = {
    name: "ПІБ має бути представлений як прізвище та ініціали. Приклад - Гайова А.Д",
    group: "Зазанчте коректну назву групи. Приклад - ІТ-91",
    phone: "Зазначте коректний номер телефону. Приклад - (050)-075-12-16",
    address: "Зазначте місто вашого проживання. Приклад - м. Дніпро",
    email: "Зазнчте коректну адресу електронної пошти. Приклад - alenag2602@gmail.com"
}

function handleSubmit() {
    const data = {
        name: document.querySelector("#name").value,
        group: document.querySelector("#group").value,
        phone: document.querySelector("#phone").value,
        address: document.querySelector("#address").value,
        email: document.querySelector("#email").value
    }
    if(!isValid(data)) showErrors(findInvalidFields(findFieldsState(data)))
}

// Validation
const nameIsValid = name => nameRegex.test(name)

const groupIsValid = group => groupRegex.test(group)

const phoneIsValid = phone => phoneRegex.test(phone)

const addressIsValid = address => addressRegex.test(address)

const emailIsValid = email => emailRegex.test(email)

function isValid(data) {
    return data != null
            && nameIsValid(data.name)
            && groupIsValid(data.group)
            && phoneIsValid(data.phone)
            && addressIsValid(data.address)
            && emailIsValid(data.email)
}

function findFieldsState(data) {
    return {
        name: nameIsValid(data.name),
        group: groupIsValid(data.group),
        phone: phoneIsValid(data.phone),
        address: addressIsValid(data.address),
        email: emailIsValid(data.email)
    }
}

function findInvalidFields(state) {
    const invalidFields = []
    for (key in state) {
        if (!state[key]) invalidFields.push(key)
    }
    return invalidFields
}

// Errors on UI
showErrors = fieldsId => {
    for (let i in fieldsId) {
        let id = fieldsId[i]
        setStyleForInvalidFields(id)
        showAlert(id)
    }
}

setStyleForInvalidFields = id => {
    field = document.querySelector(`#${id}`)
    field.style.setProperty('color', 'rgb(145, 16, 16)', 'important')
    const text = field.value
    field.value = text
}

showAlert = id => alert(alerts[`${id}`])


