import { useEffect } from "react";
import {
  Flex,
  View,
  Authenticator,
  useAuthenticator,
  Button
} from "@aws-amplify/ui-react";

import { useRouter } from "next/navigation";

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

  useEffect(() => {
    if (route === "authenticated") {
      router.push("/admin");
    }
  }, [route, router]);

  return (
    <Flex direction="column" height="100%">
      <View margin="auto">
        <Authenticator>
          {({ signOut }) => <Button onClick={signOut}>Sign out</Button>}
        </Authenticator>
      </View>
    </Flex>
  );
}
