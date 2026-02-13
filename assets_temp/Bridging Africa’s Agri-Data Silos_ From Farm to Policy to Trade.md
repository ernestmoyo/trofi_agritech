# Bridging Africa’s Agri-Data Silos: From Farm to Policy to Trade

## Executive Summary

The African agricultural data landscape is characterized by robust but siloed vertical systems, creating a significant "integration gap" that represents the primary market opportunity for a new platform. Rather than replicating existing data collection efforts, the strategic value lies in building an integration and analytics layer that connects policy, trade, post-harvest losses (PHL), and value chain data.

**Integration gap is the primary market opportunity**
Mature systems exist within each vertical but lack interoperability. In policy, **ReSAKSS** tracks over 30 CAADP indicators and hosts 8,000+ maps [agricultural_policy_platforms.0.data_provided[0]][1]. In trade, **UN Comtrade** covers ~99% of global trade [executive_summary[6]][2], while the **African Trade Observatory (ATO)** supports 54 AU member states [trade_statistics_platforms.3.coverage[1]][2]. PHL data is dominated by **APHLIS**, which provides modeled estimates [executive_summary[9]][3]. Meanwhile, private value chain platforms like **Farmforce** (700,000+ farmers) and **eProd** (17+ countries) capture granular first-mile data [value_chain_and_traceability_platforms.1.coverage[0]][4] [value_chain_and_traceability_platforms.0.coverage[0]][5]. The opportunity is to position the new platform as a reconciliation layer using a canonical data model to bridge these disconnected islands.

**Policy timing creates a mandate and funding tailwind**
The transition to the **post-2025 Kampala CAADP Declaration** introduces 22 new targets and 35 interventions focused on agrifood systems, nutrition, and resilience [policy_framework_evolution[1]][6]. Concurrently, the **AU Digital Agriculture Strategy (DAS)** mandates the creation of 55 national data platforms by 2030, supported by a budget of $55 million [policy_framework_evolution[6]][7]. This creates an immediate demand for infrastructure that can support the **CAADP Biennial Review (BR)** process [executive_summary[0]][8].

**Formal trade stats understate reality where ICBT dominates**
Official statistics often miss the vast volume of Informal Cross-Border Trade (ICBT). ICBT is estimated to constitute 30–72% of formal trade between neighboring countries [informal_cross_border_trade_analysis[0]][9]. In Mali, specific agricultural product lines have shown informal trade values 3,500 times higher than those reported in formal systems like UN Comtrade [informal_cross_border_trade_analysis[2]][10]. A robust platform must integrate ICBT estimation methods (census, up-rating) to provide a true picture of intra-African trade.

**Turn PHL into trade and income scenarios**
While **APHLIS** provides modeled loss estimates and **FAO** sets global benchmarks around 8% for handling/storage [executive_summary[12]][11], these figures are rarely linked to economic outcomes. The platform should feature a simulator that maps commodity definitions to HS codes, quantifying how a 1–5% reduction in PHL translates into increased "exportable supply" and trade revenue [key_integration_opportunity[0]][12].

**Farm-level platforms can ground-truth policy stats**
Private platforms capture high-fidelity data that can validate national statistics. **eProd**, for example, offers offline Android capabilities and charges ~$1,254 annually for 1,000 farmers [value_chain_and_traceability_platforms.0.access_and_pricing[0]][5]. Incentivizing these platforms to share anonymized aggregates in exchange for premium market intelligence or compliance reporting (e.g., EUDR) can unlock a wealth of "ground-truth" data [data_sharing_barriers_and_incentives[0]][13].

**Standards and identity are non-negotiable to scale**
Interoperability requires a canonical identity and geospatial layer. The recommended stack includes **FAO’s GAUL** for administrative boundaries [technical_architecture_recommendations[4]][14], **HS/SITC** codes for trade [technical_architecture_recommendations[13]][7], and **SDMX** for statistical exchange [technical_architecture_recommendations[13]][7]. Priority must be given to an ID translation registry to map proprietary IDs to a common standard.

## Market Timing and Mandate — Kampala + AU DAS create a once-in-a-decade platform window

The convergence of the post-Malabo agenda and the AU's digital strategy creates a unique window for a platform that can deliver integrated compliance and monitoring tools.

### Kampala CAADP’s 22 targets/35 interventions shift to agrifood systems
The **Kampala CAADP Declaration** (2026–2035) represents a paradigm shift from production-focused metrics to a holistic agrifood systems approach. It introduces 22 new targets and 35 intervention areas, expanding the monitoring scope to include nutrition, sustainability, and resilience [policy_framework_evolution[1]][6].
* **Key Targets:** The declaration commits to tripling intra-African trade in agrifood products, reducing post-harvest losses, and ensuring 30% of agricultural land is under sustainable management [policy_framework_evolution[1]][6].
* **Timeline:** The first Biennial Review (BR) under this new framework is scheduled for 2027, creating an urgent need for updated data collection mechanisms [policy_framework_evolution[1]][6].

### AU Digital Agriculture Strategy funds national data infrastructure ($55M) by 2030
The **AU Digital Agriculture Strategy (DAS)** (2024–2030) provides the implementation vehicle for these policy goals. It explicitly mandates the development of national agriculture data platforms in all 55 member states [agricultural_policy_platforms.3.data_provided[0]][7].
* **Investment:** The strategy outlines a budget of approximately $55 million ($1 million per national platform) to enhance data interoperability and sharing [agricultural_policy_platforms.3.platform_name[0]][7].
* **Central Hub:** It calls for a central "AU Digital Agriculture Knowledge Hub" to register all strategy and policy documents, ensuring alignment across the continent [agricultural_policy_platforms.3.data_provided[0]][7].

### Lessons from Malabo underperformance (2024 BR) strengthen data urgency
The 4th CAADP Biennial Review in 2024 revealed insufficient progress toward Malabo goals, highlighting the critical need for better data to drive accountability [policy_framework_evolution[0]][15]. The shift to Kampala emphasizes "evidence-based decision-making" and "mutual accountability," necessitating platforms that can provide timely, reliable data to correct course before 2030 [policy_framework_evolution[1]][6].

## The Integration Opportunity — Analytics “glue” across policy, PHL, trade, and farm systems

The primary value proposition is not to replace existing robust verticals but to serve as the "glue" that connects them, enabling cross-domain analytics that no single system currently provides.

### Non-obvious value: link PHL-adjusted supply to trade revenue
Current systems track production and trade separately. An integrated platform can link **APHLIS** loss estimates with **UN Comtrade** data to quantify the economic cost of PHL. By mapping production data to trade codes, the platform can simulate how reducing losses by specific percentages (e.g., 5%) would increase the volume of exportable commodities, directly linking on-farm efficiency to national trade balance improvements [key_integration_opportunity[0]][12].

### Ground-truth policy with private first-mile data
National statistics used for CAADP reporting often lag behind reality. Private platforms like **Farmforce** and **eProd** collect real-time, transactional data at the farm level [key_integration_opportunity[0]][12]. Aggregating and anonymizing this "first-mile" data allows for the validation of national policy indicators. For instance, yield data from a private outgrower scheme can serve as a high-frequency proxy to check against annual national production estimates, improving the accuracy of the Biennial Review [key_integration_opportunity[0]][12].

## Policy and Monitoring Stack — Who tracks what and why it matters

Official baselines and forecasts are provided by a set of established institutions. The new platform should ingest these as authoritative layers.

| Platform | Purpose | Data Provided | Managing Org |
| :--- | :--- | :--- | :--- |
| **ReSAKSS** | Track CAADP implementation & M&E | 30+ core indicators; 8,000+ maps via Country eAtlases [agricultural_policy_platforms.0.data_provided[0]][1] | IFPRI / AKADEMIYA2063 |
| **CAADP eBR** | Official Biennial Review data hub | National aggregate data; performance scorecards [agricultural_policy_platforms.1.data_provided[0]][8] | AUC / AUDA-NEPAD |
| **AAgWa** | Near-real-time production forecasts | AI/satellite forecasts for 10 crops in ~50 countries [agricultural_policy_platforms.2.data_provided[0]][1] | AKADEMIYA2063 |
| **AU DAS** | Strategy & governance mandate | Repository for strategies; mandates national platforms [agricultural_policy_platforms.3.purpose[0]][7] | African Union |

## Trade Intelligence Layer — From UN Comtrade to AfCFTA-specific analytics

Trade analysis requires combining global datasets with regional specifics, particularly to capture the full scope of intra-African trade.

| Platform | Coverage | Frequency | Access | Distinctive Features |
| :--- | :--- | :--- | :--- | :--- |
| **UN Comtrade** | ~200 countries; 99% of global trade [trade_statistics_platforms.0.coverage[0]][2] | Monthly/Annual | API (Premium for bulk) [trade_statistics_platforms.0.access_methods[0]][2] | Official stats; mirror data reconstruction [trade_statistics_platforms.0.key_features[0]][2] |
| **ITC Trade Map** | 220 countries; 5,300 products [trade_statistics_platforms.1.coverage[0]][16] | Monthly/Quarterly/Annual | Web export; limited API | Mirror stats for 50+ non-reporters; "untapped potential" analysis [trade_statistics_platforms.1.key_features[1]][16] |
| **FAOSTAT Trade** | 245+ countries; series from 1961 [trade_statistics_platforms.2.coverage[0]][17] | Scheduled updates | Open API/Bulk | Harmonized agricultural series [trade_statistics_platforms.2.key_features[0]][17] |
| **ATO** | 54 African states [trade_statistics_platforms.3.coverage[0]][16] | Varies | Web dashboard | AfCFTA tariffs, NTMs, HS Finder tool [trade_statistics_platforms.3.key_features[0]][16] |

### Incorporating Informal Cross-Border Trade (ICBT) at corridor level
Official stats severely undercount trade. ICBT is estimated at 30–72% of formal trade between neighbors [informal_cross_border_trade_analysis[0]][9]. The **ECO-ICBT** initiative in West Africa monitors 178 products across 178 markets, revealing discrepancies where informal trade can be 3,500x higher than formal records for certain products [informal_cross_border_trade_analysis[2]][10]. The platform must integrate estimation models like the "Up-Rating Model" used by the Bank of Uganda, which adjusts for seasonality and market-day fluctuations [informal_cross_border_trade_analysis[1]][18].

## Post-Harvest Loss Data — From modeled estimates to measured reconciliations

**APHLIS** serves as the baseline, but there is a critical need to reconcile these models with primary data.

| Platform/Strategy | Methodology | Crop Coverage | Quantification |
| :--- | :--- | :--- | :--- |
| **APHLIS / APHLIS+** | Modeled PHL profiles + expert input [post_harvest_loss_platforms.0.methodology[0]][3] | Cereals; expanded to legumes, roots/tubers [post_harvest_loss_platforms.0.crop_coverage[0]][3] | Weight, economic value, nutritional impact [post_harvest_loss_platforms.0.loss_quantification[0]][3] |
| **FAO Technical Platform** | Global standards (4s method, RLAT) [post_harvest_loss_platforms.3.methodology[0]][19] | All food products | Physical loss; ~8% global benchmark [post_harvest_loss_platforms.3.loss_quantification[1]][20] |
| **Kenya NPHMS** | Harmonized protocols; "target, measure, act" [post_harvest_loss_platforms.1.methodology[0]][21] | Major national value chains | Loss measurement for intervention targeting [post_harvest_loss_platforms.1.loss_quantification[0]][21] |
| **Ethiopia PHMSE** | Stakeholder coordination & tech adoption [post_harvest_loss_platforms.2.methodology[0]][22] | Grains, fruits, veg, livestock, fish | Impact tracking via interventions [post_harvest_loss_platforms.2.loss_quantification[0]][23] |

### PHL data improvement pathways (surveys, IoT, private data)
To improve granularity, the platform should advocate for embedding PHL modules into national surveys (e.g., LSMS) as recommended by FAO [phl_data_improvement_opportunities[3]][19]. Additionally, integrating data from IoT sensors in storage and primary data from private platforms can create a reconciliation layer to validate and refine APHLIS models [phl_data_improvement_opportunities[0]][3].

## Value Chain & Traceability Vendors — First-mile data supply

Private vendors hold the key to granular, first-mile data.

| Vendor | Capabilities | Coverage | Interop/Compliance | Access/Pricing |
| :--- | :--- | :--- | :--- | :--- |
| **eProd** | Farmer mgmt, GPS polygons, offline Android [value_chain_and_traceability_platforms.0.capabilities[0]][5] | 17+ African countries [value_chain_and_traceability_platforms.0.coverage[0]][5] | EUDR/CSDDD compliant [value_chain_and_traceability_platforms.0.interoperability_standards[0]][5] | SaaS: $1,254/yr (1k farmers); $0.23/extra farmer [value_chain_and_traceability_platforms.0.access_and_pricing[0]][5] |
| **Farmforce** | First-mile registry, traceability, QC [value_chain_and_traceability_platforms.1.capabilities[0]][4] | ~30 countries; 700k+ farmers [value_chain_and_traceability_platforms.1.coverage[0]][4] | REST API (JSON) [value_chain_and_traceability_platforms.1.access_and_pricing[0]][4] | SaaS; API access (100+ views) [value_chain_and_traceability_platforms.1.access_and_pricing[0]][4] |
| **CropIn** | AI/satellite insights, farm-to-fork trace [value_chain_and_traceability_platforms.2.capabilities[0]][24] | Global incl. Africa | JSON/GeoJSON; Data Hub | Commercial; contract-based |
| **SourceTrace** | Blockchain traceability, farm mgmt [value_chain_and_traceability_platforms.3.capabilities[0]][24] | 37 countries [value_chain_and_traceability_platforms.3.coverage[0]][24] | ISO 27001 certified [value_chain_and_traceability_platforms.3.interoperability_standards[0]][24] | SaaS [value_chain_and_traceability_platforms.3.access_and_pricing[0]][24] |
| **Olam Agri** | Internal supply chain programs [value_chain_and_traceability_platforms.5.capabilities[0]][4] | Global incl. Africa | Proprietary | Internal [value_chain_and_traceability_platforms.5.access_and_pricing[0]][5] |

## Data Sharing: Incentives vs Barriers — Design for trust, utility, and cost

Unlocking private data requires addressing commercial sensitivities and infrastructure gaps.

| Driver Type | Specifics | Why it Matters | Platform Response |
| :--- | :--- | :--- | :--- |
| **Incentive** | **EUDR Compliance** | Market access depends on proving deforestation-free status [data_sharing_barriers_and_incentives[0]][13]. | Provide compliance dashboards and audit trails. |
| **Incentive** | **Access to Finance** | Data enables credit scoring for smallholders [data_sharing_barriers_and_incentives[0]][13]. | Credit-score APIs and data vaults for financial institutions. |
| **Incentive** | **Efficiency** | Standards like GS1/EPCIS reduce recall costs [data_sharing_barriers_and_incentives[0]][13]. | Implement standard data schemas. |
| **Barrier** | **Cost/Infrastructure** | Connectivity limits cloud use in rural areas [data_sharing_barriers_and_incentives[0]][13]. | Support offline-first apps and edge synchronization. |
| **Barrier** | **Data Ownership** | Fear of losing competitive advantage [data_sharing_barriers_and_incentives[0]][13]. | Use federated learning; aggregate anonymized data. |
| **Barrier** | **Policy Vacuum** | Lack of clear data governance laws [data_sharing_barriers_and_incentives[0]][13]. | Establish clear DSAs and align with Malabo Convention. |

## Technical Architecture & Standards — Build once, integrate many

A hybrid architecture combining a centralized lakehouse with a federated data mesh is recommended to balance governance with domain ownership [technical_architecture_recommendations[0]][25].

| Domain | Standard(s) | Role |
| :--- | :--- | :--- |
| **Geospatial** | **GAUL**, WGS84; OGC WMS/WFS [technical_architecture_recommendations[4]][14] | Standardize administrative boundaries and spatial data. |
| **Trade** | **HS**, SITC [technical_architecture_recommendations[13]][7] | Harmonize commodity definitions across borders. |
| **Agriculture** | **FAOSTAT** commodity list [technical_architecture_recommendations[13]][7] | Ensure consistent crop classification. |
| **Statistics** | **SDMX** [technical_architecture_recommendations[13]][7] | Standard format for exchanging statistical data. |
| **Metadata** | **DCAT** [technical_architecture_recommendations[13]][7] | Enable data discoverability across the platform. |
| **APIs** | **OpenAPI**, JSON:API [technical_architecture_recommendations[13]][7] | Facilitate machine-readable integration. |

## Data Governance & Legal — Shared stewardship with clear rules

Governance must balance national sovereignty with regional integration. A model of **distributed stewardship** (countries own data) and **centralized custodianship** (AUDA-NEPAD manages the hub) is proposed [data_governance_and_legal_framework[0]][26].
* **Legal Instruments:** Operationalize data sharing through formal **Data-Sharing Agreements (DSAs)** and **MoUs**.
* **Privacy & Security:** Align with the **Malabo Convention** on Cybersecurity & Personal Data Protection [data_governance_and_legal_framework[0]][26].
* **Consent:** Implement **Free, Prior, and Informed Consent (FPIC)** mechanisms, especially for farmer-level data [data_governance_and_legal_framework[0]][26].

## Core Users & Workflows — Who decides what, when

| Persona | Job-to-be-done | Decision Workflow |
| :--- | :--- | :--- |
| **Policy Maker** | Monitor CAADP targets; set policy | Uses dashboards to track indicators (e.g., PHL rates) and model policy impacts [platform_user_personas.0.decision_workflow[0]][7]. |
| **M&E Officer** | Track program impact | Compares outcomes against baselines; generates performance reports [platform_user_personas.1.decision_workflow[0]][8]. |
| **Customs/Trade Analyst** | Facilitate trade; monitor flows | Monitors corridors for tariff/NTM changes; tracks compliance [platform_user_personas.2.decision_workflow[0]][12]. |
| **Agribusiness/SME** | Market intelligence; compliance | Analyzes pricing/demand; generates EUDR compliance reports [platform_user_personas.3.decision_workflow[0]][12]. |
| **Donor/Researcher** | Assess impact; identify gaps | Accesses aggregated datasets for large-scale analysis and KPI tracking [platform_user_personas.4.decision_workflow[0]][8]. |
| **Smallholder/Extension** | Improve practice; access finance | Receives SMS alerts; logs farm data for credit scoring [platform_user_personas.5.decision_workflow[0]][6]. |

## Prioritized Integration Roadmap — Three-step path to value

1. **Priority 1: Canonical IDs + Geospatial Normalization (High Impact)**
 * **Action:** Develop a canonical identity schema (UUIDs) and enforce **GAUL** for administrative boundaries [prioritized_integration_roadmap[0]][14].
 * **Pilot:** Start with a high-value chain like cocoa in Côte d’Ivoire, mapping Farmforce IDs to the canonical registry.

2. **Priority 2: Reconcile Modeled vs. Observed Data (High Impact)**
 * **Action:** Create a reconciliation layer to compare **APHLIS** modeled estimates with aggregated primary data from platforms like **eProd** [prioritized_integration_roadmap[1]][3].
 * **Pilot:** Focus on a cereal corridor with strong APHLIS coverage to validate loss models.

3. **Priority 3: Link PHL-Adjusted Production to Trade Flows (Medium Feasibility)**
 * **Action:** Map commodity definitions to **HS codes** to link production/loss data with **UN Comtrade** exports [prioritized_integration_roadmap[4]][2].
 * **Insight:** Quantify lost trade revenue due to PHL to drive policy action.

## Business Model & Partnerships — Public good core, premium edges

Sustainability requires a hybrid model:
* **Public Good Core:** Donor and government funding (e.g., via AU DAS) supports the foundational data lake, identity registry, and public dashboards [platform_sustainability_and_funding_models[0]][8].
* **Tiered Subscription:** A freemium model where basic access is free, but commercial users (agribusinesses) pay for premium features like high-frequency API access, scenario modeling, and "untapped potential" reports [platform_sustainability_and_funding_models[0]][8].
* **Data-Exchange Incentives:** Private platforms receive discounted premium access in return for contributing anonymized data [platform_sustainability_and_funding_models[0]][8].
* **Partnerships:** Governance by AU/AUDA-NEPAD; strategic "anchor" partnerships with a national ministry and a major agribusiness [platform_sustainability_and_funding_models[0]][8].

## KPIs & Impact Measurement — Prove value early and often

* **PHL Reduction:** % reduction in weight/value/nutrition of losses [proposed_impact_metrics_kpis.0.description[0]][3].
* **Intra-African Trade Growth:** % increase in volume/value, aligned with AfCFTA goals [proposed_impact_metrics_kpis.1.description[0]][15].
* **Yield Increase:** % increase for platform users vs. baseline.
* **Kampala Targets:** Progress on specific indicators like local processing share [proposed_impact_metrics_kpis.3.description[0]][8].
* **Cost/Income:** Reduction in user operational costs and increase in farmer/SME income.
* **Trade Efficiency:** Reduction in transaction time and costs [proposed_impact_metrics_kpis.6.description[0]][15].

## Risk and Mitigation — Anticipate the “what-ifs”

* **Modeled-Data Bias:** Mitigate by reconciling APHLIS models with observed transaction logs from private platforms.
* **ICBT Blind Spots:** Address by integrating up-rating models and market-day seasonality adjustments into trade analytics.
* **Legal/Consent Gaps:** Establish robust DSAs and ensure alignment with the Malabo Convention and FPIC principles.
* **Adoption Barriers:** Counter connectivity issues with offline-first mobile apps and extension-led onboarding.

## 12-Month Go-to-Market Plan — From pilot to policy relevance

* **Q1: Governance and Plumbing:** Sign MoUs with one ministry and one agribusiness. Stand up the data lakehouse and import core datasets (FAOSTAT, Comtrade, APHLIS). Deploy the ID registry and GAUL normalization.
* **Q2: Reconciliation Pilot:** Launch the Côte d’Ivoire cocoa pilot. Ingest Farmforce aggregates to compare observed vs. modeled losses. Build an MVP for EUDR compliance.
* **Q3: PHL-to-Trade Simulator:** Map commodities to HS codes. Run scenarios on PHL reduction impacts on export supply. Beta test ICBT estimation on one corridor.
* **Q4: Scale and Institutionalization:** Integrate ATO tariffs. Release corridor dashboards. Present results to AU/RECs to align with the 2027 Kampala BR reporting cycle.

## References

1. *eAtlas | ReSAKSS*. https://www.resakss.org/node/6
2. *Fetched web page*. https://comtrade.un.org/
3. *Fetched web page*. https://www.aphlis.net/
4. *Cargill Case Study*. https://farmforce.com/case-studies/cargill/
5. *eProd: Digital Agriculture Supply Chain Platform*. https://e-catalogs.taat-africa.org/gov/technologies/eprod-digital-agriculture-supply-chain-platform
6. *REV_ENGLISH-Draft-Kampala-CAADP-Declaration- ...*. https://rr-africa.woah.org/app/uploads/2025/01/REV_ENGLISH-Draft-Kampala-CAADP-Declaration-January-10-2025-FT-C.pdf
7. *AU Digital Agriculture Strategy (DAS) and Implementation ...*. https://au.int/sites/default/files/documents/43481-doc-DAS_EN.pdf
8. *CAADP Strategy and Action Plan: 2026-2035*. https://au.int/sites/default/files/documents/44705-doc-OSC68108_E_Original_CAADP_Stratedy_and_Action_Plan.pdf
9. *Harmonised methods for informal cross border trade data collection critical in monitoring intra-African Trade | United Nations Economic Commission for Africa*. https://www.uneca.org/stories/harmonised-methods-for-informal-cross-border-trade-data-collection-critical-in-monitoring
10. *2024 Africa Agriculture Trade Monitor (AATM)*. https://www.resakss.org/sites/default/files/Africa%20Agriculture%20Trade%20Monitor%20%28AATM%29%202024_0.pdf
11. *Is Post-Harvest Loss Significant in Sub-Saharan Africa?*. https://www.worldbank.org/en/programs/africa-myths-and-facts/publication/is-post-harvest-loss-significant-in-sub-saharan-africa
12. *Supporting ReSAKSS and CAADP | IFPRI*. https://www.ifpri.org/project/supporting-resakss-and-caadp/
13. *(PDF) Leveraging Cloud APIs for Smart Agriculture in Sub- Saharan Africa*. https://www.researchgate.net/publication/394083643_Leveraging_Cloud_APIs_for_Smart_Agriculture_in_Sub-_Saharan_Africa
14. *The Global Administrative Unit Layers (GAUL) Dataset*. https://www.fao.org/hih-geospatial-platform/news/detail/now-available--the-global-administrative-unit-layers-(gaul)-dataset---2024-edition/en
15. *CAADP Strategy and Action Plan: 2026-2035*. https://rr-africa.woah.org/app/uploads/2025/01/English-CAADP-Strategy-and-Action-Plan-2026-2035_250111_165547.pdf
16. *Trade Map | ITC - International Trade Centre*. https://www.intracen.org/resources/tools/trade-map
17. *Fetched web page*. https://www.fao.org/faostat/en/
18. *GUIDELINES FOR THE PRODUCTION OF INFORMAL ...*. https://statafric.au.int/sites/default/files/2024-05/pasii_sc_statafric_guidelines_on_the_collection_of_icbt_in_africa_final_version.pdf
19. *Guidelines on the measurement of harvest and post-harvest ...*. https://openknowledge.fao.org/server/api/core/bitstreams/bd596c08-1202-4745-b23d-07bb5dc84b06/content
20. *
	Food loss measurement resources | Technical Platform on the Measurement and Reduction of Food Loss and Waste | Food and Agriculture Organization of the United Nations
*. https://www.fao.org/platform-food-loss-waste/food-loss/food-loss-measurement/food-loss-measurement-resources/en
21. *Postharvest Loss Reduction Interventions in Sub-Saharan Africa*. https://www.grtd.fcdo.gov.uk/wp-content/uploads/2025/06/Food-loss-postharvest-landscape-report.pdf
22. *
	Launch of the Ethiopian post-harvest management strategy
*. https://www.fao.org/platform-food-loss-waste/resources/news/news-detail/launch-of-the-ethiopian-post-harvest-management-strategy/en
23. *POSTHARVEST MANAGEMENT STRATEGY OF ...*. https://www.fao.org/docs/foodlosswastelibraries/default-document-library/phm-strategy_of_ethiopia_phmse.pdf?sfvrsn=e05ebcb0_1
24. *Best Agriculture Traceability Software - Farming Apps, Agri Value Chain and AI Driven Farm Management System*. https://sourcetrace.com/
25. *Modern Data Architecture Patterns — Centralized, Federated, and Mesh | by Sriram Krishnan | Medium*. https://medium.com/@sriramarun/modern-data-architecture-patterns-centralized-federated-and-mesh-644536ddc3f4
26. *Data Governance and Policy in Africa*. https://library.oapen.org/bitstream/id/1c92ad1d-32d3-4a6b-8e11-e2d536b83537/978-3-031-24498-8.pdf