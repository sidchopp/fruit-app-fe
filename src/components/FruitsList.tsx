import { FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface FruitsListProps {
  fruits: Fruit[];
  onAddToJar: (fruit: Fruit) => void;
  groupBy: GroupByOption;
  setGroupBy: Dispatch<SetStateAction<GroupByOption>>;
}

const groupFruitsBy = (fruits: Fruit[], key: keyof Fruit) => {
  return fruits.reduce((acc, fruit) => {
    const groupKey = fruit[key];
    if (typeof groupKey === "string" || typeof groupKey === "number") {
      const groupKeyString = String(groupKey);
      if (!acc[groupKeyString]) {
        acc[groupKeyString] = [];
      }
      acc[groupKeyString].push(fruit);
    }
    return acc;
  }, {} as { [key: string]: Fruit[] });
};

const FruitsList: FC<FruitsListProps> = ({
  fruits,
  onAddToJar,
  groupBy,
  setGroupBy,
}) => {
  const handleGroupByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroupBy(event.target.value as GroupByOption);
  };

  const handleAddFruitsToJar = (fruit: Fruit) => {
    onAddToJar(fruit);
  };

  const handleAddGroupToJar = (groupFruits: Fruit[]) => {
    groupFruits.forEach((fruit) => onAddToJar(fruit));
  };

  const groupedFruits =
    groupBy !== "none" ? groupFruitsBy(fruits, groupBy) : {};

  return (
    <>
      <span className="text-lg font-semibold mb-4 mr-1">Group by</span>
      <select
        name="groupBy"
        aria-label="Group by"
        onChange={handleGroupByChange}
        value={groupBy}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="none">None</option>
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>

      {groupBy === "none" && (
        <ul>
          {fruits.map((fruit) => (
            <li
              key={fruit.id}
              className="py-1 flex items-center justify-between"
            >
              <span>
                {fruit.name} ({fruit.nutritions.calories} calories)
              </span>
              <button
                onClick={() => handleAddFruitsToJar(fruit)}
                className="ml-4 p-1 bg-blue-500 text-white rounded"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      )}

      {groupBy !== "none" && (
        <div>
          {Object.keys(groupedFruits).map((key) => (
            <Disclosure key={key} as="div" className="mb-4">
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full p-2 text-left bg-gray-200 rounded">
                    <div className="flex items-center">
                      <span className="font-semibold">{key}</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 ml-2 transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <button
                      onClick={() => handleAddGroupToJar(groupedFruits[key])}
                      className="p-1 bg-blue-500 text-white rounded"
                    >
                      Add
                    </button>
                  </DisclosureButton>
                  <DisclosurePanel className="pl-4">
                    <ul>
                      {groupedFruits[key].map((fruit: Fruit) => (
                        <li
                          key={fruit.id}
                          className="py-1 flex items-center justify-between"
                        >
                          <span>
                            {fruit.name} ({fruit.nutritions.calories} calories)
                          </span>
                        </li>
                      ))}
                    </ul>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      )}
    </>
  );
};

export { FruitsList };
