"use client";

import { GoogleReCaptchaProvider as Provider } from "react-google-recaptcha-v3";

export function GoogleReCaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    // Handle the case where the site key is not set
    // You might want to log an error or return a fallback UI
    return <>{children}</>;
  }

  return <Provider reCaptchaKey={siteKey}>{children}</Provider>;
}
