import { Footer, FruitsList, Header } from "../components";
import { useFruits } from "../hooks";

const Home = () => {
  const { fruits, loading, error } = useFruits();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row p-5 gap-5">
        <div className="lg:w-1/2 flex-1 border border-gray-300 rounded-lg p-4 bg-gray-100">
          <FruitsList fruits={fruits} />
        </div>
        <div className="lg:w-1/2 flex-1 border border-gray-300 rounded-lg p-4 bg-gray-100">
          FruitJar
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
