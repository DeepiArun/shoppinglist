// statistics.js

import { sql } from "../database/database.js"; 

// Get shopping list count
const getShoppingListCount = async () => {
  const result = await sql`
    SELECT COUNT(*) AS count 
    FROM shopping_lists`;
  return result.count;
}
// Get shopping list items count 
const getShoppingListItemCount = async () => {
 const result = await sql`
    SELECT COUNT(*) AS count
    FROM shopping_list_items`;  
 return result.count;

}
// Get statistics
const getStatistics = async() => {
  const shoppingListCount = await getShoppingListCount();
  const shoppingListItemCount = await getShoppingListItemCount();

  if(shoppingListCount === 0) 
  {
   return "No shopping lists yet";
  } else
   {
    return `Shopping Lists: ${shoppingListCount}, Shopping List Items: ${shoppingListItemCount}`;
    
  }

};

export { getStatistics };

