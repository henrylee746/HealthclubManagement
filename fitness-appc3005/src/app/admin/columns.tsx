"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/*For the Dashboard cardboard, no column definition needed 
as it only uses a Separator*/
export type Health = {
  id: string;
  date: string;
  weight: number;
  goal: number;
  classes: number;
  sessions: string[];
};

export type Session = {
  id: string;
  date: string;
  title: string;
  capacity: number;
  trainer: string;
  room: string;
};

export const sessionColumns: ColumnDef<Session>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Edit Room
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "title",
    header: "Session",
  },
  {
    accessorKey: "capacity",
    header: "Space",
  },
  {
    accessorKey: "trainer",
    header: "Trainer",
  },
  {
    accessorKey: "room",
    header: "Room",
  },
];
