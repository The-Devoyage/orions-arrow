export const getProperty = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
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

export const removeUnusedProperties = <T extends Record<string, unknown>>(
  obj: Record<string, unknown>
): T => {
  const objKeys = Object.keys(obj);
  let filteredObj: Record<string, unknown> = {};

  for (const key of objKeys) {
    if (obj[key] === undefined || obj[key] === "" || obj[key] === null) {
      delete obj[key];
      delete filteredObj[key];
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      const filteredNested = removeUnusedProperties(
        obj[key] as Record<string, unknown>
      );
      filteredObj[key] = { ...filteredNested };
    } else if (typeof obj[key] === "object" && Array.isArray(obj[key])) {
      const array = [];
      for (const o of obj[key] as []) {
        if (typeof o === "object" && !Array.isArray(o)) {
          array.push(
            removeUnusedProperties({ ...(o as Record<string, unknown>) })
          );
        }
      }
      filteredObj[key] = array;
    } else {
      filteredObj = { ...obj };
    }
  }
  return filteredObj as T;
};
