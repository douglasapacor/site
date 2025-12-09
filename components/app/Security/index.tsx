"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing, Settings } from "lucide-react";

export function Security() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center justify-end gap-4">
        <span>Nome do usuario</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex w-full items-center justify-end gap-4">
        <BellRing className="cursor-pointer" />
        <Settings />
      </div>
    </div>
  );
}
