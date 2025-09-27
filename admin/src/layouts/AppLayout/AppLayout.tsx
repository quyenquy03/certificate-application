import { LocaleProvider, MantineProvider } from "@/providers";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <MantineProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </MantineProvider>
  );
};
