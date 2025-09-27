import { ReactNode } from "react";
import { Sidebar } from "../components";

type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};
