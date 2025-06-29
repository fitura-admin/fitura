import { useCallback, useEffect, useState } from "react";
import { subscripeEmail } from "~/src/entities/demo/lib/api/demo.api";

export const useEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = useCallback(() => {
    if (!email.includes("@")) return false;

    const [_, domain] = email.split("@");
    if (!domain.includes(".")) return false;

    return true;
  }, [email]);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      if (!validateEmail()) {
        setError("Invalid email");
        return;
      }

      await subscripeEmail(email);
      setError(null);
    } catch (err) {
      console.error(error);
      setError("Something went wrong. Try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      validateEmail();
    }
  }, [email, error]);

  return {
    setEmail,
    email,
    handleSubscribe,
    loading,
    error,
  };
};
