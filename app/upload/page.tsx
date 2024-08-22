import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import FileUpload from "@/components/FileUpload";
import MobileNav from "@/components/MobileNav";

const page = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <div className="hidden md:block">
          <ResizablePanel defaultSize={16} defaultChecked>
            <Sidebar activeItem="upload" />
          </ResizablePanel>
        </div>
        <ResizableHandle />
        <ResizablePanel>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="md:hidden text-2xl font-figtree">Upload CSV</h2>
            <FileUpload />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
