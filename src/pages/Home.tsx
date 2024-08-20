import { useState } from "react";
import { Header, FruitsList, FruitsJar, Footer } from "../components";
import { useFruits } from "../hooks";

const Home = () => {
  const [groupBy, setGroupBy] = useState<GroupByOption>("none");
  const [jarFruits, setJarFruits] = useState<Fruit[]>([]);
  const { fruits, loading, error } = useFruits();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddToJar = (fruit: Fruit) => {
    setJarFruits((prevFruits) => [...prevFruits, fruit]);
  };

  const handleRemoveFromJar = (id: number) => {
    setJarFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row p-5 gap-5">
        <div className="lg:w-1/2 flex-1 border border-gray-300 rounded-lg p-8 bg-gray-100">
          <FruitsList
            fruits={fruits}
            onAddToJar={handleAddToJar}
            groupBy={groupBy}
            setGroupBy={setGroupBy}
          />
        </div>
        <div className="lg:w-1/2 flex-1 border border-gray-300 rounded-lg p-8 bg-gray-100">
          <FruitsJar
            jarFruits={jarFruits}
            onRemoveFruit={handleRemoveFromJar}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
