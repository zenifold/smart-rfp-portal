# Risk Management Playbook
## RFP 26-4364 - ERP System Upgrade Consultant

**Purpose:** This playbook identifies potential risks throughout SMART's ERP System Upgrade project, provides mitigation strategies, and establishes response protocols for risk materialization.

---

## Executive Summary

ERP projects are inherently risky. Industry statistics show:
- **55%** of ERP projects exceed budget
- **66%** experience schedule delays
- **70%** fail to achieve expected benefits
- **40%** have significant user adoption issues

Our approach fundamentally changes these odds through:
- **Guardian Oversight Model** - Independent monitoring and protection
- **Corporate Ethnography** - Understanding real user needs
- **Firm-Fixed Pricing** - Eliminating budget risk for SMART
- **24-Month Risk-Adjusted Timeline** - No unrealistic promises
- **Data Hygiene First** - Preventing data quality failures

This playbook details our proactive risk management approach.

---

## Risk Categories

### Category 1: Project Scope & Requirements

### Risk 1.1: Scope Creep During Implementation
**Probability:** High  
**Impact:** High  
**Risk Score:** 9/10

**Description:** Vendor proposes additional features or scope changes mid-implementation, increasing timeline and cost.

**Root Causes:**
- Incomplete requirements gathering
- Vendor overpromising features
- SMART stakeholders requesting mid-project changes
- Vendor using scope creep to increase revenue

**Mitigation Strategies:**
1. **Comprehensive Needs Assessment (Phase 2)**
   - Corporate ethnography reveals real requirements upfront
   - Service blueprints capture all user journeys
   - Shadow ERP identification prevents surprise needs
   
2. **Detailed ERP RFP (Phase 3)**
   - Clear, unambiguous requirements
   - Vendor penalties for non-delivery
   - Scope change process defined in contract
   
3. **Guardian Oversight (Phase 6)**
   - All vendor-proposed changes require Guardian analysis
   - SMART only sees changes that Guardian recommends
   - Change impact analysis (time, cost, benefit) before approval

**Response Protocol:**
- If scope creep occurs:
  1. Guardian documents requested change
  2. Guardian analyzes against original requirements
  3. Guardian provides SMART with recommendation (approve/reject/negotiate)
  4. If approved, vendor must absorb cost or negotiate separately
  5. Update risk register and lesson learned log

---

### Risk 1.2: Incomplete Requirements Discovery
**Probability:** Medium  
**Impact:** High  
**Risk Score:** 8/10

**Description:** Initial needs assessment misses critical requirements, leading to rework or system gaps.

**Root Causes:**
- Inadequate stakeholder engagement
- Insufficient time for discovery
- Focus on obvious needs, not hidden processes
- Shadow ERP not discovered until too late

**Mitigation Strategies:**
1. **Corporate Ethnography Approach**
   - 2-3 weeks embedded observation in each department
   - Contextual inquiry during peak operational periods
   - Digital frustration diaries for real-time issue capture
   
2. **Multiple Discovery Methods**
   - One-on-one interviews (20+ stakeholders)
   - Group workshops (5 Whys methodology)
   - System documentation review
   - Vendor interviews (current systems)
   
3. **Service Blueprinting**
   - Visual maps reveal hidden touchpoints
   - Front-stage/back-stage analysis identifies gaps
   - Pain point mapping exposes missing requirements

**Response Protocol:**
- If missing requirements discovered:
  1. Document gap and impact
  2. Assess severity (critical/major/minor)
  3. Determine if addressed in current phase or future enhancement
  4. Guardian negotiates with vendor if scope change required
  5. Update requirements documentation and risk register

---

### Category 2: Technical Implementation

### Risk 2.1: Integration Failures Between Systems
**Probability:** High  
**Impact:** High  
**Risk Score:** 9/10

**Description:** ERP system fails to properly integrate with Trapeze, ADP, or other existing systems.

**Root Causes:**
- Inadequate API documentation
- Vendor inexperience with specific integrations
- Data structure mismatches
- Vendor testing only positive scenarios

**Mitigation Strategies:**
1. **Integration Architecture Design (Phase 5)**
   - Guardian validates integration design before implementation
   - Comprehensive API documentation requirements
   - Data mapping specifications reviewed by SMART IT
   
2. **Integration Handshake Testing (Unique to Our Approach)**
   - Positive path testing: Normal conditions
   - Negative path testing: System failures, timeouts, network issues
   - Failure recovery testing: Graceful degradation, data consistency
   - Performance testing: Peak load, concurrent users
   
3. **Vendor Selection Criteria (Phase 4)**
   - Proven integration experience with Trapeze
   - Proven integration experience with ADP
   - Integration case studies with references

**Response Protocol:**
- If integration failure occurs:
  1. Guardian isolates specific failure point
  2. Guardian determines root cause (vendor issue vs. SMART issue)
  3. Guardian requires vendor fix with SLA timeline
  4. Guardian validates fix with regression testing
  5. If vendor unable, escalate to contract penalties
  6. Update risk register and lesson learned

---

### Risk 2.2: Data Migration Errors or Loss
**Probability:** High  
**Impact:** Critical  
**Risk Score:** 10/10

**Description:** Data migration introduces errors, duplicates, or loses data during transfer.

**Root Causes:**
- Poor data quality in source systems
- Inadequate migration planning
- Vendor rushing migration process
- Insufficient validation testing

**Mitigation Strategies:**
1. **Data Hygiene First Methodology (Unique to Our Approach)**
   - **Phase 1 Assessment**: Identify data quality issues
   - **Phase 2 Cleansing**: Clean data BEFORE vendor import
   - **Phase 3 Validation**: Three-phase migration testing
   
2. **Pre-Migration Backup Strategy**
   - Complete system backups before migration
   - Rollback plan documented and tested
   - Backup verification by independent third party
   
3. **Three-Phase Migration Testing**
   - Test migration: Small subset of data
   - Pilot migration: Larger subset, full verification
   - Production migration: Full migration with Guardian monitoring
   
4. **Vendor Migration Experience Requirement**
   - Vendor must provide 3+ successful migration references
   - Specific experience with transit agency migrations

**Response Protocol:**
- If data migration error occurs:
  1. Immediate rollback to backup system
  2. Guardian documents error scope and impact
  3. Guardian determines root cause (data quality vs. vendor error)
  4. Guardian requires vendor remediation plan
  5. Re-test with validation before re-migration
  6. Update risk register and lesson learned

---

### Risk 2.3: System Performance Issues Post-Go-Live
**Probability:** Medium  
**Impact:** High  
**Risk Score:** 8/10

**Description:** New ERP system performs poorly during peak operations, causing slowdowns or crashes.

**Root Causes:**
- Inadequate infrastructure sizing
- Poor database optimization
- Insufficient performance testing
- Unexpected user volume

**Mitigation Strategies:**
1. **Performance Testing Requirements**
   - Load testing: Simulate peak user volume (2x expected)
   - Stress testing: System limits and degradation points
   - Endurance testing: Sustained load over time
   - Performance SLA in vendor contract
   
2. **Infrastructure Assessment (Phase 5)**
   - Guardian validates hardware/network sizing
   - SMART IT confirms infrastructure capacity
   - Cloud vs. on-premises evaluation
   
3. **Phased Rollout (Months 17-24)**
   - Pilot deployment: Single department
   - Limited rollout: Multiple departments
   - Full rollout: All users
   - Each phase includes performance monitoring

**Response Protocol:**
- If performance issues occur:
  1. Guardian identifies performance bottleneck
  2. Guardian requires vendor optimization plan (24-hour SLA)
  3. Temporary workarounds documented if critical
  4. Vendor implements optimization
  5. Guardian validates improvement
  6. If unable, contract penalties apply

---

### Category 3: User Adoption & Change Management

### Risk 3.1: Low User Adoption
**Probability:** High  
**Impact:** High  
**Risk Score:** 9/10

**Description:** SMART staff resist new ERP system, use workarounds, or revert to old processes.

**Root Causes:**
- Poor user experience design
- Inadequate training
- Resistance to change
- System doesn't match real workflows

**Mitigation Strategies:**
1. **Corporate Ethnography (Unique to Our Approach)**
   - Observe real workflows before system design
   - Design software that adapts to people
   - Incorporate Shadow ERP insights into UX design
   
2. **Comprehensive Training Program**
   - Role-based training (dispatcher, maintenance, finance, etc.)
   - Hands-on practice environment
   - Train-the-trainer: SMART super-users trained to train others
   - Ongoing support during hypercare (Months 21-22)
   
3. **Change Management Strategy (See Dedicated Playbook)**
   - Stakeholder communication plan
   - Executive sponsorship
   - User champion program
   - Early adopter incentives

**Response Protocol:**
- If low adoption observed:
  1. Guardian identifies adoption barriers
  2. Guardian requires vendor UX improvements if design issue
  3. Additional training sessions scheduled
  4. User champions provide peer support
  5. Executive communication reinforces importance
  6. Update risk register and lesson learned

---

### Risk 3.2: Workaround Persistence
**Probability:** Medium  
**Impact:** Medium  
**Risk Score:** 7/10

**Description:** Staff continue using spreadsheets, manual processes, or informal systems alongside new ERP.

**Root Causes:**
- ERP system missing specific functionality
- Old habits die hard
- Workarounds perceived as faster
- Lack of management enforcement

**Mitigation Strategies:**
1. **Shadow ERP Discovery (Corporate Ethnography)**
   - Identify all workarounds upfront
   - Understand why workarounds exist
   - Design ERP to incorporate necessary workaround features
   
2. **Executive Enforcement**
   - Executive communication: "ERP is official system"
   - Management dashboards show ERP usage
   - Department heads responsible for adoption
   
3. **System Superiority**
   - ERP system must be easier than workarounds
   - If workaround persists, Guardian investigates why
   - Vendor required to improve if system inferior

**Response Protocol:**
- If workarounds persist:
  1. Guardian documents workaround frequency and types
  2. Guardian interviews users about workaround reasons
  3. Guardian requires vendor improvement if system issue
  4. Management reinforcement through executive communication
  5. Update risk register and lesson learned

---

### Category 4: Vendor Performance

### Risk 4.1: Vendor Overpromising and Underdelivering
**Probability:** High  
**Impact:** Critical  
**Risk Score:** 10/10

**Description:** Vendor promises capabilities in sales that don't exist or perform poorly.

**Root Causes:**
- Sales team disconnected from technical reality
- Vendor wants to win contract
- SMART doesn't validate claims
- References not thoroughly checked

**Mitigation Strategies:**
1. **Rigorous Vendor Selection (Phase 4)**
   - Require 3+ references (specifically transit agencies)
   - Contact references directly (not vendor-provided list)
   - Request demonstration of specific features
   - Require proof of successful integrations
   
2. **Guardian Oversight Throughout Implementation**
   - Vendor deliverables tested independently
   - Guardian validates against contract requirements
   - No vendor deliverable accepted without Guardian approval
   
3. **Contract Protections**
   - Specific performance metrics with SLA
   - Penalty clauses for non-delivery
   - Warranty period for all features
   - Escalation process for disputes

**Response Protocol:**
- If vendor underdelivers:
  1. Guardian documents gap between promise and delivery
  2. Guardian determines severity (critical/major/minor)
  3. Guardian requires vendor remediation plan
  4. Contract penalties applied if timeline not met
  5. If vendor unable, SMART may terminate with cause
  6. Update risk register and lesson learned

---

### Risk 4.2: Vendor Resource Shortages
**Probability:** Medium  
**Impact:** High  
**Risk Score:** 8/10

**Description:** Vendor lacks sufficient staff or expertise, causing delays.

**Root Causes:**
- Vendor overcommitted on other projects
- Key personnel leave vendor
- Vendor underestimates effort
- Insufficient transit industry expertise

**Mitigation Strategies:**
1. **Vendor Resource Commitment in Contract**
   - Named project manager (cannot change without SMART approval)
   - Minimum resource levels by phase
   - Transit industry experience requirements for key roles
   - Staffing plan reviewed and approved by Guardian
   
2. **Guardian Resource Monitoring**
   - Weekly resource level reviews
   - Guardian verifies vendor staff expertise
   - Early warning if resources insufficient
   
3. **Vendor Selection Criteria (Phase 4)**
   - Evaluate vendor capacity and workload
   - Require resource commitment letter
   - Check staff turnover rates

**Response Protocol:**
- If vendor resource shortage occurs:
  1. Guardian documents specific shortage
  2. Guardian requires vendor remedy plan (72-hour SLA)
  3. If vendor cannot provide resources, contract penalties apply
  4. SMART may bring in external resources at vendor expense
  5. Update risk register and lesson learned

---

### Category 5: FTA Compliance & Funding

### Risk 5.1: FTA Audit Findings
**Probability:** Low  
**Impact:** Critical  
**Risk Score:** 8/10

**Description:** FTA audit identifies ERP system deficiencies requiring remediation.

**Root Causes:**
- Insufficient grant tracking capabilities
- Inadequate DBE participation documentation
- Poor internal controls
- Missing audit trail

**Mitigation Strategies:**
1. **FTA Compliance Matrix (See Dedicated Document)**
   - Every FTA requirement mapped to deliverable
   - Guardian validates compliance throughout implementation
   - Pre-audit readiness review (Month 23)
   
2. **Financial Module Design**
   - Grant code mandatory field
   - Automated cost allocation
   - Complete audit trail
   - FTA report generation capability
   
3. **DBE Compliance**
   - Joint venture with Building Beloved Communities, LLC
   - DBE participation requirements in vendor RFP
   - Guardian monitors DBE subcontractor performance

**Response Protocol:**
- If FTA audit findings occur:
  1. Guardian documents finding and impact
  2. Guardian determines if vendor issue or SMART process issue
  3. Guardian requires remediation plan
  4. If vendor responsible, vendor absorbs cost
  5. Guardian supports FTA audit response
  6. Update risk register and lesson learned

---

### Risk 5.2: Grant Fund Misallocation
**Probability:** Low  
**Impact:** High  
**Risk Score:** 7/10

**Description:** ERP system allows incorrect grant fund allocation, creating compliance issues.

**Root Causes:**
- Poor system configuration
- Inadequate validation rules
- User error in grant coding
- Insufficient training

**Mitigation Strategies:**
1. **Financial Module Validation**
   - Guardian tests all grant allocation scenarios
   - Mandatory grant code on transactions
   - Automated cost allocation rules
   - Exception alerts for unusual allocations
   
2. **User Training**
   - FTA grant fund management training
   - Cost allocation process training
   - Grant code assignment best practices
   
3. **Guardian Monitoring**
   - Monthly grant allocation review
   - Random transaction audits
   - Exception reporting to SMART finance

**Response Protocol:**
- If misallocation discovered:
  1. Immediate identification of misallocated funds
  2. Guardian determines root cause (system vs. user error)
  3. Guardian requires system fix if validation issue
  4. Additional training if user error
  5. Corrective entries documented with FTA justification
  6. Update risk register and lesson learned

---

### Category 6: Budget & Schedule

### Risk 6.1: Budget Overrun (Eliminated by Firm-Fixed Pricing)
**Probability:** N/A  
**Impact:** N/A  
**Risk Score:** 0/10

**Description:** ERP project exceeds budget due to unforeseen issues.

**Mitigation Strategy:**
**Firm-Fixed Pricing Model ($434,500)**
- No hourly billing for SMART
- Payment tied to deliverables, not hours
- All overrun costs absorbed by us
- Budget certainty for SMART

**Note:** This risk is completely eliminated for SMART through our pricing model.

---

### Risk 6.2: Schedule Delay
**Probability:** Medium  
**Impact:** High  
**Risk Score:** 8/10

**Description:** ERP implementation exceeds 24-month timeline.

**Root Causes:**
- Vendor underestimates effort
- Unforeseen technical challenges
- Scope changes mid-project
- SMART resource unavailability

**Mitigation Strategies:**
1. **Risk-Adjusted 24-Month Timeline**
   - Built-in contingency (10% per phase)
   - Conservative estimates based on transit agency benchmarks
   - Phased approach allows parallel workstreams
   
2. **Guardian Schedule Monitoring**
   - Weekly schedule reviews
   - Early warning for slippage
   - Guardian requires vendor catch-up plans
   
3. **Contingency Planning**
   - Critical path identification
   - Resource reallocation options
   - Phase overlap if needed (with Guardian approval)

**Response Protocol:**
- If schedule delay occurs:
  1. Guardian documents delay cause and impact
  2. Guardian determines if vendor responsible
  3. Guardian requires vendor recovery plan
  4. Contract penalties if vendor-caused delay
  5. Schedule adjustments with SMART approval
  6. Update risk register and lesson learned

---

## Risk Monitoring & Reporting

### Monthly Risk Reviews (Guardian Oversight)

**Format:**
1. **Risk Register Update**
   - New risks identified
   - Existing risks updated (probability/impact)
   - Risks closed with lessons learned
   
2. **Risk Status Dashboard**
   - High-priority risks requiring action
   - Risk trend analysis (improving/worsening)
   - Mitigation effectiveness assessment
   
3. **SMART Communication**
   - Executive summary of risk status
   - Action items for SMART
   - Recommendations for risk reduction

### Quarterly Risk Assessments

**Comprehensive Review:**
1. All risks re-evaluated
2. New risks identified from lessons learned
3. Mitigation strategies adjusted
4. Risk management process improvement

---

## Risk Register Template

| Risk ID | Category | Risk Description | Probability | Impact | Risk Score | Mitigation Strategy | Owner | Status | Last Updated |
|-----------|-----------|-------------------|--------------|----------|--------------|---------------|----------|--------------|
| R1.1 | Scope | Scope creep during implementation | High | High | 9/10 | Guardian oversight, detailed RFP | Guardian | Active | 01/15/2026 |
| R2.1 | Technical | Integration failures | High | High | 9/10 | Handshake testing, API validation | Guardian | Active | 01/15/2026 |
| R3.1 | Adoption | Low user adoption | High | High | 9/10 | Ethnography, comprehensive training | Guardian | Active | 01/15/2026 |
| [Add new risks as identified] |

---

## Conclusion

Our Risk Management Playbook is proactive, not reactive. Key differentiators:

1. **Guardian Oversight Model** - Independent monitoring throughout implementation
2. **Corporate Ethnography** - Understand real needs before system design
3. **Data Hygiene First** - Prevent migration failures before they occur
4. **Integration Handshake Testing** - Test negative scenarios, not just positive
5. **Firm-Fixed Pricing** - Eliminate budget risk for SMART
6. **Risk-Adjusted Timeline** - 24 months with contingency built-in
7. **FTA Compliance Focus** - Protect SMART's grant funding

We don't just identify risks. We actively manage and mitigate them throughout the project, ensuring SMART's ERP System Upgrade succeeds.

---

**Building Beloved Communities, LLC & Maximilian Murphy**  
*January 15, 2026*
