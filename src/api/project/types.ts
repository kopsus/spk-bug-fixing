import { TypeBug } from "../bug/types";

export type TypeProject = {
  id: string;
  name: string;
  description: string;
  bugs: TypeBug[];
};
