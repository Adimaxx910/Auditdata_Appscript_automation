/**
 * Function Name: validateAuditData
 * Purpose:
 *   Performs data validation checks on the staged audit data,
 *   including missing values and basic schema validation.
 *
 * Business Context:
 *   Ensures data quality before audit rules and alerting logic
 *   are applied, preventing incorrect risk detection.
 *
 * Trigger:
 *   Time-driven trigger (Runs after loadAuditCSV).
 *
 * Input:
 *   - Raw audit data from the 'Raw_Data' sheet.
 *
 * Output:
 *   - Updates audit flags for invalid or missing records.
 *
 * Error Handling:
 *   - Logs schema mismatches or validation errors to Error_Log.
 */


function validateAuditData() {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Raw_Data");

    if (!sheet) {
      throw new Error("Sheet 'Raw_Data' not found");
    }

    const data = sheet.getDataRange().getValues();
    const headers = data[0];

    const amountIndex = headers.indexOf("amount");
    const riskFlagIndex = headers.indexOf("audit_risk_flag");

    if (amountIndex === -1 || riskFlagIndex === -1) {
      throw new Error("Required columns missing in Raw_Data");
    }

    for (let i = 1; i < data.length; i++) {
      if (data[i][amountIndex] === "" || data[i][amountIndex] === null) {
        data[i][riskFlagIndex] = "DATA_ISSUE";
      }
    }

    sheet
      .getRange(2, 1, data.length - 1, data[0].length)
      .setValues(data.slice(1));

  } catch (error) {
    logError("validateAuditData", error);
    throw error;
  }
}
