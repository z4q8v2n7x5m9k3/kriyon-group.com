import {
  CheckList,
  ClauseHeading,
  ClauseSub,
  Divider,
  HighlightBox,
  LegalList,
  LegalP,
  SubNav,
} from "../legal-blocks";
import {
  VentureEdova,
  VentureOneLink,
  VentureRepixelXStudio,
} from "../venture-links";

export function RefundDocument() {
  return (
    <>
      <SubNav
        links={[
          { href: "#rp-1", label: "Core policy" },
          { href: "#rp-2", label: "Platforms" },
          { href: "#rp-3", label: "Cancellation" },
          { href: "#rp-4", label: "Disputes" },
          { href: "#rp-5", label: "Evidence" },
        ]}
      />
      <HighlightBox variant="red">
        <strong>Non-Refundability Notice:</strong> Kriyon Group Private Limited operates on a strict
        non-refund policy for all digital services, creative work, software development, and
        platform subscriptions. By making any payment to Kriyon Group Private Limited, you
        acknowledge that you have read and accepted this Refund Policy in its entirety. Before
        raising any refund claim through any external channel, you must exhaust the mandatory
        internal dispute resolution process described in this document.
      </HighlightBox>

      <div id="rp-1" className="scroll-mt-40">
        <ClauseHeading num="01" title="Core Non-Refundability Policy" />
        <ClauseSub>1.1 — Non-Refundable After Kickoff</ClauseSub>
        <LegalP>
          All fees paid to Kriyon Group Private Limited are <strong>strictly non-refundable</strong>{" "}
          once a project kickoff has occurred or any project work — however minimal — has commenced.
          &quot;Kickoff&quot; and &quot;commencement of work&quot; include, but are not limited to,
          any of the following activities: initial discovery or strategy calls; preparation of project
          plans, timelines, or milestone documents; commencement of research or competitor analysis;
          creation of wireframes, mood boards, concept sketches, or brand explorations; any design
          mockup, prototype, or iteration; any line of code written for the project; any written
          content, copywriting, or script drafted; any video footage captured, edited, or processed;
          and any internal planning, briefing, or resource allocation performed by the Kriyon team.
          The fact that you have not reviewed or approved any of this work does not affect the
          non-refundable status of the fees paid.
        </LegalP>
        <ClauseSub>1.2 — Advance Payments Are Always Non-Refundable</ClauseSub>
        <LegalP>
          Advance payments and retainers paid to Kriyon Group Private Limited are{" "}
          <strong>non-refundable under all circumstances</strong> — including but not limited to a
          change of mind, change in business circumstances, failure to provide required assets, change
          in project scope, dissatisfaction with a preliminary concept (before revisions are
          attempted), or any other reason attributable to the client. Advance payments are collected
          to block the Company&apos;s time, allocate team resources, and cover initial planning
          costs. These costs are incurred immediately upon receipt of the advance and cannot be
          recovered regardless of subsequent events.
        </LegalP>
        <ClauseSub>1.3 — Concept Rejections Do Not Entitle Refunds</ClauseSub>
        <LegalP>
          If you reject an initial concept, design direction, or draft after it has been delivered,
          this does not entitle you to a refund. The correct process is to utilise your included
          revision rounds as defined in the SOW to redirect the work. Rejection of work without
          utilising the revision process is not grounds for a refund claim.
        </LegalP>
      </div>

      <Divider />

      <div id="rp-2" className="scroll-mt-40">
        <ClauseHeading num="02" title="Platform-Specific Refund Rules" />
        <ClauseSub>
          2.1 — <VentureRepixelXStudio /> (Creative &amp; Development Services)
        </ClauseSub>
        <LegalList
          items={[
            "All project fees are non-refundable once work has commenced, as detailed in Clause 1.1 above.",
            "Milestone payments are non-refundable once the deliverables for that milestone have been shared for review, regardless of whether the client has formally reviewed them.",
            "If a client fails to provide required assets, feedback, or approvals for more than 30 consecutive days, Kriyon reserves the right to invoice for and retain all fees related to completed work to date, and the project may be marked as abandoned.",
            "Final source files, editable documents, and access credentials are delivered only upon receipt of full and final payment. Partial payment does not entitle the client to any files.",
          ]}
        />
        <ClauseSub>
          2.2 — <VentureOneLink /> (Digital Profiles &amp; Landing Pages)
        </ClauseSub>
        <LegalList
          items={[
            <>
              All <VentureOneLink /> subscription fees and profile setup fees are non-refundable once
              the profile or page has been created and access has been granted to the client.
            </>,
            "If a subscription is cancelled mid-term, no pro-rata refund will be provided for the unused portion of the subscription period.",
            <>
              If a <VentureOneLink /> account is suspended or terminated by Kriyon due to a
              violation of the Terms of Service (hosting illegal, defamatory, or infringing
              content), no refund will be issued.
            </>,
            "Downtime due to platform maintenance, third-party outages, or force majeure does not entitle subscribers to refunds or service credits.",
          ]}
        />
        <ClauseSub>
          2.3 — <VentureEdova /> (AI Education Platform)
        </ClauseSub>
        <LegalList
          items={[
            <>
              All <VentureEdova /> subscription fees, exam access fees, and institutional licensing
              fees are non-refundable once platform access has been granted or activated.
            </>,
            'Access to AI-generated exam content is considered "used" upon the first interaction with the platform, and no refund will be provided after that point.',
            <>
              Kriyon does not guarantee any specific academic outcome, exam score, rank, or
              admission result from using <VentureEdova />. Dissatisfaction with exam preparation
              outcomes does not constitute grounds for a refund.
            </>,
            "For institutional plans, cancellation mid-term will result in access being revoked at the end of the billing period with no pro-rata refund.",
          ]}
        />
      </div>

      <Divider />

      <div id="rp-3" className="scroll-mt-40">
        <ClauseHeading num="03" title="Client-Initiated Cancellation &amp; Kill Fee" />
        <ClauseSub>3.1 — Cancellation After Kickoff</ClauseSub>
        <LegalP>
          If you choose to cancel a project after kickoff, the following applies regardless of
          reason:
        </LegalP>
        <LegalList
          items={[
            "All amounts already paid are retained by Kriyon and are non-refundable.",
            <>
              A <strong>kill fee</strong> becomes immediately payable, representing the cost of work
              completed or scheduled up to the cancellation date, plus the opportunity cost of the
              capacity Kriyon had allocated to your project. The kill fee percentage is specified in
              your SOW (typically 25%–50% of the remaining unpaid project value). If not specified in
              the SOW, a kill fee of 30% of the total project value is deemed agreed.
            </>,
            <>
              All work product, source files, and deliverables created up to that point remain
              Kriyon&apos;s property until the kill fee is paid in full. Kriyon is under no
              obligation to transfer any file, asset, or credential until all dues are cleared.
            </>,
          ]}
        />
        <ClauseSub>3.2 — Abandonment by Client</ClauseSub>
        <LegalP>
          If a client fails to respond to communications, provide required assets, approve
          deliverables, or make milestone payments for a period exceeding{" "}
          <strong>30 (thirty) consecutive calendar days</strong> despite follow-up communications
          from Kriyon, the project may be declared abandoned at Kriyon&apos;s sole discretion. In
          such a case, all fees paid are retained by Kriyon and no further work will be delivered
          without a fresh engagement agreement and payment.
        </LegalP>
        <ClauseSub>3.3 — Kriyon-Initiated Cancellation</ClauseSub>
        <LegalP>
          If Kriyon cancels a project due to circumstances wholly attributable to the Company (not
          including force majeure events or the client&apos;s breach), a proportionate refund of fees
          for work demonstrably not yet commenced may be considered at Kriyon&apos;s sole
          discretion, after deducting planning, resource allocation, and administrative costs already
          incurred.
        </LegalP>
      </div>

      <Divider />

      <div id="rp-4" className="scroll-mt-40">
        <ClauseHeading num="04" title="Mandatory Dispute Process Before External Claims" />
        <HighlightBox variant="neutral">
          <strong>Mandatory First Step:</strong> Before raising any refund claim, complaint, or
          dispute before any consumer forum, court, arbitrator, social media platform, or any other
          external body, you must first exhaust the mandatory internal resolution process described
          below. This is a contractual precondition to any external claim.
        </HighlightBox>
        <ClauseSub>Step 1 — Formal Written Complaint</ClauseSub>
        <LegalP>
          Send a detailed written complaint to <strong>kriyon@repixelx.tech</strong> with the subject
          line: <strong>&quot;Formal Dispute — [Your Name] — [Project/Invoice Reference]&quot;</strong>
          . Your complaint must include: a clear description of the issue; the specific amount in
          dispute; the invoice or project reference number; copies of any relevant communications;
          and your proposed resolution. Verbal complaints, WhatsApp messages, social media posts,
          and phone calls do not constitute a formal dispute notice under this policy.
        </LegalP>
        <ClauseSub>Step 2 — Kriyon&apos;s Investigation Period</ClauseSub>
        <LegalP>
          Upon receipt of your formal written complaint, Kriyon will: acknowledge your complaint
          within 48 business hours; investigate the matter including reviewing all project
          communications, delivery records, and payment history; and respond with a formal written
          position within <strong>14 (fourteen) business days</strong>.
        </LegalP>
        <ClauseSub>Step 3 — Good Faith Resolution Window</ClauseSub>
        <LegalP>
          Both parties shall engage in good faith written communication for a further{" "}
          <strong>14 (fourteen) business days</strong> following Kriyon&apos;s formal response, to
          attempt to reach an amicable resolution. This makes the total mandatory internal
          resolution window 30 days from receipt of the complaint, as required before any external
          escalation.
        </LegalP>
        <ClauseSub>Step 4 — Escalation (if unresolved)</ClauseSub>
        <LegalP>
          Only if the dispute remains unresolved after the full 30-day internal process may either
          party escalate to arbitration under the Arbitration and Conciliation Act, 1996, with the
          seat and venue in Jammu, J&amp;K, India, as detailed in the Terms &amp; Conditions
          (Document 01). External claims filed without completing this mandatory internal process may
          be dismissed on procedural grounds and Kriyon will actively contest any such premature
          filing.
        </LegalP>
      </div>

      <Divider />

      <div id="rp-5" className="scroll-mt-40">
        <ClauseHeading num="05" title="Evidence Kriyon Maintains for Every Project" />
        <LegalP>
          Kriyon Group Private Limited routinely maintains the following records for every client
          engagement to protect both parties in the event of any dispute:
        </LegalP>
        <CheckList
          items={[
            "Signed project proposal or scope document",
            "All payment receipts, bank confirmations, and GST invoices",
            "Complete email thread from initial brief to final delivery",
            "All design files, development commits, and version histories with timestamps",
            "Delivery confirmation emails with attached deliverables",
            "Screenshots and screen recordings of completed work where applicable",
            "Project management logs showing task progression and milestones",
            "Any revision requests and the responses provided",
            "This signed Refund Policy and Terms & Conditions (where a signed acknowledgment was obtained)",
          ]}
        />
        <LegalP>
          This evidence will be presented in full in any dispute proceedings to demonstrate the value
          delivered, the work completed, and the client&apos;s acceptance of the applicable terms at
          the time of engagement.
        </LegalP>
      </div>
    </>
  );
}
