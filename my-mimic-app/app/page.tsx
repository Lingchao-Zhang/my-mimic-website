import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import {fetchCars} from "@/utils";

export default async function Home() {
  const Cars = await fetchCars()
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
              <CustomFilter/>
              <CustomFilter/>
            </div>
            {
              isDataEmpty 
              ? 
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oops, No results
                </h2>
                <p>{Cars.message}</p>
              </div>
              :
              <section>
                <div className="home__cars-wrapper">
                  {
                    Cars.map((car) => <CarCard car={car}/>)
                  }
                </div>
              </section>
            }
          </div>
        </div>
      </div>
    </main>
  )
}
