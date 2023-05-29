import { Collection } from "@aws-amplify/ui-react";

import PropertyCard from "@/components/PropertyCard";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { House } from "@/src/models";

export default function Properties() {
  const [cabins, setCabins] = useState<House[]>([]);

  useEffect(() => {
    async function getCabins() {
      try {
        const _houses = await DataStore.query(House);
        setCabins(_houses);
        console.log(
          "Posts retrieved successfully!",
          JSON.stringify(_houses, null, 2)
        );
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    }
    getCabins();
  }, []);
  return (
    <Collection
      items={cabins}
      type="grid"
      maxWidth="1100px"
      margin="0 auto"
      justifyContent="center"
      templateColumns={{
        base: "minmax(0, 500px)",
        medium: "repeat(2, minmax(0, 1fr))",
        large: "repeat(3, minmax(0, 1fr))"
      }}
      gap="small"
    >
      {(item, index) => <PropertyCard key={index} {...item}></PropertyCard>}
    </Collection>
  );
}
