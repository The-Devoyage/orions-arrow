export const getProperty = <T extends {}, K extends keyof T>(
  obj: T | null | undefined,
  property: K
) => {
  if (obj) {
    if (!(property in obj)) {
      throw new Error(
        `Property '${property.toString()}' was not found in this request. Check the query to ensure you have requested this property from the server.`
      );
    }
    return obj[property];
  }
  throw new Error("Object not provided.");
};

export const isValidObjectId = (v?: string) => {
  if (v && v.match(/^[0-9a-fA-F]{24}$/)) {
    return true;
  }
  return false;
};
