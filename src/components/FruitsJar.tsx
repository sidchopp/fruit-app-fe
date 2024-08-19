import { FC } from "react";

interface FruitJarProps {
  jarFruits: Fruit[];
  onRemoveFruit: (id: number) => void;
}

const FruitsJar: FC<FruitJarProps> = ({ jarFruits, onRemoveFruit }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Fruit Jar</h2>
      <p>No fruits in the jar.</p>
    </>
  );
};

export { FruitsJar };
