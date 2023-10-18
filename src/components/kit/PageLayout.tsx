import React, { type PropsWithChildren } from "react";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-screen flex-col gap-8 px-5 pt-12">{children}</div>
);
