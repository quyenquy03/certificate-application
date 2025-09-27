import { ReactNode } from "react";
import { Sidebar } from "../components";

type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex gap-2 min-h-screen">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
