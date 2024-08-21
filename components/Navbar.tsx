import { Bell} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();
  return (
    <div>
      <div className="flex justify-between items-center mr-6 ml-8 mt-12">
        <h2 className="text-2xl font-figtree">Upload CSV</h2>
        <div className="flex items-center gap-4">
          <Bell size={24} />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            {/* <AvatarImage src={session.user?.image ?? ""} />
            <AvatarFallback>{session.user?.name ?? ""}</AvatarFallback> */}
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
