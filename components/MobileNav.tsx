"use client";
import React from "react";
import { Menu, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRouter } from "next/navigation";
import {
  LayoutGrid,
  ChartNoAxesColumn,
  Ticket,
  ChartNoAxesGanttIcon,
  Calendar,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutGrid,
    title: "Dashboard",
    key: "dashboard",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Upload",
    key: "upload",
  },
  {
    icon: Ticket,
    title: "Invoice",
    key: "invoice",
  },
  {
    icon: ChartNoAxesGanttIcon,
    title: "Schedule",
    key: "schedule",
  },
  {
    icon: Calendar,
    title: "Calendar",
    key: "calendar",
  },
  {
    icon: Bell,
    title: "Notification",
    key: "notification",
  },
  {
    icon: Settings,
    title: "Settings",
    key: "settings",
  },
];

const MobileNav = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    router.replace("/");
  }

  return (
    <div className="flex justify-between items-center mx-4 md:hidden bg-primary h-20">
      <div className="flex gap-2">
        <Sheet key="left">
          <SheetTrigger>
            <Menu className="text-primary" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-primary">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center rounded-full gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-110"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.9902 12.6291L19.7848 9.44685C19.4943 8.735 18.7951 8.23336 17.9787 8.23336C17.1081 8.23336 16.3707 8.80392 16.1202 9.59152L9.99098 14.6481C9.67551 14.4286 9.29214 14.3 8.87872 14.3C8.36808 14.3 7.90328 14.4963 7.55566 14.8175L0.121365 11.1829C1.00521 4.86344 6.43234 0 12.9954 0C20.051 0 25.7938 5.62091 25.9902 12.6291ZM6.99929 16.7717L0 13.3498C0.185401 20.3678 5.93266 26 12.9954 26C19.6871 26 25.1979 20.944 25.9161 14.4437L25.7557 14.7565L19.4134 11.504C19.0571 11.891 18.5462 12.1334 17.9787 12.1334C17.5037 12.1334 17.0683 11.9635 16.73 11.6812L10.8023 16.5715C10.649 17.4955 9.84616 18.2 8.87872 18.2C7.98246 18.2 7.22743 17.5953 6.99929 16.7717Z"
                      fill="#605BFF"
                    />
                  </svg>
                  <h1 className="font-montserrat font-bold text-2xl text-primary">
                    Base
                  </h1>
                </div>
              </SheetTitle>
              <SheetDescription>
                {menuItems.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center gap-6 h-12 px-4 hover:bg-gradient-to-r hover:from-[rgba(172,169,255,0.2)] hover:to-[rgba(172,169,255,0)] hover:bg-opacity-20 cursor-pointer my-4"
                  >
                    <item.icon size={24} />
                    <h2 className="text-base font-nunito">{item.title}</h2>
                  </div>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex h-full items-center ml-5">
          <div className="flex justify-center items-center rounded-full gap-3">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-110"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.9902 12.6291L19.7848 9.44685C19.4943 8.735 18.7951 8.23336 17.9787 8.23336C17.1081 8.23336 16.3707 8.80392 16.1202 9.59152L9.99098 14.6481C9.67551 14.4286 9.29214 14.3 8.87872 14.3C8.36808 14.3 7.90328 14.4963 7.55566 14.8175L0.121365 11.1829C1.00521 4.86344 6.43234 0 12.9954 0C20.051 0 25.7938 5.62091 25.9902 12.6291ZM6.99929 16.7717L0 13.3498C0.185401 20.3678 5.93266 26 12.9954 26C19.6871 26 25.1979 20.944 25.9161 14.4437L25.7557 14.7565L19.4134 11.504C19.0571 11.891 18.5462 12.1334 17.9787 12.1334C17.5037 12.1334 17.0683 11.9635 16.73 11.6812L10.8023 16.5715C10.649 17.4955 9.84616 18.2 8.87872 18.2C7.98246 18.2 7.22743 17.5953 6.99929 16.7717Z"
                fill="#605BFF"
              />
            </svg>
            <h1 className="font-montserrat font-bold text-2xl text-primary">
              Base
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Bell size={24} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session?.user?.image ?? ""} />
              <AvatarFallback>
                {session?.user?.name?.charAt(0).toUpperCase() ?? ""}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MobileNav;
