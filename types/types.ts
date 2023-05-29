import React from "react";

export interface PropertyProps {
  id: string;
  name: string;
  thumbnail: string;
  thumbnailAlt: string;
  beds: number;
  rate: number;
  rating: number;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface RequireAuthProps {
  children: React.ReactElement | null;
}
