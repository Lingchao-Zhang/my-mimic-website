const fetchCars = async () => {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const headers = {
		'X-RapidAPI-Key': '0c6655773bmsh8e531863cf07ca4p114fa4jsnaebb326da0a7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(url, {headers: headers})
    const result = response.json()

    return result
}

export default fetchCars