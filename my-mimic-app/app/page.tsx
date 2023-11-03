import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarType } from "@/types";
import {fetchCars} from "@/utils";

export default async function Home({searchParams}: any) {
  const Cars = await fetchCars(
    {
      // get manufacturer and model from searchParams
      // form them as an object and pass to fetchCars function
      manufacturer: searchParams.manufacturer || "",
      model: searchParams.model || "",
      fuel: searchParams.fuel_type || "",
      year: searchParams.year || 2020,
      limit: searchParams.limit || 10
    }
  )
  const isDataEmpty = !Cars || !Array.isArray(Cars) || Cars.length === 0
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <SearchBar /> 
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
            {
              (searchParams.manufacturer !== undefined || searchParams.model !== undefined)
              &&
              isDataEmpty 
              ? 
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oops, No results
                </h2>
                <p>{Cars.message}</p>
              </div>
              :
              (!isDataEmpty
              ?
              <section>
              <div className="home__cars-wrapper">
                {
                  Cars.map((car: CarType) => <CarCard car={car}/>)
                }
              </div>
            </section>
              :
              <></>)
            }
          </div>
        </div>
      </div>
    </main>
  )
}
