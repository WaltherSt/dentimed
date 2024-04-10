"use client";
import { GroupOfTeeth } from "@/app/ui/tooth/groupOfTeeth";
import { useTeethState } from "@/store/store";

export default function Page() {
  const { teeth } = useTeethState();

  return (
    <div>
      <div className="flex gap-8 justify-center mb-5">
        <GroupOfTeeth arrayTeeth={teeth.slice(0, 8)} />
        <GroupOfTeeth arrayTeeth={teeth.slice(8, 16)} />
      </div>
      <div className="flex gap-8 justify-center mb-5">
        <GroupOfTeeth arrayTeeth={teeth.slice(16, 21)} />
        <GroupOfTeeth arrayTeeth={teeth.slice(21, 26)} />
      </div>
      <div className="flex gap-8 justify-center mb-5">
        <GroupOfTeeth arrayTeeth={teeth.slice(26, 31)} />
        <GroupOfTeeth arrayTeeth={teeth.slice(31, 36)} />
      </div>
      <div className="flex gap-8 justify-center mb-5">
        <GroupOfTeeth arrayTeeth={teeth.slice(36, 41)} />
        <GroupOfTeeth arrayTeeth={teeth.slice(41, 56)} />
      </div>
    </div>
  );
}
