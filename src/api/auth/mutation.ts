import { useMutation } from "@tanstack/react-query";
import { TypeLogin, TypeRegister } from "./types";
import { fetchLogout, mutationAuth } from "./fetcher";
import { toast } from "sonner";

type MUTATION_TYPE =
  | { type: "login"; body: TypeLogin }
  | { type: "register"; body: TypeRegister }
  | { type: "logout"; body: string };

const useMutationAuth = () => {
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: ({ type, body }: MUTATION_TYPE) => {
      switch (type) {
        case "login":
          return mutationAuth({
            params: "login",
            body,
          });
        case "register":
          return mutationAuth({
            params: "register",
            body,
          });
        case "logout":
          return fetchLogout();
      }
    },
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });

  return {
    ...mutation,
    serviceAuth: mutation.mutateAsync,
  };
};

export { useMutationAuth };
