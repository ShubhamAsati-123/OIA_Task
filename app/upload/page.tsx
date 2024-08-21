import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import FileUpload from "@/components/FileUpload";

const page = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={16} defaultChecked>
          <Sidebar activeItem="upload" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Navbar />
          <div className="flex justify-center items-center">
            <FileUpload />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
