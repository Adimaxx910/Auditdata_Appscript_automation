/**
 * Function Name: loadAuditCSV
 * Purpose:
 *   Automatically loads the latest audit CSV file from Google Drive
 *   and writes it into the Google Sheet staging layer (Raw_Data).
 *
 * Business Context:
 *   Acts as the ingestion layer of the audit analytics pipeline,
 *   ensuring fresh transactional data is available daily for analysis.
 *
 * Trigger:
 *   Time-driven trigger (Scheduled daily execution).
 *
 * Input:
 *   - CSV file stored in Google Drive (fixed file name).
 *
 * Output:
 *   - Populates / refreshes the 'Raw_Data' sheet.
 *
 * Error Handling:
 *   - Logs file access or schema-related failures to Error_Log.
 */

function loadAuditCSV() {
  try {
    const fileName = "audit_data.csv";
    const files = DriveApp.getFilesByName(fileName);

    if (!files.hasNext()) {
      throw new Error("CSV file not found: " + fileName);
    }

    const file = files.next();
    const csvData = Utilities.parseCsv(
      file.getBlob().getDataAsString()
    );

    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Raw_Data");

    if (!sheet) {
      throw new Error("Sheet 'Raw_Data' not found");
    }

    sheet.clearContents();
    sheet
      .getRange(1, 1, csvData.length, csvData[0].length)
      .setValues(csvData);

  } catch (error) {
    logError("loadAuditCSV", error);
    throw error;
  }
}
