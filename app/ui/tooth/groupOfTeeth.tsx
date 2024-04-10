import { FunctionComponent } from "react";
import Tooth from "./tooth";

interface ToothType {
  id: number;
  state: string;
};
type GroupOfTeethProps = {
    arrayTeeth: ToothType[];
  };

export const GroupOfTeeth: FunctionComponent<GroupOfTeethProps> =({arrayTeeth}) => {
  return (
    <div className="flex gap-3">
      {arrayTeeth.map((tooth:ToothType) => (        
        <div key={tooth.id} className="">
          <span className="flex justify-center">{tooth.id}</span>
          <Tooth />
        </div>
      ))}
    </div>
  );
};
