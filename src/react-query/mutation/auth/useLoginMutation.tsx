import { login } from "@/api/auth/login";
import { useMutation } from "@tanstack/react-query";

const useLoginMutation = ({mutationOptions={}}) => {
  return  useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    ...mutationOptions
  });
};

export default useLoginMutation;
