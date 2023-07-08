import EmptyImage from "../../assets/illustrations/Void";
import { Text } from "../Text";

interface EmptyProps {
  description: string;
}

export function Empty({ description }: EmptyProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <EmptyImage />
      <Text>{description}</Text>
    </div>
  );
}
