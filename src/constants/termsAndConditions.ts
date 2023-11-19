type PointObject = {
  pid: number;
  ptext: string;
  psubtexts?: { psid: string; pstext: string }[];
};

type termType = {
  id: number;
  heading: string;
  points: (string | PointObject)[];
};

export const termsArray: termType[] = [
  {
    id: 1,
    heading: "GENERAL",
    points: [
      'All services, of whatever nature and without any exception, provided by Solution Edge or any other affiliate of the Solution Edge (said provider being hereafter referred to as "Solution Edge") on behalf of its clients (hereafter referred to as the "Client") are governed by these General Terms & Conditions for Services (hereafter referred to as the "General Terms & Conditions").',
      "The Client which enters into a contract with Solution Edge acknowledges that it has thoroughly read them and agrees to be bound by them without any reservation. It thus waives all rights it may have under any documents providing otherwise, in particular its own purchasing terms & conditions, which shall consequently not be deemed enforceable against Solution Edge, even if the latter was previously aware of them.",
      'These General Terms & Conditions will be supplemented by application agreements which may take different forms (such as approved and signed quotation, purchase order etc) meant to set out the applicable special terms. Unless approved in writing by Solution Edge, no other special term shall nonetheless deviate from these General Terms & Conditions. These General Terms & Conditions and any subsequent agreement signed by the parties (hereafter referred to as the "Contract"), frame the parties’ mutual commitments and supersede any prior arrangement or agreed provision between them. No purchase order, unilateral statement or other similar document will add to or deviate from the terms of the Contract',
      "Unless the Company receives prior written instructions to the contrary from Client, no other party is entitled to give instructions, particularly on the scope of the services or the delivery of reports or certificates resulting therefrom (the “Reports of Findings”). Client hereby irrevocably authorizes the Company to deliver Reports of Findings to a third party where so instructed by Client or, at its discretion, where it implicitly follows from circumstances, trade custom, usage or practice.",
    ],
  },
  {
    id: 2,
    heading: "THE SERVICE",
    points: [
      {
        pid: 2.1,
        ptext:
          'The Services provided by Solution Edge (hereafter referred to as the "Services") only include those described in the Special terms of the Contract. These Services may, as appropriate, include the provision of a Report by Solution Edge',
      },
      {
        pid: 2.2,
        ptext:
          'The Services provided by Solution Edge, in particular any memoranda, laboratory data, calculations, measurements, estimates, notes, certificates and other material prepared by Solution Edge, together with any summary or other communication in any form describing the results of any work or services performed (hereafter referred to as the "Report") shall be only for the Client\'s use and benefit.',
      },
      {
        pid: 2.3,
        ptext:
          "The Client acknowledges and agrees that Solution Edge shall be deemed irrevocably authorized to deliver such Report where such delivery arises from the Client's instructions or implicitly results from circumstances in which such is the case, in Solution Edge's opinion, based on trade custom, usage or practice.",
      },
      {
        pid: 2.4,
        ptext:
          "The Client acknowledges and agrees that the Services provided by Solution Edge are not necessarily designed to address all matters of quality, safety or performance of the products, materials, services, systems or processes tested, inspected or certified and the scope of work does not necessarily reflect all standards which may apply. The Client understands that reliance on any Reports issued by Solution Edge is limited to the facts and representations set out in the Reports, without any possibility for same to be neither extended nor generalized.",
      },
      {
        pid: 2.5,
        ptext:
          "Client is responsible for acting as it sees fit on the basis of such Report. Neither Solution Edge nor any of its officers, employees, agents or subcontractors shall be liable to Client nor any third party for any actions taken or not taken on the basis of such Report.",
      },
      {
        pid: 2.6,
        ptext:
          "In agreeing to provide the Services, Solution Edge does not abridge the Client's legal duties and contractual obligations to third parties nor release the Client from same.",
      },
    ],
  },
  {
    id: 3,
    heading: "SOLUTION EDGE'S OBLIGATIONS",
    points: [
      {
        pid: 3.1,
        ptext: "Solution Edge warrants exclusively to the Client:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "that it has the power and authority to enter into the Contract and that it will comply with relevant legislations and regulations in force in relation to the provision of the Services;",
          },
          {
            psid: "b",
            pstext:
              "that the Services as expressly defined in the Contract (and no other services) will be performed in a manner consistent with that level of care and skill ordinarily exercised by other companies providing like services under similar circumstances, failing which Solution Edge shall provide new Services at its own expense;",
          },
          {
            psid: "c",
            pstext:
              "that it will take reasonable steps to ensure that whilst on the Client's premises its personnel comply with any health and safety rules;",
          },
          {
            psid: "d",
            pstext:
              "that the Reports produced as part of performing the Contract will not infringe any legal rights (including Intellectual Property Rights) of any third party. This warranty shall not apply where the infringement is directly or indirectly caused by Solution Edge’s reliance on any information, samples or other related documents provided to Solution Edge by the Client or any of its representatives.",
          },
        ],
      },
      {
        pid: 3.2,
        ptext:
          "In the event of a breach of the warranty set out in Clause 3.1 (b), Solution Edge shall, at its own expense, perform services of the type originally performed as may be reasonably required to correct any defect in Solution Edge's performance.",
      },
      {
        pid: 3.3,
        ptext: "Solution Edge undertakes to comply with its Code of Ethics.",
      },
    ],
  },
  {
    id: 4,
    heading: "CLIENT'S OBLIGATIONS",
    points: [
      {
        pid: 4.1,
        ptext: "The Client represents and warrants:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "that it has the power and authority to enter into the Contract and procure the provision of the Services by Solution Edge for itself;",
          },
          {
            psid: "b",
            pstext:
              "that it is securing the provision of the Services covered in the Contract for its own account and not acting as representative for any other person or entity;",
          },
          {
            psid: "c",
            pstext:
              "that any information, samples and related documents it (or any of its representatives) supplies to Solution Edge (including its agents, subcontractors and employees) is, true, accurate, representative, complete and is not misleading in any respect, without any duty for Solution Edge to confirm or verify the accuracy or completeness thereof;",
          },
          {
            psid: "d",
            pstext:
              "that any samples provided by the Client to Solution Edge will be shipped at the Client's costs and will be collected by the Client or disposed of by Solution Edge at the Client's costs within thirty days for each after inspections and testing unless otherwise agreed between the parties. In the event that such samples are not collected or disposed of by the Client within the required thirty days period, Solution Edge reserves the right to destroy the samples, at the Client's cost;",
          },
          {
            psid: "e",
            pstext:
              "that any information, samples and related documents (including without limitation certificates and reports) provided by the Client to Solution Edge will not, in any circumstances, infringe any legal rights (including Intellectual Property Rights) of any third party",
          },
        ],
      },
      {
        pid: 4.2,
        ptext:
          "In the event that the Services provided by Solution Edge are performed, at the Client's request, in relation to any third party (in particular the Client's suppliers or dealers), the Client shall cause anysuch third party to fully read the provisions in the Contract (both in the General Terms & Conditions and in the Special Terms & Conditions) prior to any intervention, and guarantees compliance of said third party with any and all obligations set out in said Contract.",
      },
      {
        pid: 4.3,
        ptext: "The Client further agrees:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "to co-operate with Solution Edge in all matters relating to the Services and appoint a manager in relation to the Services who shall be duly authorized to provide instructions to Solution Edge on behalf of the Client and to bind the Client contractually as required;",
          },
          {
            psid: "b",
            pstext:
              "to provide Solution Edge (including its agents, sub-contractors and employees), at its sole expense, any and all samples, information, material or documentation necessary for the performance of the Services in a timely manner sufficient to enable Solution Edge to fulfil its obligations. The Client acknowledges that any samples provided may become damaged or be destroyed as part of the necessary testing process and undertakes to hold Solution Edge harmless from any and all responsibility in this respect;",
          },
          {
            psid: "c",
            pstext:
              "that it is responsible for providing the samples/equipment to be tested together, where appropriate, with all their accessories;",
          },
          {
            psid: "d",
            pstext:
              "to provide instructions and feedback to Solution Edge in a timely manner;",
          },
          {
            psid: "e",
            pstext:
              "to provide Solution Edge (including its agents, sub-contractors and employees) with access to its premises as may be required for the provision of the Services and to any other relevant premises at which the Services are to be provided;",
          },
          {
            psid: "f",
            pstext:
              "prior to Solution Edge attending any premises for the performance of the Services, to inform Solution Edge of all applicable health and safety regulations;",
          },
          {
            psid: "g",
            pstext:
              "to notify Solution Edge promptly of any risk, safety issues or incidents which may affect a shipped product or process in use, in particular;",
          },
          {
            psid: "h",
            pstext:
              "to inform Solution Edge in advance of any applicable import/ export restrictions that may apply to the Services to be provided, including any instances where any products, information or technology may be exported/ imported to or from a country that is restricted or banned from such transaction;",
          },
          {
            psid: "i",
            pstext:
              "in the event of the issuance of a certificate, to inform and advise Solution Edge immediately of any changes during the term of the certificate which may have a material impact on the accuracy of the certification;",
          },
          {
            psid: "j",
            pstext:
              "to obtain and maintain all necessary licenses and permits in order to comply with relevant legislation and regulation in relation to the Services to be provided;",
          },
          {
            psid: "k",
            pstext:
              "that it will not use any Reports issued by Solution Edge pursuant to the Contract in a misleading manner and that it will only distribute such Reports in their entirety;",
          },
          {
            psid: "l",
            pstext:
              "in no event will the contents of any Reports or any extracts, excerpts or parts of any Reports be distributed or published without the prior written consent of Solution Edge in each instance; and",
          },
          {
            psid: "m",
            pstext:
              "that any and all advertising and promotional materials or any statements made by the Client will not give a false or misleading impression to any third party concerning the Services provided by Solution Edge.",
          },
        ],
      },
      {
        pid: 4.4,
        ptext:
          "Solution Edge shall not be considered in breach of the Contract if and to the extent that its non- performance is a direct result of a failure by the Client to comply with its own legal, regulatory and/or contractual obligations. The Client also acknowledges that the impact of any such nonperformance on its part on the provision of the Services by Solution Edge will not affect the Client’s obligations to pay the Charges pursuant to Clause 5 below.",
      },
    ],
  },
  {
    id: 5,
    heading: "CHARGES, INVOICING AND PAYMENT",
    points: [
      {
        pid: 5.1,
        ptext:
          'The Client shall pay Solution Edge the charges set out in the Contract and expenses, if any (hereafter referred to as the "Charges").',
      },
      {
        pid: 5.2,
        ptext:
          "The Charges are expressed exclusive of any applicable taxes. The Client shall pay any applicable taxes on the Charges at the rate and in the manner prescribed by law, on the issue by Solution Edge of a valid invoice.",
      },
      {
        pid: 5.3,
        ptext:
          "The Client is wholly responsible for any freight or customs clearance fees relating to any testing samples.",
      },
      {
        pid: 5.4,
        ptext:
          "The Charges represent the total fees to be paid by the Client for the Services pursuant to the Contract. Any additional work to be performed by Solution Edge will be framed in a service proposal anddocumented in a covenant signed by both parties",
      },
      {
        pid: 5.5,
        ptext:
          "The Client shall pay each invoice within thirty (30) days as from their issuance date.",
      },
      {
        pid: 5.6,
        ptext:
          "Pursuant to the provisions of RBI Guidelines, any failure by the Client to pay all or part of Solution Edge's invoices on due date shall result in the Client being automatically, and without the need for a prior summon to pay, liable for payment of interest calculated on the outstanding amounts (exclusive of any tax) at a rate equivalent to the Reserve bank of India rate applied to its most recent refinancing operation, plus 10 percentage points. The rate to be applied for the first semester of the year under consideration shall be the applicable rate as of 1 January of said year and, for the second semester of the year under consideration, the applicable rate as of 1 July of said year. Furthermore, in the event of late payment, the Client shall automatically be liable towards Solution Edge to pay a lump-sum indemnity for recovery costs amounting to €40.00, which will add to the above-mentioned late payment interest. Should the amount of the recovery costs incurred by Solution Edge exceed that of said lumpsum indemnity, then Solution Edge shall be entitl claim for additional compensation upon presentation of documentary proof.",
      },
      {
        pid: 5.7,
        ptext:
          "Any late payment shall also entitle Solution Edge, at its sole discretion, to immediately stop providing the Services until full payment of all its unpaid invoices, late penalties and recovery costs. Late payment shall provide Solution Edge with a legitimate ground to terminate the Contract in the forms and within the time limits set out under Clause 12",
      },
      {
        pid: 5.8,
        ptext:
          "Should the Client remain liable for amounts related to several invoices, then any payment received from the Client shall primarily be allocated to the invoices with the earliest issuance date.",
      },
    ],
  },
  {
    id: 6,
    heading: "INTELLECTUAL PROPERTY RIGHTS AND DATA PROTECTION",
    points: [
      "For the purpose of these General Terms and Conditions, Intellectual Property Rights shall mean any copyright, trademark (whether registered or not), patent, patent application (including the right to file a patent application), service mark, design right (whether registered or not), trade secret or other right of a similar nature which may exist in any respect whatsoever.",
      {
        pid: 6.1,
        ptext:
          "Should the Client remain liable for amounts related to several invoices, then any payment received from the Client shall primarily be allocated to the invoices with the earliest issuance date.",
      },
      {
        pid: 6.2,
        ptext:
          "Any use by the Client (or the Client's affiliated companies) of the name \"Solution Edge\" or any of Solution Edge's trademarks or brand names, for any reason, is strictly prohibited, unless first consented to in writing by Solution Edge. Solution Edge reserves the right to immediately terminate the Contract as a result of any such unauthorized use.",
      },
      {
        pid: 6.3,
        ptext:
          "In the event of provision of certification services, the Client agrees and acknowledges that the use of certification marks may be subject to national and international laws and regulations. \nAll Intellectual Property Rights in any Reports, documents, graphs, charts, photographs or any other material (in whatever medium) developed by Solution Edge pursuant to the Contract shall belong to Solution Edge. The Client shall have the right to use any such Reports, documents, graphs, charts, photographs or other material for the sole purposes of the Contract. Likewise, the Client agrees and acknowledges that Solution Edge retains any and all proprietary rights in inventions that may arise during the performance of the Contract and undertakes not to use the concepts and ideas developed by Solution Edge over the same period and that would be brought to its attention.",
      },
      {
        pid: 6.4,
        ptext:
          "Solution Edge shall observe all statutory provisions with regard to data protection. To the extent that Solution Edge processes or gets access to personal data in the course of providing the Services, or more generally in the course of performing the Contract, it shall take all necessary technical and organizational measures to ensure the security of such data and to guard against unauthorized or unlawful processing, accidental loss, destruction or damage to such data.",
      },
    ],
  },
  {
    id: 7,
    heading: "CONFIDENTIALITY",
    points: [
      'The parties agree to treat as confidential any information, regardless of its form, media and nature (i.e. technical, commercial, financial or other information) which: (a) may be exchanged as part of negotiating, signing or performing the Contract; and (b) may be disclosed in writing, visually, orally or electronic or other means, and identified in any manner whatsoever as confidential by the Disclosing Party when disclosed (hereafter referred to as "Confidential information");',
      {
        pid: 7.1,
        ptext:
          "Where a party (the “Receiving Party”) obtains Confidential Information from the other party (the “Disclosing Party”) it shall, subject to Clauses 7.2 to 7.4:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "keep that Confidential Information confidential, by applying the standard of care that it uses for itsown confidential information;",
          },
          {
            psid: "b",
            pstext:
              "use that Confidential Information only for the purposes of performing its obligations under the Contract; and",
          },
          {
            psid: "c",
            pstext:
              "not disclose that Confidential Information to any third party without the prior written consent of the Disclosing Party",
          },
        ],
      },
      {
        pid: 7.2,
        ptext:
          'The Receiving Party may disclose the Disclosing Party\'s Confidential Information on a "need to know" basis:',
        psubtexts: [
          {
            psid: "a",
            pstext:
              "to any legal advisers and statutory auditors that it has engaged for itself",
          },
          {
            psid: "b",
            pstext:
              "to any regulatory or supervisory authority of relevance to its business;",
          },
          {
            psid: "c",
            pstext:
              "to any director, officer or employee of the Receiving Party provided that, in each case, the Receiving Party has first advised that person of the obligations under Clause 7 and ensured that the person is bound by nondisclosure obligations no less onerous than those set out in this Clause7;",
          },
          {
            psid: "d",
            pstext:
              "where the Receiving Party is Solution Edge, to all affiliates of the Solution Edge group or their subcontractors.",
          },
        ],
      },
      {
        pid: 7.3,
        ptext:
          "The provisions of Clauses 7.1 and 7.2 shall not apply to any Confidential Information which:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "was already in the possession of the Receiving Party prior to its receipt from the Disclosing Party without restriction on its use or disclosure;",
          },
          {
            psid: "b",
            pstext:
              "is or becomes public knowledge other than by breach of this Clause 7;",
          },
          {
            psid: "c",
            pstext:
              "is received by the Receiving Party from a third party who lawfully acquired it and who is under no obligation restricting its disclosure; or",
          },
          {
            psid: "d",
            pstext:
              "is independently developed by the Receiving Party without access to the relevant Confidential Information.",
          },
        ],
      },
      {
        pid: 7.4,
        ptext:
          "The Receiving Party may disclose Confidential Information of the Disclosing Party to the extent required pursuant to legal or regulatory requirements, provided that the Receiving Party has given the Disclosing Party prompt written notice of the requirement to disclose and, to the extent permitted by law, given the Disclosing Party a reasonable opportunity to prevent the disclosure through appropriate legal means.",
      },
      {
        pid: 7.5,
        ptext:
          "Each party shall make sure that its employees, representatives and subcontractors comply with its obligations under this Clause 7.",
      },
      {
        pid: 7.6,
        ptext:
          "No license of any Intellectual Property Rights is given in respect of any Confidential Information solely by the disclosure of such Confidential Information by the Disclosing Party.",
      },
      {
        pid: 7.7,
        ptext:
          "The Client acknowledges that Solution Edge may retain in its archive all materials necessary to document the Services provided for the period required by its quality assurance processes, or by the assessment and certification rules of the relevant accreditation body or for the purposes of defending or maintaining any litigation in relation to this Contract",
      },
      {
        pid: 7.8,
        ptext:
          "This obligation enters into force at the date of signature of the Contract or for a period of two(2) years (whichever is higher).",
      },
    ],
  },
  {
    id: 8,
    heading: "FORCE MAJEURE",
    points: [
      {
        pid: 8.1,
        ptext:
          "Neither party shall be liable to the other for any delay in performing or failure to perform any contractual obligation to the extent that such delay or failure to perform is a result of:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "war (whether declared or not), civil war, riots, revolution, acts of terrorism, military action, sabotage and/or piracy, or international sanctions;",
          },
          {
            psid: "b",
            pstext:
              "natural disasters such as violent storms, earthquakes, tidal waves, floods and/or lighting; explosions and fires;",
          },
          {
            psid: "c",
            pstext:
              "strikes and labour disputes, other than by any one or more employees of the affected party or of any supplier or agent of the affected party;",
          },
          {
            psid: "d",
            pstext:
              "failures of utilities companies such as providers of telecommunication, internet, gas, transportation or electricity services.",
          },
        ],
      },
      {
        pid: 8.2,
        ptext:
          "For the avoidance of doubt, where the affected party is Solution Edge any failure or delay caused by failure or delay on the part of a subcontractor shall only be a Force Majeure Event (as defined above) where the subcontractor is affected by one of the events described above.",
      },
      {
        pid: 8.3,
        ptext:
          "A party whose performance is affected by an event described in Clause 8.1 shall:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "promptly notify the other party in writing of the Force Majeure Event and the cause and the likely duration of any consequential delay or nonperformance of its obligations;",
          },
          {
            psid: "b",
            pstext:
              "use all reasonable endeavours to avoid or mitigate the effects of the Force Majeure Event and continue to perform or resume performance of its affected obligations as soon as reasonably possible;",
          },
          {
            psid: "c",
            pstext:
              "continue to provide Services that remain unaffected by the Force Majeure Event.",
          },
        ],
      },
      {
        pid: 8.4,
        ptext:
          "If the Force Majeure Event continues for more than sixty(60) days after the day on which it started, each party may terminate the Contract by giving at least ten(10) days' written notice to the other party.",
      },
    ],
  },
  {
    id: 9,
    heading: "LIMITATIONS AND EXCLUSIONS OF LIABILITY",
    points: [
      {
        pid: 9.1,
        ptext: "Neither party excludes or limits liability to the other party:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "for death or personal injury resulting from the negligence of that party or its directors, officers, employees, agents or sub-contractors; or",
          },
          {
            psid: "b",
            pstext:
              "for its own fraud (or that of its directors, officers, employees, agents or subcontractors).",
          },
        ],
      },
      {
        pid: 9.2,
        ptext:
          "Subject to Clause 9.1, Solution Edge's maximum aggregate liability in contract (including in case of hidden defects, malfunction or noncompliance, failure to comply with its obligation to ad and, more generally, in case of non-compliance with any of its statutory, regulatory and/or contractual obligations), or resulting from any dispute which may arise out of or in connection with the Services covered in the Contract shall not exceed the amount of Charges due by the Client to Solution Edge under this Agreement.",
      },
      {
        pid: 9.3,
        ptext:
          "Subject to Clause 9.1, Solution Edge shall not be liable to pay any compensation to the Client for:",
        psubtexts: [
          {
            psid: "a",
            pstext: "loss of profits;",
          },
          {
            psid: "b",
            pstext: "loss of sales or business;",
          },
          {
            psid: "c",
            pstext:
              "loss of opportunity (including without limitation in relation to third party contracts);",
          },
          {
            psid: "d",
            pstext: "loss of or damage to goodwill or reputation;",
          },
          {
            psid: "e",
            pstext: "loss of anticipated savings;",
          },
          {
            psid: "f",
            pstext: "loss of use of software, data or information;",
          },
          {
            psid: "g",
            pstext:
              "any indirect, consequential loss, punitive or special loss (even when advised of their possibility).",
          },
        ],
      },
      {
        pid: 9.4,
        ptext:
          "Any claim by the Client against Solution Edge must be made by registered letter with acknowledgement of receipt within thirty(30) days after the work completed when Client becomes aware of any circumstances giving rise to any such claim. Failure to give such notice of claim within thirty(30) days shall constitute a bar or irrevocable waiver to any claim, regardless of the factual and legal ground of the claim",
      },
      {
        pid: 9.5,
        ptext:
          "The Client hereby declares that it considers itself as a professional with all skills necessary to assess the quality of the Services provided by Solution Edge so that, with full knowledge of the facts, it endorses all provisions of this Clause 9.",
      },
    ],
  },
  {
    id: 10,
    heading: "INDEMNITY",
    points: [
      {
        pid: 10.1,
        ptext:
          "The Client shall indemnify and hold harmless Solution Edge, its officers, employees, representatives, contractors and sub-contractors from and against any and all claims, suits, liabilities (including costs of litigation and attorney's fees) arising, directly or indirectly, out of or in connection with:",
        psubtexts: [
          {
            psid: "a",
            pstext:
              "any claims or suits by any governmental or judicial authority for failure of the Client to comply with any of its statutory and/or regulatory obligations;",
          },
          {
            psid: "b",
            pstext:
              "any claims or suits by any person or entity for any kind of damage (personal injuries, loss of or damage to property, economic loss, infringement on Intellectual Property Rights) suffered as a result of the Services ordered from Solution Edge, through no failure of the latter to comply with its contractual obligations. In any event, the indemnification provided for by the Client shall cover the amount of liabilities exceeding the applicable ceiling as set out under Clause 9 of these General Terms & Conditions;",
          },
          {
            psid: "c",
            pstext:
              "the breach of any of the Client's obligations set out in Clause 4 above;",
          },
          {
            psid: "d",
            pstext:
              "any claims or suits arising as a result of any misuse or unauthorized use of any Reports issued by Solution Edge or any Intellectual Property Rights belonging to Solution Edge (including trademarks) by the Client or any other person to whom the latter might have made the Reports available",
          },
        ],
      },
      {
        pid: 10.2,
        ptext:
          "The obligations set out in this Clause 10 shall survive termination of the Contract.",
      },
    ],
  },
  {
    id: 11,
    heading: "INSURANCE POLICIES",
    points: [
      {
        pid: 11.1,
        ptext:
          "Each party shall be responsible for arranging, at its own costs, its own company insurance which includes, without limitation, professional indemnity, employer's liability, motor insurance and property insurance.",
      },
      {
        pid: 11.2,
        ptext:
          "The Client acknowledges that although Solution Edge maintains insurance or financial backup, such insurance or backup does not cover any employees of the Client or of any third parties who may be involved in the provision of the Services. If the Services are to be performed at premises belonging to the Client or third parties, Solution Edge's employer's liability insurance or emergency funds does not provide cover for non- Solution Edge employees.",
      },
      {
        pid: 11.3,
        ptext:
          "Solution Edge is neither an insurer nor a guarantor and expressly disclaims any liability in this respect. If the Client wishes to guarantee the quality and compliance of its products and services or to protect against any losses or damage which may occur as part of its business, it shall consequently take out appropriate insurance coverage with professionals in the sector, without any possible remedy against Solution Edge.",
      },
    ],
  },
  {
    id: 12,
    heading: "TERMINATION",
    points: [
      {
        pid: 12.1,
        ptext:
          "The Contract may be terminated early by either party for failure of the other party to fulfil any of its contractual, statutory and/or regulatory obligations. Early termination shall be effective after a formal notice by registered letter with acknowledgement of receipt informing the party in default of the other party's intent to exercise its rights under this termination clause has remained unsuccessful for more than fifteen (15) days. The Contract may also be terminated on an early basis where insolvency proceedings (safeguard proceedings, rehabilitation proceedings, compulsory liquidation) have been started against either party, in accordance with statutory and regulatory conditions and subject to any applicable provision of public policy.",
      },
      {
        pid: 12.2,
        ptext:
          "In the event of Contract termination for any reason whatsoever and not withstanding any other rights or remedies the parties may have, the Client shall pay Solution Edge for all Services performed up to the date of termination.",
      },
      {
        pid: 12.3,
        ptext:
          "Termination of the Contract shall in no way affect the accrued rights and obligations of the parties nor any provision which is expressly or by implication intended to come into force or remain applicable on or after such termination.",
      },
    ],
  },
  {
    id: 13,
    heading: "ASSIGNMENT AND SUBCONTRACTING",
    points: [
      "Solution Edge reserves the right to delegate the performance of its obligations under the Contract and the provision of the Services to one or more of its affiliates and/ or sub-contractors when necessary. Solution Edge may also assign the benefit of the Contract to any company within its ownership, subject to giving prior written notice of same to the Client.",
    ],
  },
  {
    id: 14,
    heading: "GOVERNING LAW AND DISPUTE RESOLUTION",
    points: [
      "The Contract entered into between Solution Edge and the Client shall be governed by Indian law, even in the case where the Client is based abroad and/or where all or part of Contract performance is to take place abroad. \nThe parties agree to submit to the Indian court in respect of any dispute regarding the execution, construction, performance and termination of the Contract and its legal consequences.",
    ],
  },
  {
    id: 15,
    heading: "MISCELLANEOUS",
    points: [
      {
        pid: 15.1,
        ptext:
          "<strong>Severability</strong>\nShould any provision of these General Terms & Conditions be unenforceable, invalid or illegal, or later be held so pursuant to a court decision, then the remaining provisions shall remain in full force and effect.",
      },
      {
        pid: 15.2,
        ptext:
          "<strong>No partnership or agency</strong>\nThe relationships between Solution Edge and the Client are those of independent contracting parties with no partnership, hierarchical or agency link between them, neither in law nor in fact. Consequently, each party, as well as any of its employees, operators and representatives, for which it is acting as guarantor, undertakes not to present itself as the other party's employee, partner or representative with third-parties. Likewise, no party shall make any contractual commitment whatsoever with third-parties on behalf of the other party.",
      },
      {
        pid: 15.3,
        ptext:
          "<strong>Waivers</strong>\nNo failure of a party to exercise any of its rights under the Contract shall operate as a waiver. No waiver shall be valid unless expressly stated to be a waiver and notified in writing to the other party. The failure of any party to exercise any of its rights or remedies after a breach of contract by the other party shall not preclude any further exercise of said rights or remedies in the event where the other party subsequently breaches its contractual obligations.",
      },
    ],
  },
];
