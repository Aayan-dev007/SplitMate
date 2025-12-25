"use client";

import { useStoreUser } from "@/hooks/use-store-user";

export function UserStoreProvider({ children }) {
  useStoreUser();
  
  return <>{children}</>;
}
