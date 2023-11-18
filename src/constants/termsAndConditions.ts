type termType = {
  id: number;
  heading: string;
  points:
    | string[]
    | {
        pid: number;
        ptext: string;
        psubtexts?: { psid: string; pstext: string }[];
      }[];
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
          'The Services provided by Solution Edge (hereafter referred to as the"Services") only include those described in the Special terms of the Contract. These Services may, as appropriate, include the provision of a Report by Solution Edge',
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
        ptext:
          'The Services provided by Solution Edge (hereafter referred to as the "Services") only include those described in the Special terms of the Contract. These Services may, as appropriate, include the provision of a Report by Solution Edge',
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
    ],
  },
];
