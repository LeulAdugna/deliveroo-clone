import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUrl="https://Links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
