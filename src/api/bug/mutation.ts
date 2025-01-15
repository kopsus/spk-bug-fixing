import { useMutation } from "@tanstack/react-query";
import { TypeBug } from "./types";
import { toast } from "sonner";
import { createBug, deleteBug, updateBug } from "./fetcher";
import { useQuerBugs } from "./queries";

interface MUTATION_TYPE {
  type: "create" | "update" | "delete";
  body?: TypeBug;
  id?: string;
}

const useMutationBug = () => {
  const { refetch } = useQuerBugs();
  const mutation = useMutation({
    mutationKey: ["mutation bug"],
    mutationFn: ({ body, type, id }: MUTATION_TYPE) => {
      if (type === "create" && body) {
        return createBug(body);
      } else if (type === "update" && body && id) {
        return updateBug({ body, id });
      } else if (type === "delete" && id) {
        return deleteBug(id);
      } else {
        throw new Error("Invalid input data for mutation");
      }
    },
    onSuccess: (res) => {
      toast.success(res.message);
      refetch();
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });

  return {
    ...mutation,
    serviceBug: mutation.mutateAsync,
  };
};

export { useMutationBug };
