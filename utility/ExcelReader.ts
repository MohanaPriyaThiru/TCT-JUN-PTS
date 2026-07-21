import XLSX from "xlsx";

// export class ExcelReader {
// //   static path = "testdata/utils.xlsx";

export type ExcelData = {
  UserName: string;
  Password: string;
  Result: string;
};
export function reader(): ExcelData[] {
  const workBook = XLSX.readFile("testdata/utils.xlsx");
  const workSheet = workBook.SheetNames[0];
  const dataSheet = workBook.Sheets[workSheet];
  const data: ExcelData[] = XLSX.utils.sheet_to_json(dataSheet);
  return data;
}
// }
