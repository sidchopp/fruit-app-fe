import { FC } from "react";

interface FruitJarProps {
  jarFruits: Fruit[];
  onRemoveFruit: (id: number) => void;
}

const FruitsJar: FC<FruitJarProps> = ({ jarFruits, onRemoveFruit }) => {
  const totalCalories = jarFruits.reduce(
    (acc, fruit) => acc + fruit.nutritions.calories,
    0
  );

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Fruit Jar</h2>
      {jarFruits.length === 0 ? (
        <p>No fruits in the jar.</p>
      ) : (
        <div>
          <ul className="list-disc list-inside">
            {jarFruits.map((fruit) => (
              <li
                key={fruit.id}
                className="flex justify-between items-center py-1"
              >
                <span>
                  {fruit.name} ({fruit.nutritions.calories} calories)
                </span>
                <button
                  onClick={() => onRemoveFruit(fruit.id)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold">
            <span>Total Calories: {totalCalories}</span>
          </div>
        </div>
      )}
    </>
  );
};

export { FruitsJar };
