import Table from "@/components/DataTable/Table";
import { users } from "./lib/tblData";
import { get, ApiUrls } from "./lib/apiClient";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ECommerce from "@/components/Dashboard/E-commerce";

export default async function Home() {
  return (
    <main className=" w-full p-4 mt-10">
      <div className="bg-white">
      <div className="flex h-[70px]">
        <DisplaySettingsIcon className="text-orange-500 w-20 h-20" />
        <div className="flex justify-center items-center h-[70px] mt-2">
          <div className="">
            <h3 className=" text-md font-bold	">text1sdsd</h3>
            <h3 className=" text-2xl font-bold	">text1sdsd</h3>
          </div>
        </div>
      </div>

      <div className="tbl">
        <Table />
      </div>
      </div>
      <div className="mt-4">
        <ECommerce />
      </div>
    </main>
  );
}

async function getData() {
  try {
    const response = await get(ApiUrls.TblDataAPI.getTblData);
    debugger;
    return {
      doctorData: response.data.results,
    };
  } catch (error) {
    console.log(error);
  }
}
