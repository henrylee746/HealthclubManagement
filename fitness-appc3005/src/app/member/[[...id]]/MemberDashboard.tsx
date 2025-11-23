import { Separator } from "@/components/ui/separator";
import { IconDashboardFilled } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "../../../../lib/prisma";

export default async function MemberDashboard({ id }: { id?: string }) {
  const memberId = Number(id);
  const member = await prisma.member.findUnique({
    where: { id: memberId },
    include: {
      metrics: true,
      bookings: {
        include: {
          session: true,
        },
      },
    },
  });
  console.log(member);
  const currWeight = member?.metrics[member.metrics.length - 1].weight;
  const lastSubmitted = member?.metrics[member.metrics.length - 1].timestamp;

  return (
    <Card className="w-full xl:max-w-xl md:max-w-md lg:max-w-lg sm:max-w-sm">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Dashboard
          <IconDashboardFilled />
        </CardTitle>
        <CardDescription>
          Check your metrics and upcoming sessions here
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm">Weight: {currWeight} lbs</p>
        <p className="text-muted-foreground text-sm">
          Last submitted:{" "}
          {new Date(lastSubmitted ?? new Date()).toLocaleDateString("en-CA")}
        </p>
        <Separator className="my-4 mb-6" />
        <div className="flex h-8 items-center space-x-4 text-xs lg:text-sm">
          <div>Weight Goal: lbs</div>
          <Separator orientation="vertical" />
          <ul className="p-2">
            <p className="text-heavy">Past classes: </p>
            {member?.bookings.map((booking) => (
              <div key={booking.sessionId}>
                {booking.createdAt < new Date() ? (
                  <li className="list-disc">{booking.session.name}</li>
                ) : null}
              </div>
            ))}
          </ul>
          <Separator orientation="vertical" />
          <div>
            Upcoming Classes:
            {member?.bookings.map((booking) => (
              <div key={booking.sessionId}>
                {booking.createdAt > new Date() ? (
                  <li className="list-disc">{booking.session.name}</li>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
