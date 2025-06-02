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
      return <p className="text-nowrap">BUG-{row.getValue("id")}</p>;
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

      if (priority < 40) {
        return (
          <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded">
            Very Low
          </span>
        );
      } else if (priority >= 40 && priority < 55) {
        return (
          <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">
            Low
          </span>
        );
      } else if (priority >= 55 && priority < 70) {
        return (
          <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded">
            Medium
          </span>
        );
      } else if (priority >= 70 && priority < 85) {
        return (
          <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded">
            High
          </span>
        );
      } else {
        return (
          <span className="inline-block bg-red-700 text-white px-2 py-1 rounded">
            Urgent
          </span>
        );
      }
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
