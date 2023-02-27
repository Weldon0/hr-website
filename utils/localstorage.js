
const key = 'token'
export function setLocal(token) {
    localStorage.setItem(key, token)
}

export function getToken() {
    return localStorage.getItem(key)
}
