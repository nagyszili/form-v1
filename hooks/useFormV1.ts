import { ACCOUNT_TYPES } from "@/constants/constants";
import {
  validateAdvancedFields,
  validateManualFields,
} from "@/utils/validator";
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

  const onSubmit = () => {
    if (!userName || !password) {
      alert("Please fill in all mandatory fields: User Name and Password.");
      return false;
    }

    const advancedFields = {
      serverPath,
      port,
      isUsedSSL,
    };
    const manualFields = {
      userName,
      password,
      serverAddress,
    };

    const isFormValid = validatePayload(
      accountType.value,
      userName,
      password,
      serverAddress,
      serverPath,
      port
    );

    if (accountType.value === ACCOUNT_TYPES[0].value) {
      if (isFormValid) {
        const formData = {
          accountType,
          ...manualFields,
          ...advancedFields,
        };
        const payload = JSON.stringify(formData);

        alert(payload);
        console.log(payload);
      } else {
        alert("Invalid form data. Please check the fields.");
      }
      return;
    }

    if (isFormValid) {
      const formData = {
        accountType,
        ...manualFields,
      };
      const payload = JSON.stringify(formData);

      alert(payload);
      console.log(payload);
    } else {
      alert("Invalid form data. Please check the fields.");
    }
  };

  const validatePayload = (
    accountType: string,
    email: string,
    password: string,
    serverAddress: string,
    serverPath: string,
    port?: number
  ) => {
    if (accountType === ACCOUNT_TYPES[0].value) {
      console.log("port", port);
      return validateAdvancedFields(
        email,
        password,
        serverAddress,
        serverPath,
        port
      );
    }

    return validateManualFields(email, password, serverAddress);
  };

  return {
    accountType,
    userName,
    password,
    isUsedSSL,
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
