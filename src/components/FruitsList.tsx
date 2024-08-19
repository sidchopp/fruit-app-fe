import { FC } from "react";

interface FruitsListProps {
  fruits: Fruit[];
  onAddToJar: (fruit: Fruit) => void;
}
const FruitsList: FC<FruitsListProps> = ({ fruits, onAddToJar }) => {
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
