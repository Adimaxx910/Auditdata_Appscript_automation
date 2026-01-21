/**
 * Function Name: logError
 * Purpose:
 *   Centralized error logging utility to capture and persist
 *   automation failures across the audit analytics pipeline.
 *
 * Business Context:
 *   Prevents silent failures by maintaining an audit trail
 *   of errors for monitoring and troubleshooting.
 *
 * Trigger:
 *   Invoked internally by other automation functions.
 *
 * Input:
 *   - Function name where the error occurred.
 *   - Error object containing message and stack trace.
 *
 * Output:
 *   - Appends error details into the 'Error_Log' sheet.
 */


function logError(functionName, error) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const errorSheet = ss.getSheetByName("Error_Log");

  errorSheet.appendRow([
    new Date(),
    functionName,
    error.message,
    error.stack
  ]);
}
