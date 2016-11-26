# Import of excel-based EM-tyes
The model can import EM-types defined in excel-spreadsheets.
Inside the model define the import like this:
```json
{
    "Equipment_Modules":{
        "Types":{
            "EM_TEST":["import_em", "EM_TEST.xlsx", "EM"]
        }
    }
}
```
Where:
- "import_em" = the type of import
- "EM_TEST.xlsx" = the path to the workbook
- "EM" = the name of the worksheet
 

