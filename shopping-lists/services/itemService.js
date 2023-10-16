import { sql } from "../database/database.js";

const markCollected = async (id, shopping_list_id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${id} AND shopping_list_id = ${shopping_list_id};`;
};

const addItem = async (shopping_list_id,name) => {

  await sql`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${shopping_list_id}, ${name});`;
  return{ name: name,
    shopping_list_id: shopping_list_id,
  }

};

export { markCollected, addItem };
