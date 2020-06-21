import Axios from "axios"

export function getCourses(number) {
    return new Promise((res, rej) => {
        Axios.get('http://pinnacle.test/api/courses/get/' + number)
            .then(response => res(response.data))
            .catch(err => rej(err))
    })
}

export function getCourseById(id) {
    return new Promise((res, rej) => {
        Axios.get('http://pinnacle.test/api/courses/' + id)
            .then(response => res(response.data))
            .catch(err => rej(err))
    })
}