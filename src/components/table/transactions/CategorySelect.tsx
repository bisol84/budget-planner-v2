import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";

interface CategorySelectProps {
  selectedValue: string;
}

interface Category {
  ID: number; 
  category: string; 
}

export default function CategorySelect({selectedValue}: CategorySelectProps) {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetch("/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <Select name="selectCategory" defaultValue={selectedValue.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Catégorie" />
      </SelectTrigger>
      <SelectContent>
      {categories.map((category) => (
        <SelectItem key={category.ID} value={category.ID.toString()}>{category.category}</SelectItem>
      ))}
      </SelectContent>
    </Select>
  );
}
