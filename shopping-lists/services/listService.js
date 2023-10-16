import { sql } from "../database/database.js";

const deactivateByID = async (id) => {
  await sql`
    UPDATE shopping_lists SET active = false WHERE id = ${id};
  `;
};

const create = async (name) => {
  await sql`
    INSERT INTO shopping_lists (name) VALUES (${name});
  `;
};

const findAllLists = async () => {
  const rows = await sql`
    SELECT * FROM shopping_lists WHERE active = true;`;

    return rows;
};
    

const findList = async (id) => {
  const rows = await sql`
    SELECT * FROM shopping_lists WHERE id = ${id};`;

  if (rows && rows.length > 0)
   {
    return rows[0];
  }

  return { id: 0, name: "Unknown" };
};

const findItems = async (shopping_list_id) => {
  const rows= await sql`
    SELECT * FROM shopping_list_items WHERE shopping_list_id = ${shopping_list_id} ORDER BY collected,name;`;

  return rows;
};

export { deactivateByID, create, findAllLists, findList, findItems };

