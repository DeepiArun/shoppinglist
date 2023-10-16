import { renderFile } from "../deps.js";
import * as mainService from "../services/mainService.js";
import { getStatistics } from '../services/statistics.js';

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const showMain = async (_request) => {
  const statistics = await getStatistics(); 

  const data = {
    flag: true,
    listCount: await mainService.checkList(),
    itemCount: await mainService.checkItem(),
    statistics,
  };
  console.log(data.flag);
 console.log(data.listCount);
  if (data.listCount > 0)
   {
    data.flag = false;
  }
  return new Response(await renderFile("mainpage.eta", data), responseDetails);
};

export { showMain };
