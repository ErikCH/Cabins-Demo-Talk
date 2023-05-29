import { ScrollView, Grid } from "@aws-amplify/ui-react";

import { LayoutProps } from "@/types/types";
import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid gap="zero" templateRows="auto 1fr" height="100%">
      <Header />
      <ScrollView>{children}</ScrollView>
    </Grid>
  );
}
