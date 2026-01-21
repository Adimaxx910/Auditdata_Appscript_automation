/**
 * Function Name: sendAuditAlert
 * Purpose:
 *   Evaluates audit risk conditions and sends automated
 *   email alerts when predefined risk thresholds are breached.
 *
 * Business Context:
 *   Enables proactive audit monitoring by notifying
 *   stakeholders of high-risk activity in near real-time.
 *
 * Trigger:
 *   Time-driven trigger (Runs daily after validation).
 *
 * Input:
 *   - Validated audit data from the 'Raw_Data' sheet.
 *
 * Output:
 *   - Sends email alert (if threshold breached).
 *   - Logs execution details into 'Audit_Alerts'.
 *
 * Error Handling:
 *   - Logs execution or email failures to Error_Log.
 */

function sendAuditAlert() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const dataSheet = ss.getSheetByName("Raw_Data");
    const logSheet = ss.getSheetByName("Audit_Alerts");

    if (!dataSheet || !logSheet) {
      throw new Error("Required sheet missing");
    }

    const data = dataSheet.getDataRange().getValues();
    const headers = data[0];

    const riskFlagIndex = headers.indexOf("audit_risk_flag");

    if (riskFlagIndex === -1) {
      throw new Error("Required column 'audit_risk_flag' not found");
    }

    let highRiskCount = 0;

    for (let i = 1; i < data.length; i++) {
      if (data[i][riskFlagIndex] === true) {
        highRiskCount++;
      }
    }

    const totalTxns = data.length - 1;
    const riskPct = ((highRiskCount / totalTxns) * 100).toFixed(2);
    const threshold = 50;

    let alertSent = false;

    if (highRiskCount > threshold) {
      MailApp.sendEmail({
        to: "manager@gmail.com",                /**replace with actual Mail */
        subject: "⚠️ Audit Alert: High Risk Transactions",
        body: `High-risk transactions detected: ${highRiskCount}`
      });
      alertSent = true;
    }

    logSheet.appendRow([
      new Date(),
      totalTxns,
      highRiskCount,
      riskPct,
      alertSent
    ]);

  } catch (error) {
    logError("sendAuditAlert", error);
    throw error;
  }
}
