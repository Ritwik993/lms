import { v4 as uuidv4 } from "uuid";

export const generateUniqueNumber = () => {
  return parseInt(uuidv4().replace(/\D/g, "").substr(0, 10), 10);
};

// console.log(generateUniqueNumber()); // Example: 3852094712
