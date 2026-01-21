🔍 Audit Data Apps Script Automation & BI Dashboards
📌 Project Overview

This project demonstrates an end-to-end automated audit analytics system built using Google Apps Script, Google Sheets, and BI dashboards (Looker Studio & Tableau).

The system ingests audit transaction data received as CSV files, applies audit validation and risk logic, triggers automated alerts, logs executions and failures, and visualizes insights through interactive dashboards — all with zero manual intervention.

🎯 Business Objective

Traditional audit processes are often manual and reactive.
This project aims to make audit analytics proactive, automated, and transparent by:

Detecting risky transactions early

Alerting stakeholders automatically

Maintaining a full audit trail

Providing management-ready dashboards

🏗️ Architecture Overview
CSV Audit Data (Email / Drive)
        ↓
Google Apps Script (Automation Layer)
  - Data ingestion
  - Validation checks
  - Risk detection
  - Email alerts
  - Execution & failure logging
        ↓
Google Sheets (Staging & Audit Layer)
  - Raw_Data
  - Audit_Alerts
  - Error_Log
        ↓
BI Dashboards
  - Looker Studio
  - Tableau

⚙️ Tech Stack

Google Apps Script – ETL, automation, alerting

Google Sheets – Staging, audit trail, logs

Looker Studio – Automated dashboards

Tableau – Advanced visual analytics

CSV Files – Source data

GitHub – Version control & documentation

🔁 Automated Workflow

Data Ingestion

Loads latest audit CSV file into Google Sheets (Raw_Data)

Data Validation

Schema checks

Missing or invalid data handling

Audit Risk Detection

Duplicate payments

Weekend transactions

Threshold-based risk evaluation

Automated Alerts

Email alerts triggered when risk exceeds threshold

Execution Logging

Every run logged to Audit_Alerts

Failures logged to Error_Log

Dashboard Auto-Refresh

Looker Studio dashboards update automatically when data changes

📁 Repository Structure
Auditdata_Appscript_automation/
│
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
│       ├── audit_risk_dashboard.png
│
├── data/
│   └── sample/
│       └── sample_audit_transactions.csv
│
├── .gitignore
└── README.md


📊 Dashboards
🔹 Looker Studio

Audit Risk KPIs

Monthly risk trends

Vendor & employee risk analysis

Alert history monitoring

Error & automation health tracking



(Dashboards are showcased via screenshots for security reasons.)


👤 Author

Adithya G
Data Analyst | BI & Automation Enthusiast


🚀 Future Enhancements

Machine-learning-based risk scoring

BigQuery / PostgreSQL backend

Slack / Teams alerts

Incremental data loads

Role-based dashboard access
