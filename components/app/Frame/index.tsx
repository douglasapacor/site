import { ReactNode } from "react";
import { Security } from "../Security";

interface frame {
  children?: ReactNode;
}

export default function Frame({ children }: frame) {
  return (
    <div className="flex h-dvh w-full flex-col bg-gray-200">
      <div className="container mx-auto flex w-full items-center justify-between p-4">
        <div className="flex w-full items-center">
          <img src="/logos/logo_inr.svg" alt="" />
        </div>
        <div className="w-full">
          <Security />
        </div>
      </div>
      {children}
    </div>
  );
}
