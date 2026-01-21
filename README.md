# Audit Data Apps Script Automation & BI Dashboards

## Project Overview

This project is an end-to-end automated audit analytics system built using Google Apps Script, Google Sheets, and BI dashboards (Looker Studio and Tableau).

The system ingests audit transaction data received as CSV files, validates and analyzes risk conditions, triggers automated alerts, logs executions and failures, and visualizes insights through dashboards with zero manual intervention.

---

## Business Objective

Traditional audit processes are manual and reactive.  
This project makes audit analytics proactive by:

- Detecting risky transactions early
- Triggering automated alerts
- Maintaining audit and error logs
- Providing management-ready dashboards

---

## Architecture Overview

CSV Audit Data  
↓  
Google Apps Script (Automation Layer)  
↓  
Google Sheets (Staging & Logs)  
↓  
Looker Studio / Tableau Dashboards  

---

## Tech Stack

- Google Apps Script – Automation, ETL, alerting
- Google Sheets – Staging layer and audit logs
- Looker Studio – Automated dashboards
- Tableau – Visual analytics
- CSV Files – Source data
- GitHub – Version control

---

## Automated Workflow

1. Load audit CSV data into Google Sheets
2. Validate data quality and schema
3. Detect audit risks (duplicates, policy violations, thresholds)
4. Send automated email alerts
5. Log executions and failures
6. Auto-refresh dashboards

---

## Repository Structure

Auditdata_Appscript_automation/
├── appscript/
│   ├── loadAuditCSV.gs
│   ├── validateAuditData.gs
│   ├── sendAuditAlert.gs
│   └── logError.gs
│
├── dashboards/
│   ├── looker/
│   │   ├── audit_risk_dashboard.png
│   │   ├── alert_history_dashboard.png
│   │   └── error_monitoring_dashboard.png
│   │
│   └── tableau/
│       └── audit_risk_dashboard.png
│
├── data/
│   └── sample/
│       └── sample_audit_transactions.csv
│
├── .gitignore
└── README.md

---

## Dashboards

### Looker Studio
- Audit Risk KPIs
- Monthly risk trends
- Vendor and employee risk analysis
- Alert history monitoring
- Automation health tracking

### Tableau
- Risk KPIs
- Monthly trends
- Duplicate payment analysis
- Interactive filters

Dashboards are shared via screenshots for security reasons.

---

## Alerting Logic

If high-risk transactions exceed a predefined threshold, an automated email alert is sent to stakeholders.  
If the threshold is not breached, the execution is logged without sending an alert.

---

## Reliability and Error Handling

- Centralized try-catch error handling
- Dedicated error logging table
- No silent failures
- Full execution audit trail

---

## Security Practices

- No credentials stored in code
- Emails replaced with placeholders
- Sample data only (no sensitive information)

---

## Interview Summary

I built an automated audit analytics system using Google Apps Script and BI dashboards that performs daily risk checks, sends alerts, logs executions and failures, and refreshes dashboards automatically.

---

## Author

Adithya G  
Data Analyst | BI & Automation

---

## Future Enhancements

- Machine learning based risk scoring
- BigQuery or PostgreSQL backend
- Slack or Teams alerts
- Incremental data processing
