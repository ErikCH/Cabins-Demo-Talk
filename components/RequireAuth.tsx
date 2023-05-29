import { useRouter } from "next/router";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { RequireAuthProps } from "@/types/types";
import { useEffect } from "react";

export function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const { route } = useAuthenticator((context) => [context.route]);
  useEffect(() => {
    if (route !== "authenticated") {
      router.push("/login");
    }
  }, [route, router]);

  return children;
}
