"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeBug } from "@/api/bug/types";
import { TableAction } from "./table-actions";

export const Columns = ({
  showAction = true, // Default ke true
}: {
  showAction?: boolean;
} = {}): ColumnDef<TypeBug>[] => [
  {
    accessorKey: "id",
    header: () => <p className="text-nowrap">BUG ID</p>,
    cell: ({ row }) => {
      return <p className="text-nowrap">{row.getValue("id")}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "skor",
    header: "Skor",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    header: "Priority",
    cell: ({ row }: { row: { getValue: <T>(key: string) => T } }) => {
      const priority = row.getValue<number>("skor");
      return priority < 30 ? (
        <span className="inline-block bg-slate-200 dark:text-black px-2 py-1 rounded">
          Low
        </span>
      ) : priority >= 30 && priority < 60 ? (
        <span className="inline-block bg-amber-200 dark:text-black px-2 py-1 rounded">
          Medium
        </span>
      ) : priority >= 60 && priority < 80 ? (
        <span className="inline-block bg-orange-400 text-white px-2 py-1 rounded">
          High
        </span>
      ) : (
        <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">
          Urgent
        </span>
      );
    },
  },
  ...(showAction
    ? [
        {
          accessorKey: "Action",
          header: "Action",
          cell: ({ row }: { row: { original: TypeBug } }) => {
            const item = row.original;
            const itemId = row.original.id;
            return <TableAction item={item} itemId={itemId} />;
          },
        },
      ]
    : []),
];
