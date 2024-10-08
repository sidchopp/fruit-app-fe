type GroupByOption = "none" | "family" | "order" | "genus";

interface Nutrition {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutrition;
}

interface UseFruitsResult {
  fruits: Fruit[];
  loading: boolean;
  error: string | null;
}

interface GroupByOptions {
  NONE: GroupByOption;
  FAMILY: GroupByOption;
  ORDER: GroupByOption;
  GENUS: GroupByOption;
}
