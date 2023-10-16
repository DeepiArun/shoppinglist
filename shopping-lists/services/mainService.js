import { sql } from "../database/database.js";

const checkList = async () => {
const rows = await sql`SELECT COUNT(*) FROM shopping_lists`;
  if (rows && rows.length > 0) {
    return rows[0].count;
  }
  return 0;
};

const checkItem = async () => {
  const rows = await sql`SELECT COUNT(*) FROM shopping_list_items`;
  
  if (rows && rows.length > 0) {
    return rows[0].count;
  }
  return 0;
};

export { checkList, checkItem };