import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { sessionColumns, Session } from "./columns";
import { IconCalendarUser } from "@tabler/icons-react";
import { DataTable } from "./data-table";
import prisma from "../../../lib/prisma";

export default async function GroupClass() {
  const sessions = await prisma.session.findMany({
    where: {
      dateTime: {
        gte: new Date(),
      },
    },
    include: {
      //Joins with room and trainer tables
      room: true,
      trainer: true,
    },
  });

  const trainers = await prisma.trainer.findMany();

  const filterSession = async (name: string) => {
    "use server";
    return await prisma.session.findMany({
      where: {
        name,
      },
    });
  };

  return (
    <Card className="w-full xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Upcoming Group Classes
          <IconCalendarUser />
        </CardTitle>
        <CardDescription>
          Filter by trainer using the dropdown below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={sessionColumns}
          data={sessions}
          filterSession={filterSession}
        />
      </CardContent>
    </Card>
  );
}
