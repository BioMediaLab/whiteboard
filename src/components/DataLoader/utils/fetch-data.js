async function fetchExternalData(endpoint, options) {
  const externalResponse = await fetch(endpoint, options)
  const data = await externalResponse.json()

  const response = {
    data
  }

  return response
}

function fetchLocalData(endpoint) {
  return localStorage.getItem(endpoint)
}

function fetchData(endpoint, options) {
  if (!localStorage) {
    return fetchExternalData(endpoint, options)
  }

  let existingRecord = fetchLocalData(endpoint)

  if (existingRecord) {
    existingRecord = JSON.parse(existingRecord)
    return Promise.resolve(existingRecord)
  } else {
    const response = fetchExternalData(endpoint, options)

    return response.then(data => {
      localStorage.setItem(endpoint, JSON.stringify(data))
      return data
    })
  }
}

export default fetchData
