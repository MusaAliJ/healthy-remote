export const keys = {
  USER: "user"
}

export const addToStorage = function (key, value) {
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

export const removeFromStorage = function (key) {
  localStorage.removeItem(key)
}
