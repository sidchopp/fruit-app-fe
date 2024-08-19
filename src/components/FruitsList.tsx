import React from "react";

interface FruitsListProps {
  fruits: Fruit[];
}
const FruitsList: React.FC<FruitsListProps> = ({ fruits }) => {
  return (
    <>
      <span className="text-lg font-semibold mb-4">Group by</span>
      <ul>
        {fruits.map((fruit: Fruit) => (
          <li key={fruit.id}>
            {fruit.name} ({fruit.nutritions.calories} calories)
          </li>
        ))}
      </ul>
    </>
  );
};

export { FruitsList };
