import { RequireAuth } from "@/components/RequireAuth";
import { HouseCreateForm } from "@/src/ui-components";
import { View, Heading } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();

  return (
    <RequireAuth>
      <View
        maxWidth={"800px"}
        margin="0 auto"
        display="flex"
        gap="1rem"
        justifyContent="space-evenly"
      >
        <View className="rounded  shadow-2xl p-4 w-1/2">
          <Heading level={2} textAlign="center" margin="2rem">
            Step 1: Upload Picture
          </Heading>
          <StorageManager
            accessLevel="public"
            acceptedFileTypes={[".jpg"]}
            maxFileCount={1}
          />
        </View>
        <View className="rounded shadow-2xl p-4 w-1/2 ">
          <Heading level={2} textAlign="center" margin="2rem">
            Step 2: Add New Property
          </Heading>

          <HouseCreateForm
            onSuccess={() => router.push("/")}
            onCancel={() => router.push("/")}
          />
        </View>
      </View>
    </RequireAuth>
  );
}
