import React from "react";

interface FruitsListProps {
  fruits: Fruit[];
}
const FruitsList: React.FC<FruitsListProps> = ({ fruits }) => {
  return (
    <>
      <h2>Fruit List</h2>
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
