import MenuItem from "./MenuItem";

interface FoodItem {
  id: number;
  itemName: string;
  description: string;
  foodImage: string;
  price: number;
  isFavorite: boolean;
}

interface MenuListProps {
  foodItems: FoodItem[]
}

function MenuList({foodItems}: MenuListProps) {
  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((food) => (
        <MenuItem key={food.id} food={food} />
      ))}
    </>
  );
}

export default MenuList;
