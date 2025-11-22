"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Header from "../../components/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconCalendarUser } from "@tabler/icons-react";
import { DataTable } from "../member/data-table";
import { sessionColumns, Session } from "./columns";
import { useState, useEffect } from "react";

async function getSessions(): Promise<Session[]> {
  return [
    {
      id: "728ed52f",
      date: new Date().toLocaleDateString("en-CA"),
      title: "Yoga Session",
      capacity: 50,
    },
    {
      id: "728edawr",
      date: new Date().toLocaleDateString("en-CA"),
      title: "Chest Day",
      capacity: 2,
    },
  ];
}

export default function Member() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [trainer, setTrainer] = useState("trainer1");

  useEffect(() => {
    getSessions().then(setSessions);
  }, []);

  return (
    <div className="dark min-h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <h1 className="max-w-s mb-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Trainers
      </h1>
      <Select
        defaultValue="trainer1"
        onValueChange={(value) => setTrainer(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a member" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Members</SelectLabel>
            <SelectItem value="trainer1">Coach Chris</SelectItem>
            <SelectItem value="trainer2">Instructor Mary</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Card className="w-full lg:max-w-2xl md:max-w-md sm:max-w-sm">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            Group Class Registration
            <IconCalendarUser />
          </CardTitle>
          <CardDescription>
            Register for upcoming group sessions here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={sessionColumns} data={sessions} />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
