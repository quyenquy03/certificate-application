"use client";

import { ReactNode } from "react";
import { MantineProvider as MantineThemeProvider } from "@mantine/core";

type MantineProviderProps = {
  children: ReactNode;
};

export const MantineProvider = ({ children }: MantineProviderProps) => {
  return (
    <MantineThemeProvider
      defaultColorScheme="dark"
      withCssVariables
      theme={{
        colors: {
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#222131",
            "#0c0d21",
            "#01010a",
          ],
        },
      }}
      cssVariablesResolver={(theme) => ({
        variables: {
          "--app-radius": theme.radius.md,
        },
        light: {
          "--app-bg": theme.white,
          "--app-text": theme.black,
        },
        dark: {
          "--app-bg": theme.colors.dark[7],
          "--app-text": theme.colors.dark[0],
        },
      })}
    >
      {children}
    </MantineThemeProvider>
  );
};
