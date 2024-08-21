import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Output = ({ data }: { data: any[] }) => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    console.log("Received Data in Output Component:", data); // Log the received data
    setTableData(
      data.map((item) => ({
        ...item,
        select_tags: [
          "Technology",
          "Fashion",
          "Food",
          "Travel",
          "Sports",
          "Music",
          "Art",
          "Health",
          "Education",
          "Finance",
        ],
        selected_tags: [] as string[],
      }))
    );
  }, [data]);

  const handleTagSelect = (index: number, tag: string) => {
    setTableData((prevData) =>
      prevData.map((item, i) =>
        i === index && !item.selected_tags.includes(tag)
          ? {
              ...item,
              selected_tags: [...item.selected_tags, tag],
              select_tags: item.select_tags.filter(
                (selectTag: any) => selectTag !== tag
              ),
            }
          : item
      )
    );
  };

  return (
    <div className="w-full px-12">
      <h2 className="mt-32 mb-12">Uploads</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl No.</TableHead>
            <TableHead>Links</TableHead>
            <TableHead>Prefix</TableHead>
            <TableHead>Add Tags</TableHead>
            <TableHead className="w-96">Selected Tags</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.links}</TableCell>
              <TableCell>{item.prefix}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex gap-2 bg-[#0D0D0D] px-4 py-1 cursor-pointer">
                      Select Tags
                      <ChevronDown />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.select_tags.map((tag: any, i: any) => (
                      <DropdownMenuItem
                        key={i}
                        onClick={() => handleTagSelect(index, tag)}
                      >
                        {tag}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {item.selected_tags.map((tag: any, i: any) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Output;
