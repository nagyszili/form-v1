import { ACCOUNT_TYPES } from "@/constants/constants";
import { useState } from "react";

export const useFormV1 = () => {
  //TODO: use better state handling
  const [accountType, setAccountType] = useState(ACCOUNT_TYPES[0]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUsedSSL, setIsUsedSSL] = useState(false);
  const [serverAddress, setServerAddress] = useState("");
  const [serverPath, setServerPath] = useState("");
  const [port, setPort] = useState<number | undefined>();

  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = () => {
    if (accountType.value === "Advenced") {
      if (userName && password) {
        const payload = JSON.stringify({
          accountType,
          userName,
          password,
          isUsedSSL,
          serverAddress,
          serverPath,
          port,
        });
        alert(payload);
        console.log(payload);
      } else {
        alert("Please fill in all mandatory fields: User Name and Password.");
      }
    } else {
      if (userName && password) {
        const payload = JSON.stringify({
          accountType,
          userName,
          password,
          serverAddress,
        });
        alert(payload);
        console.log(payload);
      } else {
        alert("Please fill in all mandatory fields: User Name and Password.");
      }
    }
  };

  return {
    accountType,
    userName,
    password,
    isUsedSSL,
    isFormValid,
    serverAddress,
    serverPath,
    port,

    setAccountType,
    setUserName,
    setPassword,
    setIsUsedSSL,
    setServerAddress,
    setServerPath,
    setPort,

    onSubmit,
  };
};
