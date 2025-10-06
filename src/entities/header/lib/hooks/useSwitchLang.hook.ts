import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const useSwitchLang = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const changeLanguage = useCallback(
    (newLanguage: LangT) => {
      const segments = pathname.split("/");
      segments[1] = newLanguage;
      const newPath = segments.join("/");

      push(newPath);
    },
    [push, pathname],
  );

  return changeLanguage;
};
