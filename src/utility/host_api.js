const host_example = 'http://localhost:5173/data.json'

function host_api(city){
    const host_api = `https://api.weatherstack.com/current?access_key=cac8bb093c96fd3e9d7689e77fd90212&query=${city}`

    return host_api
}


export {host_example,host_api}
