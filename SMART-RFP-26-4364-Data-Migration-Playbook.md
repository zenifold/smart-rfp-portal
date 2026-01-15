# Data Migration Playbook
## RFP 26-4364 - ERP System Upgrade Consultant

**Purpose:** This playbook details our Data Hygiene First methodology, ensuring SMART's data migration to new ERP system is accurate, complete, and FTA-compliant.

---

## Executive Summary

"Garbage in, garbage out" destroys ERP projects.

Industry statistics on data migration failures:
- **60%** of ERP projects experience data migration issues
- **40%** have data quality problems discovered post-go-live
- **30%** require expensive data cleansing after implementation
- **25%** experience critical business disruptions due to data errors

Most vendors promise to clean data during migration. They rarely deliver. Rushed timelines, underestimating data complexity, and lack of transit industry expertise lead to incomplete migrations.

Our approach is fundamentally different: **Data Hygiene First**.

We clean SMART's data BEFORE vendor ever touches it. We institute rigorous data governance. We validate migration accuracy through three-phase testing. We don't hope data quality will be good. We ensure it.

This playbook details our comprehensive data migration strategy.

---

## Data Hygiene First Methodology

### Our Three-Phase Approach

| Phase | Purpose | Timing | Ownership |
|-------|---------|----------|-----------|
| **Phase 1: Data Quality Assessment** | Identify data issues across all source systems | Month 5 | My Team (Max + Business Analyst/Trainer) |
| **Phase 2: Data Cleansing & Governance** | Clean data, establish governance standards | Months 6-8 | My Team (Max + Business Analyst/Trainer) |
| **Phase 3: Migration & Validation** | Execute migration, validate accuracy | Months 12-14 | Vendor (with my team oversight) |

### Key Differentiators

**Traditional Vendor Approach:**
- Vendor promises to clean data during migration
- Data quality issues discovered post-go-live
- Expensive emergency data cleansing required
- Business disruptions and user frustration

**Our Data Hygiene First Approach:**
- My team assesses data quality before vendor engagement
- Data cleaned BEFORE vendor import
- Three-phase migration testing (test, pilot, production)
- Data governance standards established for long-term quality

---

## Phase 1: Data Quality Assessment (Month 5)

### 1.1 Scope: Data Sources & Domains

**Primary Data Sources:**

| Source System | Owner | Data Domains | Priority |
|---------------|--------|--------------|----------|
| **Current ERP** (if exists) | Finance Team | General ledger, accounts payable/receivable, budget, grants | High |
| **Trapeze** (Transit Operations) | Operations Team | Routes, schedules, ridership, service metrics | High |
| **ADP** (HR/Payroll) | HR Team | Employee records, time & attendance, benefits | High |
| **Maintenance System** (if separate) | Maintenance Team | Work orders, parts inventory, asset registry | High |
| **Procurement System** (if separate) | Procurement Team | Vendor master files, purchase orders, contracts | Medium |
| **Spreadsheets/Manual Systems** | Various Departments | Shadow ERP data, workarounds, informal processes | Medium |
| **Legacy Systems** | IT Team | Historical data, archived records | Low |

**Data Domains to Migrate:**

1. **Financial Data**
   - Chart of accounts
   - General ledger transactions
   - Budget entries and allocations
   - Grant fund balances and allocations
   - Accounts payable and receivable
   - Vendor master files

2. **Operations Data**
   - Route definitions and schedules
   - Rider counts and service metrics
   - Fare collection data
   - Vehicle utilization data

3. **Human Resources Data**
   - Employee master files
   - Organizational structure
   - Job classifications and pay rates
   - Time and attendance history

4. **Asset Management Data**
   - Vehicle registry (buses, paratransit vehicles)
   - Equipment and parts inventory
   - Maintenance history
   - Depreciation schedules

5. **Procurement Data**
   - Vendor master files
   - Purchase order history
   - Contract records
   - DBE certification data

---

### 1.2 Data Quality Dimensions

**We assess data quality across 6 dimensions:**

| Dimension | Definition | SMART Context | Assessment Method |
|------------|-------------|----------------|-------------------|
| **Accuracy** | Data is correct and reflects reality | Grant fund allocations, vehicle IDs, vendor addresses | Sample validation against source documents |
| **Completeness** | No missing or null values where required | Required fields: grant codes, employee IDs, vendor addresses | Automated completeness checks |
| **Consistency** | Data is consistent across systems | Same vendor ID in procurement and finance systems | Cross-system validation |
| **Timeliness** | Data is current and up-to-date | Employee terminations, vendor status changes, vehicle dispositions | Date-based analysis |
| **Validity** | Data conforms to defined rules and formats | Email format, phone numbers, tax ID numbers | Pattern matching and validation |
| **Uniqueness** | No duplicate records | Vendor master files, employee records, vehicle registry | Duplicate detection algorithms |

---

### 1.3 Data Quality Assessment Process

**Step 1: Data Profiling**

**Activity:** Automated analysis of each data domain to understand structure, patterns, and quality issues.

**Tools:**
- Open source: OpenRefine, Data Cleaner, Apache NiFi
- Commercial: Talend Data Quality, Informatica Data Quality
- Custom SQL queries and Python scripts

**Team Involvement:**
- **Max (Lead Consultant)**: Provides oversight, validates approach
- **Business Analyst/Trainer**: Executes data profiling, prepares reports

**Deliverable:** Data Profiling Report per Domain

**Example Output (Vendor Master Files):**
```
Total Records: 2,847
Complete Records: 2,631 (92.4%)
Issues Found:
- Missing Tax ID: 156 records (5.5%)
- Duplicate Addresses: 89 records (3.1%)
- Invalid Email Format: 234 records (8.2%)
- Missing DBE Certification: 312 records (11.0%)
- Inactive Vendors: 187 records (6.6%)
```

---

**Step 2: Data Sampling & Validation**

**Activity:** Manual review of data samples to validate automated profiling findings.

**Sample Size:** 5% of records per domain, minimum 50 records

**Validation Methods:**
- Compare to source documents (invoices, contracts, employee files)
- Cross-reference with external sources (vendor websites, government databases)
- Interview subject matter experts
- Validate business logic (grant calculations, depreciation schedules)

**Deliverable:** Data Validation Report per Domain

---

**Step 3: Business Rule Definition**

**Activity:** Define business rules that data must satisfy for FTA compliance and operational effectiveness.

**Example Business Rules:**

| Data Domain | Business Rule | Rationale |
|-------------|----------------|-----------|
| Vendor Master Files | Tax ID required for all vendors | FTA grant reporting requirements |
| Grant Fund Allocations | Grant code required on all financial transactions | FTA cost allocation requirements |
| Employee Records | Employment date must be <= current date | Data integrity |
| Vehicle Registry | Vehicle ID must be unique across systems | Operational efficiency |
| Time & Attendance | Hours worked <= 24 hours/day | Data validation |
| Budget Entries | Budget cannot be negative | Financial integrity |

**Deliverable:** Business Rules Documentation

---

### 1.4 Data Quality Assessment Deliverables

**Per Data Domain:**
1. **Data Profiling Report** - Automated analysis findings
2. **Data Validation Report** - Manual validation results
3. **Business Rules Violations Report** - Records violating business rules
4. **Data Cleansing Recommendations** - Specific actions to fix issues

**Executive Summary:**
1. **Overall Data Quality Scorecard** - Aggregated quality metrics
2. **Critical Data Issues** - High-priority issues requiring immediate action
3. **Data Cleansing Roadmap** - Timeline and resource requirements
4. **Risk Assessment** - Data quality risks to ERP implementation

**Timeline:** 4 weeks

---

## Phase 2: Data Cleansing & Governance (Months 6-8)

### 2.1 Data Cleansing Prioritization

**We prioritize data cleansing based on business impact and FTA compliance:**

| Priority | Data Domains | Rationale | Timeline |
|----------|---------------|-----------|----------|
| **Critical** | Grant fund allocations, vendor master files, employee records | FTA compliance, operational dependencies | Weeks 1-4 |
| **High** | Vehicle registry, parts inventory, work orders | Operations critical path | Weeks 5-7 |
| **Medium** | Budget entries, purchase orders, contracts | Financial operations | Weeks 8-10 |
| **Low** | Historical data, archived records | Reference purposes | Weeks 11-12 |

---

### 2.2 Data Cleansing Methodology

**For Each Data Domain:**

**Step 1: Duplicate Identification & Resolution**

**Activity:** Identify and resolve duplicate records.

**Methods:**
- **Fuzzy Matching**: Identify near-duplicates (e.g., "ABC Corp" vs. "ABC Corporation")
- **Deterministic Matching**: Identify exact duplicates
- **Manual Review**: Human review of potential duplicates

**Example (Vendor Master Files):**
```
Potential Duplicate Pairs:
1. "ABC Corporation" (ID: 1234) vs. "ABC Corp" (ID: 5678)
   - Same Address: 123 Main St, Detroit, MI 48201
   - Same Tax ID: 12-3456789
   - Decision: Merge to ID 1234 (more complete record)
   
2. "John Smith" (ID: EMP001) vs. "J. Smith" (ID: EMP099)
   - Same Social Security Number
   - Decision: Merge to ID: EMP001 (active employee)
```

**Deliverable:** Duplicate Resolution Log

---

**Step 2: Missing Data Completion**

**Activity:** Complete missing required data fields.

**Sources for Missing Data:**
- Original source documents (contracts, invoices, employee files)
- External databases (vendor websites, government databases)
- Subject matter expert interviews
- Business process documentation

**Example (Vendor Master Files):**
```
Missing Tax IDs (156 records):
- Source 1: Vendor contracts (42 records)
- Source 2: Vendor invoices (78 records)
- Source 3: Online vendor lookup (23 records)
- Unable to locate: 13 records → Flag for manual vendor contact
```

**Deliverable:** Missing Data Completion Log

---

**Step 3: Invalid Data Correction**

**Activity:** Correct data that violates business rules or format requirements.

**Examples:**
| Invalid Data | Correction Method | Validation |
|--------------|-------------------|-------------|
| Invalid email formats | Contact vendor, update system | Email validation |
| Incorrect grant codes | Cross-reference with grant documentation | Grant database validation |
| Wrong budget periods | Compare with budget documents | Financial system validation |
| Incorrect vehicle IDs | Verify with maintenance records | Asset registry validation |

**Deliverable:** Invalid Data Correction Log

---

**Step 4: Standardization**

**Activity:** Standardize data formats across systems.

**Standardization Rules:**
- **Addresses**: USPS standard format, zip+4
- **Phone Numbers**: (XXX) XXX-XXXX format
- **Email**: lowercase, standard format
- **Dates**: YYYY-MM-DD format
- **Currency**: $X,XXX.XX format
- **Vendor Names**: Official business name (not aliases)

**Deliverable:** Standardization Guidelines

---

### 2.3 Data Governance Framework

**Purpose:** Establish standards and processes to maintain data quality post-migration.

**Governance Structure:**

| Role | Responsibilities | SMART Staff |
|------|------------------|--------------|
| **Data Stewards** | Domain-specific data quality, approve data changes | Department Heads |
| **Data Owners** | Overall data quality, accountability for domains | Executive Team |
| **Data Custodians** | Technical data management, system access | IT Team |
| **Data Users** | Data entry, follow governance standards | All Staff |

**Data Governance Policies:**

1. **Data Entry Standards**
   - Required field validation in ERP system
   - Drop-down lists for standardized values
   - Business rule enforcement (e.g., grant code mandatory)
   - Data quality alerts for unusual entries

2. **Data Update Procedures**
   - Approval workflows for critical data changes (vendor master files, grant allocations)
   - Change tracking and audit trail
   - Version control for reference data
   - Periodic data quality reviews

3. **Data Access Controls**
   - Role-based access to data domains
   - Read vs. write permissions
   - Audit logging of data access and changes
   - Compliance with FTA record retention requirements

4. **Data Quality Monitoring**
   - Automated data quality checks (weekly)
   - Data quality scorecards (monthly)
   - Quality issue escalation procedures
   - Continuous improvement initiatives

**Deliverable:** Data Governance Framework Document

---

### 2.4 Data Cleansing Tools & Resources

**Recommended Tools (Open Source):**
- **OpenRefine**: Data profiling and cleansing
- **Apache NiFi**: Data pipeline automation
- **DataCleaner**: Data quality validation
- **Python (pandas, numpy)**: Custom data transformation scripts

**Commercial Tools (if SMART has budget):**
- **Talend Data Quality**: Enterprise data quality platform
- **Informatica Data Quality**: Industry-leading data quality solution
- **IBM InfoSphere Information Server**: Comprehensive data governance

**My Team:**
- Max evaluates SMART's existing tools and capabilities
- My team recommends optimal tool mix based on budget and needs
- Business Analyst/Trainer provides training on data cleansing tools

---

### 2.5 Data Cleansing Deliverables

**Phase 2 Deliverables:**
1. **Cleansed Data Files** - Clean data ready for migration
2. **Data Cleansing Logs** - Detailed record of all changes made
3. **Data Governance Framework** - Long-term data quality standards
4. **Data Quality Metrics** - Before/after quality comparison
5. **Data Stewardship Roles & Responsibilities** - Governance structure

**Timeline:** 8 weeks (Months 6-7), governance framework finalization (Month 8)

---

## Phase 3: Migration & Validation (Months 12-14)

### 3.1 Migration Architecture

**Three-Phase Migration Approach:**

| Phase | Purpose | Scope | Success Criteria |
|-------|---------|--------|-----------------|
| **Test Migration** | Validate migration process, identify issues | 1-2 data domains, small sample | <5% error rate |
| **Pilot Migration** | Validate full migration for limited domains | 3-4 data domains, full dataset | <2% error rate |
| **Production Migration** | Full data migration to production system | All data domains | <1% error rate |

---

### 3.2 Pre-Migration Preparation

**Week 1: System Backup**

**Critical Step:** Complete system backups before any migration activity.

**Backup Strategy:**
- **Full System Backup**: All source systems backed up
- **Database Snapshots**: Database-level backups for relational systems
- **File-Level Backups**: All data files and exports backed up
- **Backup Verification**: My team verifies backup integrity
- **Rollback Plan**: Documented procedure to restore from backup if needed

**Deliverable:** Backup Verification Report

---

**Week 2: Migration Planning**

**Activities:**
- Define data mapping between source and target systems
- Create migration scripts and ETL (Extract, Transform, Load) jobs
- Document migration dependencies and sequence
- Establish data validation rules
- Plan downtime and cut-over procedures

**Data Mapping Example:**

| Source Field (Current System) | Target Field (New ERP) | Transformation Rule |
|-------------------------------|--------------------------|---------------------|
| VENDOR_ID | VENDOR_CODE | No transformation |
| VENDOR_NAME | VENDOR_NAME | Standardize to official business name |
| VENDOR_ADDRESS | ADDRESS_LINE_1 | Split into address components |
| VENDOR_CITY | CITY | No transformation |
| VENDOR_STATE | STATE | Convert to 2-letter abbreviation |
| VENDOR_ZIP | POSTAL_CODE | Convert to zip+4 format |
| TAX_ID | FEDERAL_TAX_ID | Validate format |
| DBE_CERT | DBE_CERTIFIED | Convert Y/N to boolean |
| LAST_UPDATE | MODIFIED_DATE | Standardize to YYYY-MM-DD |

**Deliverable:** Migration Plan Document

---

### 3.3 Test Migration (Week 3)

**Scope:** 1-2 data domains, small sample (10-20 records per domain)

**Purpose:** Validate migration process, identify issues early.

**Process:**
1. Execute migration scripts on test data
2. Validate data in target system
3. Compare source and target records
4. Identify and document errors
5. Fix migration scripts
6. Re-run test migration until success criteria met

**Validation Checks:**
- Record count match (source vs. target)
- Data integrity checks (no corrupted data)
- Business rule validation
- Field-by-field comparison for sample records

**Success Criteria:**
- **Error Rate:** <5% of records
- **Critical Errors:** 0 (FTA-critical data must be 100% accurate)
- **Migration Time:** Within estimated timeframe
- **Data Completeness:** 100% of required fields populated

**Deliverable:** Test Migration Report

---

### 3.4 Pilot Migration (Weeks 4-6)

**Scope:** 3-4 data domains, full dataset

**Purpose:** Validate full migration before production, identify scale issues.

**Process:**
1. Execute migration scripts on full dataset
2. Comprehensive data validation
3. Business user testing (SMART staff validate data in new system)
4. Performance testing (migration time, system load)
5. Issue identification and resolution
6. Re-run pilot migration until success criteria met

**Validation Activities:**

| Validation Type | Description | Owner |
|-----------------|-------------|--------|
| **Record Count Validation** | Compare source and target record counts | My Team |
| **Data Integrity Validation** | Check for data corruption, truncation, encoding issues | Vendor |
| **Business Rule Validation** | Validate all business rules satisfied | My Team |
| **Cross-System Validation** | Validate consistency across integrated systems | Vendor + My Team |
| **User Acceptance Testing** | SMART staff validate data accuracy | Department Heads |
| **FTA Compliance Validation** | Validate grant fund allocations, DBE data | My Team |

**Success Criteria:**
- **Error Rate:** <2% of records
- **Critical Errors:** 0 (FTA-critical data must be 100% accurate)
- **Migration Time:** Within estimated timeframe
- **User Satisfaction:** 90%+ of users satisfied with data accuracy

**Deliverables:**
1. Pilot Migration Report
2. Data Validation Report
3. User Acceptance Testing Report
4. Issue Resolution Log
5. Performance Test Report

---

### 3.5 Production Migration (Week 7)

**Scope:** All data domains, full dataset

**Purpose:** Execute final migration to production ERP system.

**Pre-Migration Checklist:**
- [ ] All source systems backed up
- [ ] Backup integrity verified
- [ ] Migration scripts tested and validated
- [ ] Rollback plan documented and tested
- [ ] SMART stakeholders notified of downtime
- [ ] My team ready for migration execution
- [ ] Vendor technical team ready
- [ ] Validation checklists prepared

**Migration Execution:**
1. **Downtime Period**: Scheduled downtime for source systems (typically weekend)
2. **Data Freeze**: No new transactions allowed in source systems
3. **Final Backup**: One final backup immediately before migration
4. **Migration Execution**: Run migration scripts
5. **Real-Time Monitoring**: My team monitors migration progress and errors
6. **Data Validation**: Immediate post-migration validation
7. **System Verification**: Verify ERP system functioning correctly
8. **User Access Restoration**: Restore user access to new system
9. **Hypercare Support**: Intensive support period (see Change Management Strategy)

**Success Criteria:**
- **Error Rate:** <1% of records
- **Critical Errors:** 0 (FTA-critical data must be 100% accurate)
- **Migration Time:** Within estimated timeframe
- **System Availability:** New system available within downtime window
- **Data Accuracy**: 100% of FTA-critical data accurate

**Deliverables:**
1. Production Migration Report
2. Post-Migration Validation Report
3. Rollback Plan (if needed, not used if successful)
4. Issue Resolution Log (if any issues occur)

---

### 3.6 Post-Migration Validation (Weeks 8-12)

**Immediate Validation (Week 8):**
- My team verifies migration success criteria met
- My team verifies critical data 100% accurate
- My team performs cross-checks across all data domains
- My team escalates data issues for vendor resolution

**Business User Validation (Weeks 8-9):**
- SMART staff use new system with migrated data
- Identify data discrepancies or missing information
- Provide feedback to my team
- My team supports issues

**Reconciliation (Weeks 10-12):**
- Compare source and target system reports
- Reconcile financial totals (trial balance, budget variance)
- Validate grant fund allocations match
- Ensure historical data accessible
- My team validates migration success

**Deliverable:** Post-Migration Validation Report

---

## Data Quality Monitoring Post-Migration

### Ongoing Data Quality Checks

**Automated Checks (Daily/Weekly):**

| Check Frequency | Check Type | Description | Alert Threshold |
|-----------------|-------------|------------------|-----------------|
| Daily | Data Completeness | Required fields populated | >5% records with missing required fields |
| Daily | Data Accuracy | Business rule validation | >10% records violating business rules |
| Weekly | Duplicate Detection | Identify new duplicate records | >10 new duplicates |
| Weekly | Data Freshness | Data updated within expected timeframe | Data older than 30 days |
| Monthly | Data Consistency | Cross-system consistency checks | >50 inconsistent records |

**Data Quality Scorecard (Monthly):**

| Data Domain | Completeness | Accuracy | Consistency | Timeliness | Overall Score |
|-------------|--------------|-----------|--------------|-------------|---------------|
| Vendor Master Files | 98.5% | 99.2% | 97.8% | 99.5% | 98.8% |
| Grant Fund Allocations | 100% | 100% | 100% | 100% | 100% |
| Employee Records | 99.1% | 98.7% | 99.5% | 99.8% | 99.3% |
| Vehicle Registry | 97.8% | 98.2% | 98.5% | 99.0% | 98.4% |

**Reporting:**
- My team provides monthly Data Quality Scorecard
- Department heads receive domain-specific quality reports
- Data Stewards receive alerts for quality issues
- Continuous improvement initiatives based on quality trends

---

## Risk Mitigation

### Migration Risks & Mitigations

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|---------|-------------------|
| Data loss during migration | Low | Critical | Complete backups, my team rollback plan |
| Migration fails to complete | Medium | High | Three-phase approach (test, pilot, production), vendor SLAs |
| Data quality issues discovered post-migration | Medium | High | Data Hygiene First, post-migration validation, vendor warranty |
| Migration exceeds downtime window | Low | Medium | Performance testing, contingency planning, vendor penalties |
| Vendor lacks expertise with SMART's data | Low | High | Vendor selection criteria, transit agency references, my team oversight |
| Data governance not sustained post-migration | Medium | Medium | Data governance framework, data stewardship training, my team monitoring |

---

## My Team Throughout Migration

### Responsibilities

**Before Migration (Months 5-11):**
- Conduct data quality assessment
- Develop data cleansing methodology
- Establish data governance framework
- Validate vendor migration approach
- Review migration scripts and ETL jobs

**During Migration (Months 12-14):**
- Validate backup integrity before migration
- Monitor migration execution real-time
- Validate data quality post-migration
- Verify FTA compliance of migrated data
- Conduct business user acceptance testing
- Document and escalate issues to vendor

**After Migration (Months 15-24):**
- Monitor data quality metrics
- Validate data governance compliance
- Ensure vendor meets warranty obligations
- Support continuous improvement initiatives
- Provide SMART with migration closeout report

---

## Conclusion

Our Data Migration Playbook ensures SMART's ERP migration succeeds through:

1. **Data Hygiene First** - Clean data before vendor import
2. **Three-Phase Migration** - Test, pilot, production approach
3. **Rigorous Validation** - Multiple validation checks at each phase
4. **My Team Oversight** - Independent validation throughout migration
5. **Data Governance** - Long-term data quality maintenance
6. **FTA Compliance** - Grant fund allocations and DBE data 100% accurate

**Expected Outcomes:**
- <1% data migration error rate
- 100% accuracy for FTA-critical data
- 90%+ user satisfaction with migrated data
- Sustained data quality post-migration
- No business disruptions due to data issues

SMART's ERP transformation succeeds because we ensure data quality before, during, and after migration.

---

**Building Better Communities, LLC & Maximilian Murphy**  
*February 13, 2026*
