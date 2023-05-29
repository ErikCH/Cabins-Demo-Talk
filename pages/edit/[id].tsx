import { RequireAuth } from "@/components/RequireAuth";
import { HouseUpdateForm } from "@/src/ui-components";
import { View, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { House, LazyHouse } from "@/src/models";
import { DataStore } from "aws-amplify";

export default function Admin() {
  const [house, setHouse] = useState<LazyHouse>();

  const router = useRouter();

  useEffect(() => {
    /**
     * This keeps `post` fresh.
     */
    const sub = DataStore.observeQuery(House, (c) =>
      c.id.eq(router.query.id as string)
    ).subscribe(({ items }) => {
      setHouse(items[0]);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [router.query.id]);

  return (
    <RequireAuth>
      <View
        maxWidth={"800px"}
        margin="0 auto"
        display="flex"
        gap="1rem"
        justifyContent="space-evenly"
      >
        <View className="rounded shadow-2xl p-4 w-1/2 ">
          <Heading level={2} textAlign="center" margin="2rem">
            Edit Property
          </Heading>

          <HouseUpdateForm
            house={house}
            onSuccess={() => router.push("/")}
            onCancel={() => router.push("/")}
          />
        </View>
      </View>
    </RequireAuth>
  );
}
