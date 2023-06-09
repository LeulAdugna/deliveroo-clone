import React from "react";
import { View, ScrollView, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row item-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://Links.papareact.com/gn7"
          title="Burger"
          rating={4.5}
          genre="American"
          address="Some Condominium"
          short_description="This is a text description."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://Links.papareact.com/gn7"
          title="Burger"
          rating={4.5}
          genre="American"
          address="Some Condominium"
          short_description="This is a text description."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://Links.papareact.com/gn7"
          title="Burger"
          rating={4.5}
          genre="American"
          address="Some Condominium"
          short_description="This is a text description."
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
