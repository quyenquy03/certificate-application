"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "en";
    changeLocale(saved);
  }, []);

  async function changeLocale(newLocale: string) {
    const data = await import(`@/messages/${newLocale}.json`);
    setLocale(newLocale);
    setMessages(data.default);
    localStorage.setItem("locale", newLocale);
  }

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
