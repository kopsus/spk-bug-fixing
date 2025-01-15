import { TypeBug } from "@/api/bug/types";
import { atom } from "jotai";

type IDialog<T> = {
  show: boolean;
  type: "CREATE" | "UPDATE" | "DELETE";
  data: T | null;
};

const storeDialog = atom<IDialog<any>>({
  show: false,
  type: "CREATE",
  data: null,
});

export { storeDialog };
