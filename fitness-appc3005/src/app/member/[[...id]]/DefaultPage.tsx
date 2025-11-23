import { IconHandFinger } from "@tabler/icons-react";

export default function DefaultPage() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <IconHandFinger />
      <p className="text-muted-foreground text-sm">Select a member here</p>
    </div>
  );
}
