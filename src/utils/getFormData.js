export const getFormData = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const formDataObject = {}
    data.forEach((value, key) => formDataObject[key] = value)
    return formDataObject
}