import { CarType, FilterType } from "@/types";

// get car data through api
export const fetchCars = async (filters: FilterType) => {
    const {manufacturer, model, fuel, year, limit} = filters
    // create url based on manufacturer and model
    const url = `
    https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}
    `;
    const headers = {
		'X-RapidAPI-Key': '0c6655773bmsh8e531863cf07ca4p114fa4jsnaebb326da0a7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    // request using created url => get response(data) 
    const response = await fetch(url, {headers: headers})
    const result = response.json()

    return result
}


// get car images through api
export const generateImageUrl = (car: CarType, angle?: string) => {
  const baseUrl = new URL('https://cdn.imagin.studio/getimage')
  const{ make, model, year } = car
  baseUrl.searchParams.append('customer', 'hrjavascript-mastery')
  baseUrl.searchParams.append('make', make)
  baseUrl.searchParams.append('modelFamily', model.split("")[0])
  baseUrl.searchParams.append('zoomType', 'fullscreen')
  baseUrl.searchParams.append('modelYear', `${year}`)
  baseUrl.searchParams.append('angle', `${angle}`)

  return `${baseUrl}`
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const updateParamsOfCustomFilters = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    type === "fuel" ? searchParams.set("fuel_type", value) : searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
  }




