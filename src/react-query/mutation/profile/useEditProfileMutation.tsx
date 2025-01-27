import { fetchUpdateProfile } from "@/api/profile/edit";
import { useMutation } from "@tanstack/react-query";


const useEditProfileMutation = ({mutationOptions={}}) => {
  return  useMutation({
    mutationKey: ['edit-profile'],
    mutationFn: fetchUpdateProfile,
    ...mutationOptions
  });
};

export default useEditProfileMutation;
