import { data } from "../../data";
import MobileCategory from "../atoms/MobileCategory";

export default function MobileCategories() {
  const categories = data.categories;
  return (
    <div className="md:hidden overflow-x-auto">
      <div className="inline-flex md:flex items-center flex-row space-x-0">
        {categories.map((category) => (
          <MobileCategory
            key={category.id}
            color={category.color}
            name={category.name}
            icon={category.icon}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
}