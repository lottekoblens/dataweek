export const getData = () => {
    return new Promise((resolve) => {
      fetch("./data.json")
        .then(response => response.json())
        .then((json) => {
          resolve(json)
        })
    })
  }
  