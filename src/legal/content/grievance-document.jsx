import {
  CheckList,
  ClauseHeading,
  CorpCard,
  CorpRow,
  Divider,
  HighlightBox,
  InfoTable,
  InfoTbody,
  InfoTd,
  InfoTh,
  InfoThead,
  InfoTr,
  LegalList,
  LegalP,
} from "../legal-blocks";

export function GrievanceDocument() {
  return (
    <>
      <LegalP>
        In compliance with the <strong>Information Technology Act, 2000</strong> (as amended), the{" "}
        <strong>
          Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules,
          2021
        </strong>
        , and the <strong>Digital Personal Data Protection Act, 2023</strong>, Kriyon Group Private
        Limited designates the following individual as the <strong>official Grievance Officer</strong>{" "}
        responsible for addressing user complaints, privacy concerns, and data-related requests.
      </LegalP>

      <CorpCard title="Designated Grievance Officer">
        <CorpRow label="Name" value="Krishang Sharma Dhar" />
        <CorpRow label="Designation" value={"Director & Founder"} />
        <CorpRow label="DIN" value="11307171" />
        <CorpRow label="Company" value="Kriyon Group Private Limited" />
        <CorpRow label="CIN" value="U74909JK2025PTC017984" />
        <CorpRow label="Official Email" value="kriyon@repixelx.tech" />
        <CorpRow label="Phone" value="+91 9622121100" />
        <CorpRow
          label="Registered Address"
          value={"Room No. 2, First Floor, Tawi Enclave, Vill Nandini, Gol Gujral, Jammu, J&K – 180002"}
        />
        <CorpRow label="Acknowledgement Time" value="Within 48 business hours" />
        <CorpRow label="Resolution Target" value="Within 30 business days" />
      </CorpCard>

      <ClauseHeading num="01" title="What Qualifies as a Grievance" />
      <LegalP>You may raise a formal grievance with our Grievance Officer for any of the following categories:</LegalP>
      <LegalList
        items={[
          <>
            <strong>Privacy &amp; Data Concerns:</strong> Unauthorised use of your personal data; data
            breach notifications; requests to access, correct, or delete your data held by Kriyon;
            objections to how your data is being processed; concerns about data sharing with third
            parties.
          </>,
          <>
            <strong>Content-Related Grievances:</strong> Content on any Kriyon platform that you
            believe is defamatory, unlawful, in violation of intellectual property rights, or
            otherwise harmful.
          </>,
          <>
            <strong>Service &amp; Contractual Disputes:</strong> Disputes regarding deliverables,
            project quality, payment, refunds, or any other matter arising from a service engagement
            with Kriyon. (Note: Financial disputes must follow the refund dispute process in Document
            03 — Refund Policy before reaching the Grievance Officer.)
          </>,
          <>
            <strong>Compliance Concerns:</strong> Concerns about Kriyon&apos;s compliance with
            applicable laws, rules, or regulations.
          </>,
          <>
            <strong>Accessibility &amp; Support Concerns:</strong> Difficulty accessing our
            platforms, services, or this legal documentation.
          </>,
        ]}
      />

      <Divider />

      <ClauseHeading num="02" title="How to Submit a Grievance" />
      <LegalP>
        To submit a formal grievance, please send an email to <strong>kriyon@repixelx.tech</strong>{" "}
        with the following information:
      </LegalP>
      <LegalList
        items={[
          <>
            <strong>Subject line:</strong> &quot;Formal Grievance — [Category] — [Your Full Name]&quot;
            (e.g., &quot;Formal Grievance — Privacy — Rahul Sharma&quot;)
          </>,
          "Your full name and contact details",
          "If a business: your company name, GSTIN, and relevant project/invoice reference",
          "A clear, detailed description of your grievance",
          "The specific resolution or outcome you are seeking",
          "Any supporting documentation, screenshots, or evidence relevant to your complaint",
        ]}
      />
      <LegalP>
        Grievances submitted verbally, via WhatsApp, through social media direct messages, or through
        any other informal channel will not be processed as formal grievances under this policy.
        Only written grievances submitted to the official email address will be acknowledged and
        processed within the statutory timelines.
      </LegalP>

      <Divider />

      <ClauseHeading num="03" title="Grievance Resolution Process" />
      <InfoTable>
        <InfoThead>
          <InfoTh>Stage</InfoTh>
          <InfoTh>Timeline</InfoTh>
          <InfoTh>Action</InfoTh>
        </InfoThead>
        <InfoTbody>
          <InfoTr striped>
            <InfoTd bold>Acknowledgement</InfoTd>
            <InfoTd>Within 48 business hours</InfoTd>
            <InfoTd>
              Kriyon acknowledges receipt of the grievance in writing and assigns a reference number
            </InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd bold>Investigation</InfoTd>
            <InfoTd>Days 1–14</InfoTd>
            <InfoTd>
              Grievance Officer investigates, reviews all relevant records, and consults relevant team
              members
            </InfoTd>
          </InfoTr>
          <InfoTr striped>
            <InfoTd bold>Interim Response (if needed)</InfoTd>
            <InfoTd>By Day 14</InfoTd>
            <InfoTd>
              If a full resolution is not possible within 14 days, an interim status update is
              provided
            </InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd bold>Final Response</InfoTd>
            <InfoTd>Within 30 business days</InfoTd>
            <InfoTd>
              Kriyon provides a formal written response with the outcome of the investigation and
              proposed resolution (if any)
            </InfoTd>
          </InfoTr>
          <InfoTr striped>
            <InfoTd bold>Escalation (if needed)</InfoTd>
            <InfoTd>After 30-day window</InfoTd>
            <InfoTd>
              If unresolved, the matter may be escalated to arbitration as per Terms &amp; Conditions
              (Document 01)
            </InfoTd>
          </InfoTr>
        </InfoTbody>
      </InfoTable>

      <Divider />

      <ClauseHeading num="04" title="Data Grievances — DPDPA 2023" />
      <LegalP>
        For data-related grievances under the Digital Personal Data Protection Act, 2023,
        Kriyon&apos;s Grievance Officer also serves as the designated contact for:
      </LegalP>
      <CheckList
        items={[
          "Requests to access personal data held about you",
          "Requests to correct inaccurate personal data",
          "Requests for erasure of personal data (where legally permissible)",
          "Objections to processing of personal data",
          "Withdrawal of consent for data processing",
          "Complaints about data sharing with third parties",
          "Notification of suspected unauthorised use of your personal data",
        ]}
      />
      <LegalP>
        Data requests will be processed within 30 calendar days of receipt of a valid, verifiable
        written request. Requests that cannot be fulfilled due to legal, contractual, or financial
        obligations will be explained in writing with the applicable legal basis cited.
      </LegalP>

      <Divider />

      <ClauseHeading num="05" title="Jurisdiction &amp; Escalation Path" />
      <LegalP>
        All grievances and any unresolved disputes that escalate beyond the grievance process shall
        be subject to the governing law and dispute resolution framework set out in the{" "}
        <strong>Terms &amp; Conditions (Document 01, Section 20)</strong>. In summary:
      </LegalP>
      <LegalList
        items={[
          <>
            <strong>Stage 1:</strong> Formal grievance to Grievance Officer — mandatory first step for
            all disputes
          </>,
          <>
            <strong>Stage 2:</strong> Internal arbitration attempt within 30 days
          </>,
          <>
            <strong>Stage 3:</strong> Binding arbitration under Arbitration and Conciliation Act 1996
            — Seat: Jammu, J&amp;K
          </>,
          <>
            <strong>Stage 4 (non-arbitrable matters):</strong> Exclusive jurisdiction of Courts of
            Jammu, Jammu &amp; Kashmir, India
          </>,
        ]}
      />
      <LegalP>
        All parties submitting a grievance or engaging in any dispute process with Kriyon Group
        Private Limited unconditionally accept the exclusive jurisdiction of the Courts of Jammu,
        Jammu &amp; Kashmir, India, and the arbitration seat of Jammu for all matters arising from
        their engagement with the Company.
      </LegalP>

      <HighlightBox variant="neutral">
        <strong className="text-neutral-900">Summary.</strong>
        <p className="mt-3 text-neutral-700">
          All six legal documents on this site — Terms &amp; Conditions, Privacy Policy, Refund
          Policy, Cookie Policy, Disclaimer, and Grievance Officer details — together constitute the
          complete legal framework governing any and all engagements with Kriyon Group Private
          Limited. These documents are collectively incorporated by reference in every proposal,
          invoice, and service agreement issued by Kriyon. By engaging our services in any capacity,
          you confirm acceptance of all six documents.
        </p>
        <p className="mt-4 text-[13px] text-neutral-500">
          © 2026 Kriyon Group Private Limited · CIN U74909JK2025PTC017984 · GSTIN 01AAMCK2092B1Z0 ·
          All rights reserved.
        </p>
      </HighlightBox>
    </>
  );
}
