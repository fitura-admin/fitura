import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  selectNavigation,
  setModalOpen,
} from "~/src/app/store/reducers/navigation.slice";
import InputUtils from "~/src/shared/lib/utils/input.utils";
import { emailSubscibe } from "../api/subscribe.api";

const errorText = "Enter a valid email";

export const useSubscribeModal = () => {
  const dispatch = useAppDispatch();
  const { modalOpen } = useAppSelector(selectNavigation);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onClose = useCallback(() => {
    dispatch(setModalOpen(false));
  }, [dispatch]);

  const emailValidation = useCallback((): boolean => {
    if (!InputUtils.isValidEmail(email)) {
      setError(errorText);
      return false;
    }
    setError(null);
    return true;
  }, [email]);

  const buttonClick = useCallback(async () => {
    if (loading) return;
    try {
      setLoading(true);
      if (!emailValidation()) return;
      await emailSubscibe(email);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Our server is not responding now :(");
    } finally {
      setLoading(false);
    }
  }, [loading, emailValidation, email]);

  return {
    email,
    setEmail,
    error,
    onClose,
    buttonClick,
    modalOpen,
    loading,
    success,
  };
};
