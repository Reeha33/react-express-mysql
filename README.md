# Integrate React with Node.js Express & MySQL (run on same Server/Port)
A complete, enterprise-grade deployment of a full-stack Task Manager application (React frontend, Node.js/Express backend, and Azure SQL Database). This repository showcases an end-to-end continuous integration and continuous delivery (CI/CD) system combined with automated infrastructure configuration and cloud security assurance tools.
**1.Key Architectural Features**
Multi-Stage Containerization: Optimized Docker blueprints minimize final runtime footprints by decoupling production build files from bulky compiling engines.

Infrastructure as Code (IaC): Automated cloud workspace instantiation managed globally through a state-locked Terraform topology.

Continuous Integration Orchestration: A native multi-stage YAML pipeline running inside Azure DevOps enforces validation patterns automatically with every code change.

Integrated DevSecOps Quality Gates: Embedded automated security checks validate system health and block defective additions across three distinct vulnerability axes (SAST, SCA, and DAST).
**2.Technology Stack & Cloud Ecosystem**
Frontend Hub: React, Static Web Apps Distribution Network

Backend Runtime: Node.js, Express, Azure Linux App Services

Data Persistence Tiers: Azure SQL Database Serverless Core

Registry Management: Azure Container Registry (ACR)

Automation Engines: Terraform Cloud Engine, Azure DevOps Pipelines

Security Shield Frameworks: SonarQube Engine, Snyk Dependency Index, OWASP ZAP Web Scanner
**3.Repository Structural Overview**
├── .github/                  
├── node-express-server/       
│   ├── Dockerfile             
│   └── server.js             
├── react-client/              
│   ├── Dockerfile            
│   └── azure-pipelines.yml    
├── terraform/                 
│   ├── main.tf                
│   ├── variables.tf           
│   └── outputs.tf            
└── README.md                  
**4.Deployment and Setup Runbook**
**Part 1: Initializing Platform Workspace Foundations**
1. Source Control Branch Management
Enforce standard enterprise Git Flow workflows to manage software change risks safely. Code updates stream across separate paths to isolate production lines from active changes:

main: Stable, production-ready release environment.

develop: Integration workspace for feature updates.

feature/*: Short-lived branches dedicated to active development tasks.
**2. Local Infrastructure Ingestion via Terraform**
Deploy your core platform assets automatically using a declarative, state-locked approach. Run these commands inside the terraform/ directory
terraform init

terraform plan -out=tfplan

terraform apply "tfplan"

**Part 2: CI/CD Pipeline Orchestration Layout**
The automation layer is driven by a multi-stage azure-pipelines.yml workflow configuration. It processes compilation assets sequentially and applies code validation checks before promotion:

[Source Commit] ──> [Build & Validate] ──> [SAST Code Audit] ──> [SCA Dependency Check] ──> [ACR Container Push] ──> [DAST Web Analysis] ──> [Production Deploy]

**1. Multi-Stage Pipeline Execution Gates**
Stage A: Build & Package Validation: Compiles full-stack assets within isolated build workers to verify code syntax and integrity.
Stage B: Code Quality Assessment (SAST): Intercepts compilation streams to enforce architectural quality gates, running static analysis inside a custom cloud container instance.
Stage C: Dependency Remediation (SCA): Scans structural lockfiles against a vulnerabilities database to block vulnerable dependencies before image packaging begins.
Stage D: Registry Promotion: Packages application components using multi-stage Dockerfiles and pushes versioned snapshots into the Azure Container Registry.
Stage E: Runtime Application Security Testing (DAST): Performs black-box security scanning against target endpoints to audit exposed interface parameters.
Stage F: Automated Release Deployment: Deploys verified software packages directly to Azure Static Web Apps and Azure App Services.

**Enterprise Security Compliance Verification**

Every pipeline run logs execution state telemetry to verify that code meets security policy requirements before moving to staging environments:
SonarQube Quality Gate Status: Passed builds require zero newly introduced code smells, structural flaws, or security vulnerabilities (New Issues = 0).
Snyk Dependency Status: Pipeline checks block deployment if vulnerable dependencies or license violations are found within source package definitions.
OWASP ZAP Dynamic Audit Report: Automatically logs dynamic interface traffic to confirm that production runtimes are resilient against active attack methods.

For more detail, please visit:
> [How to integrate React with Node.js Express on same Server/Port](https://bezkoder.com/integrate-react-express-same-server-port/)

> [React (Components) CRUD example to consume Web API](https://bezkoder.com/react-crud-web-api/)

> [Build Node.js Rest APIs with Express, Sequelize & MySQL](https://bezkoder.com/node-js-express-sequelize-mysql/)

More Practice:
> [React (Hooks) CRUD example to consume Web API](https://bezkoder.com/react-hooks-crud-axios-api/)

> [React Material UI examples with a CRUD Application](https://bezkoder.com/react-material-ui-examples-crud/)

> [Server side Pagination in Node.js with Sequelize and MySQL](https://bezkoder.com/node-js-sequelize-pagination-mysql/)

> [Deploying/Hosting Node.js app on Heroku with MySQL database](https://bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)

Associations:
> [Sequelize Associations: One-to-Many Relationship example](https://bezkoder.com/sequelize-associate-one-to-many/)

> [Sequelize Associations: Many-to-Many Relationship example](https://bezkoder.com/sequelize-associate-many-to-many/)

Fullstack with Node.js Express:
> [React.js + Node.js Express + MySQL](https://bezkoder.com/react-node-express-mysql/)

> [React.js + Node.js Express + PostgreSQL](https://bezkoder.com/react-node-express-postgresql/)

> [React.js + Node.js Express + MongoDB](https://bezkoder.com/react-node-express-mongodb-mern-stack/)

Security:
> [React + Node.js Express + MySQL: User Authentication with JWT example](https://www.bezkoder.com/react-express-authentication-jwt/)

> [React + Node.js Express + MongoDB: User Authentication with JWT example](https://www.bezkoder.com/react-node-mongodb-auth/)

Serverless:
> [React Firebase CRUD App with Realtime Database](https://bezkoder.com/react-firebase-crud/)

> [React Firestore CRUD App example | Firebase Cloud Firestore](https://bezkoder.com/react-firestore-crud/)
