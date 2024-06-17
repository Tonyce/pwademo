"use client";

import usePWA from "@/hooks/use-pwa";

export function AppProvider({
  isMobile,
  children,
}: {
  isMobile: boolean;
  children: React.ReactNode;
}) {
  //   const isDesktop = useMediaQuery("(min-width: 640px)", {
  //     initializeWithValue: false,
  //   });
  const { isPWA, pwdChecked } = usePWA();
  if (!pwdChecked) {
    return null;
  }
  if (!isPWA && isMobile) {
    return (
      <main className="flex-grow">
        <h1>add website to home</h1>
      </main>
    );
  }
  return (
    <main className="flex-grow">
      {/* {!isDesktop && (
        <div className="dark:bg-black bg-white sticky top-0 h-12"></div>
      )} */}
      {children}
    </main>
  );
}
