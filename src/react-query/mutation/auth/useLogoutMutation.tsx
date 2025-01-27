import { logout } from "@/api/auth/logout";
import { useMutation } from "@tanstack/react-query";

const useLogoutMutation = ({mutationOption={}}) => {

return useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    ...mutationOption
  });
};

export default useLogoutMutation;
