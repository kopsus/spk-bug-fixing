"use client";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import { TypeBug } from "@/api/bug/types";

interface ITableRowActions {
  item: TypeBug;
  itemId: string;
}

export function TableAction({ itemId, item }: ITableRowActions) {
  const setDialog = useSetAtom(storeDialog);

  const handleDelete = () => {
    setDialog({
      type: "DELETE",
      show: true,
      data: itemId,
    });
  };

  const handleEdit = () => {
    const { project, ...restData } = item;
    setDialog({
      type: "UPDATE",
      show: true,
      data: restData,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="rounded bg-transparent hover:bg-slate-50 flex h-8 w-8 p-0"
          >
            <MoreHorizontal />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handleEdit}>
          Edit
          <DropdownMenuShortcut>
            <Edit size={16} />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>
            <Trash size={16} color="red" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
