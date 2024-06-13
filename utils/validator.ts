export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password: string) {
  return password.length > 6;
}

export function validateServerAddress(serverAddress: string) {
  try {
    if (serverAddress === "") {
      return true;
    }
    new URL(serverAddress);
    return true;
  } catch (error) {
    return false;
  }
}

export function validateServerPath(serverPath: string) {
  if (serverPath === "") {
    return true;
  }
  const re = /^[a-zA-Z0-9/]+$/;
  return re.test(serverPath);
}

export function validatePort(port: number) {
  return port > 0 && port < 65536;
}

export function validateUserName(userName: string) {
  return userName.length > 6;
}

export function validateManualFields(
  userName: string,
  password: string,
  serverAddress: string
) {
  return (
    validateUserName(userName) &&
    validatePassword(password) &&
    validateServerAddress(serverAddress)
  );
}

export function validateAdvancedFields(
  userName: string,
  password: string,
  serverAddress: string,
  serverPath: string,
  port?: number
) {
  return (
    validateManualFields(userName, password, serverAddress) &&
    validateServerPath(serverPath) &&
    (port !== undefined ? validatePort(port) : true)
  );
}
