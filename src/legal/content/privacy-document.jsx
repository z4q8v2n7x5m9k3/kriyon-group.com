import {
  ClauseHeading,
  ClauseSub,
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
  SubNav,
} from "../legal-blocks";
import {
  VentureEdova,
  VentureOneLink,
  VentureRepixelXStudio,
} from "../venture-links";
export function PrivacyDocument() {
  return (
    <>
      <SubNav
        links={[
          { href: "#pp-1", label: "Data We Collect" },
          { href: "#pp-2", label: "Purpose" },
          { href: "#pp-3", label: "Sharing" },
          { href: "#pp-4", label: "Security" },
          { href: "#pp-5", label: "Your Rights" },
          { href: "#pp-6", label: "Retention" },
          { href: "#pp-7", label: "Children" },
          { href: "#pp-8", label: "Contact" },
        ]}
      />
      <LegalP>
        Kriyon Group Private Limited (&quot;Kriyon&quot;, &quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) is committed to protecting the privacy and security of your personal
        information. This Privacy Policy explains how we collect, use, store, share, and protect your
        personal data across all our platforms and ventures — Kriyon Group,{" "}
        <VentureRepixelXStudio />, <VentureOneLink />, and <VentureEdova /> — and explains your
        rights under Indian law.
      </LegalP>
      <LegalP>
        This policy is published in compliance with the <strong>Information Technology Act, 2000</strong>
        , the{" "}
        <strong>
          Information Technology (Reasonable Security Practices and Procedures and Sensitive
          Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;)
        </strong>
        , and the{" "}
        <strong>Digital Personal Data Protection Act, 2023 (&quot;DPDPA 2023&quot;)</strong>.
      </LegalP>

      <div id="pp-1" className="scroll-mt-40">
        <ClauseHeading num="01" title="Information We Collect" />
        <ClauseSub>1.1 — Identity &amp; Contact Data</ClauseSub>
        <LegalP>
          When you engage our services, register on any of our platforms, or contact us, we collect:
          full name; business or company name; email address; phone number; postal address; GSTIN (for
          B2B invoicing purposes); job title or designation; and any other information you
          voluntarily provide through forms, emails, or project briefs.
        </LegalP>
        <ClauseSub>1.2 — Financial &amp; Transaction Data</ClauseSub>
        <LegalP>
          For billing and invoicing purposes, we collect: payment transaction records and invoice
          history; bank transfer references; GST-related billing information.{" "}
          <strong>
            Kriyon Group Private Limited does not store, process, or have access to full
            debit/credit card numbers, CVV codes, or banking passwords.
          </strong>{" "}
          All card-based payments are processed exclusively through PCI-DSS-compliant third-party
          payment gateways, and the financial data resides solely with those gateways.
        </LegalP>
        <ClauseSub>1.3 — Technical &amp; Usage Data</ClauseSub>
        <LegalP>
          When you visit our websites or use our platforms (particularly <VentureOneLink /> and{" "}
          <VentureEdova />
          ), we
          automatically collect: IP address; browser type and version; device type and operating
          system; pages visited and time spent; referring URL; session data and interaction logs;
          and performance analytics data. This data is collected through cookies, log files, and
          analytics tools such as Google Analytics.
        </LegalP>
        <ClauseSub>
          1.4 — Platform-Specific Data (<VentureEdova />)
        </ClauseSub>
        <LegalP>
          On the <VentureEdova /> platform specifically, we collect: academic preferences and exam
          selections;
          quiz attempts, scores, and performance metrics; AI-interaction data including questions
          generated and answered; personalised learning path data; and session activity within the
          platform. This data is used to power personalised learning and improve our AI models, and
          is processed in anonymised or pseudonymised form wherever possible.
        </LegalP>
        <ClauseSub>1.5 — Communication Data</ClauseSub>
        <LegalP>
          We retain records of all written communications with you — emails, project briefs, feedback
          messages, and support tickets — for operational, legal, and dispute-resolution purposes.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-2" className="scroll-mt-40">
        <ClauseHeading num="02" title="How &amp; Why We Use Your Data" />
        <InfoTable>
          <InfoThead>
            <InfoTh>Purpose</InfoTh>
            <InfoTh>Legal Basis</InfoTh>
            <InfoTh>Details</InfoTh>
          </InfoThead>
          <InfoTbody>
            <InfoTr striped>
              <InfoTd bold>Service Delivery</InfoTd>
              <InfoTd>Contractual necessity</InfoTd>
              <InfoTd>To execute projects, deliver platforms, and fulfil our contractual obligations</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Invoicing &amp; Tax Compliance</InfoTd>
              <InfoTd>Legal obligation</InfoTd>
              <InfoTd>GST invoicing requires name, address, and GSTIN; retained for 8 years per tax law</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Platform Operation</InfoTd>
              <InfoTd>Legitimate interest</InfoTd>
              <InfoTd>
                To operate, maintain, and improve <VentureOneLink /> and <VentureEdova /> platforms
              </InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>
                AI Model Improvement (<VentureEdova />)
              </InfoTd>
              <InfoTd>Consent / Legitimate interest</InfoTd>
              <InfoTd>Anonymised usage data improves question quality and learning path recommendations</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Communications</InfoTd>
              <InfoTd>Contractual necessity</InfoTd>
              <InfoTd>Project updates, approvals, invoices, and support communications</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Legal Protection</InfoTd>
              <InfoTd>Legal obligation / Legitimate interest</InfoTd>
              <InfoTd>To preserve records for dispute resolution, legal proceedings, or regulatory compliance</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Marketing (if opted in)</InfoTd>
              <InfoTd>Consent</InfoTd>
              <InfoTd>Updates about new services — only to users who have explicitly opted in</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Analytics &amp; Performance</InfoTd>
              <InfoTd>Legitimate interest</InfoTd>
              <InfoTd>Understanding website usage to improve user experience</InfoTd>
            </InfoTr>
          </InfoTbody>
        </InfoTable>
        <LegalP>
          We do not use your personal data for any purpose not listed above without your explicit
          prior consent.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-3" className="scroll-mt-40">
        <ClauseHeading num="03" title="Data Sharing &amp; Third Parties" />
        <HighlightBox variant="green">
          <strong>We do not sell your personal data.</strong> Kriyon Group Private Limited has never
          sold, and will never sell, client or user personal data to third parties for advertising,
          profiling, or any other commercial purpose.
        </HighlightBox>
        <LegalP>
          We share your data only with the following categories of trusted service providers,
          strictly on a need-to-know basis and subject to data processing agreements:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong>Cloud Infrastructure Providers:</strong> Our platforms are hosted on reputable
              cloud providers (such as AWS or equivalent). These providers process data only as
              directed by us and have no independent right to use your data.
            </>,
            <>
              <strong>Payment Gateways:</strong> Third-party payment processors (such as Razorpay,
              PayU, or equivalent) process transaction data. They operate under their own privacy
              policies and are independently compliant with financial data regulations.
            </>,
            <>
              <strong>AI API Providers:</strong> For <VentureEdova />
              &apos;s AI functionality, anonymised content
              is processed through AI APIs. No personally identifiable information is shared with AI
              providers.
            </>,
            <>
              <strong>Legal &amp; Professional Advisors:</strong> Our lawyers, chartered accountants,
              and compliance advisors may access relevant data strictly for professional services
              delivery and are bound by professional confidentiality obligations.
            </>,
            <>
              <strong>Analytics Tools:</strong> Aggregated, non-personally identifiable analytics data
              may be processed by tools such as Google Analytics to understand website usage.
            </>,
            <>
              <strong>Government &amp; Regulatory Authorities:</strong> We may disclose personal data
              to law enforcement agencies, courts, or government bodies when required by law, court
              order, or to protect our legal rights.
            </>,
          ]}
        />
        <LegalP>
          Any third-party service provider that receives personal data from us is contractually
          required to maintain confidentiality, process data only as instructed, and implement
          appropriate security measures.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-4" className="scroll-mt-40">
        <ClauseHeading num="04" title="Data Security" />
        <LegalP>
          Kriyon Group Private Limited implements industry-standard security measures to protect your
          personal data from unauthorised access, disclosure, alteration, or destruction. Our
          security practices include: encrypted data transmission (HTTPS/TLS); access control and
          role-based permissions for internal systems; regular security assessments of our platforms;
          and secure, access-restricted data storage on cloud infrastructure.
        </LegalP>
        <LegalP>
          Notwithstanding these measures, no method of transmission over the internet or electronic
          storage is 100% secure. We cannot guarantee absolute security but commit to implementing
          all reasonable and proportionate measures. In the event of a data breach that is likely to
          adversely affect your rights, we will notify you as required by applicable law.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-5" className="scroll-mt-40">
        <ClauseHeading num="05" title="Your Rights as a Data Principal" />
        <LegalP>
          Under the Digital Personal Data Protection Act, 2023 and applicable Indian law, you have
          the following rights with respect to your personal data held by Kriyon:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong>Right to Access:</strong> You may request a summary of the personal data we hold
              about you and how it is being processed.
            </>,
            <>
              <strong>Right to Correction:</strong> You may request correction of any inaccurate or
              incomplete personal data we hold about you.
            </>,
            <>
              <strong>Right to Erasure:</strong> You may request deletion of your personal data,
              subject to limitations arising from legal, contractual, financial, or regulatory
              obligations. Data required for active legal proceedings, pending invoices, or statutory
              retention periods cannot be deleted until those obligations are fulfilled.
            </>,
            <>
              <strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may
              withdraw your consent at any time. Withdrawal does not affect the lawfulness of
              processing before the withdrawal.
            </>,
            <>
              <strong>Right to Grievance Redressal:</strong> You may raise any privacy-related complaint
              or concern with our Grievance Officer.
            </>,
            <>
              <strong>Right to Nominate:</strong> Under DPDPA 2023, you may nominate another individual
              to exercise your rights in the event of your death or incapacity.
            </>,
          ]}
        />
        <LegalP>
          To exercise any of the above rights, please send a written request to{" "}
          <strong>kriyon@repixelx.tech</strong> with the subject line &quot;Privacy Rights Request —
          [Your Name]&quot;. We will acknowledge your request within <strong>48 hours</strong> and
          fulfil it within <strong>30 calendar days</strong>, provided there are no pending legal or
          financial matters that require retention of the relevant data.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-6" className="scroll-mt-40">
        <ClauseHeading num="06" title="Data Retention" />
        <LegalP>
          We retain your personal data only for as long as is necessary for the purposes for which it
          was collected, or as required by applicable law. Our general retention schedule is:
        </LegalP>
        <InfoTable>
          <InfoThead>
            <InfoTh>Data Type</InfoTh>
            <InfoTh>Retention Period</InfoTh>
            <InfoTh>Basis</InfoTh>
          </InfoThead>
          <InfoTbody>
            <InfoTr striped>
              <InfoTd bold>GST invoices &amp; financial records</InfoTd>
              <InfoTd>8 years from the end of financial year</InfoTd>
              <InfoTd>GST Act, Income Tax Act</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Project files &amp; deliverables</InfoTd>
              <InfoTd>3 years post-project completion</InfoTd>
              <InfoTd>Limitation Act (potential disputes)</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Email communications</InfoTd>
              <InfoTd>3 years post-project</InfoTd>
              <InfoTd>Legal protection</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>
                Platform usage data (<VentureEdova />/<VentureOneLink />)
              </InfoTd>
              <InfoTd>Duration of active subscription + 1 year</InfoTd>
              <InfoTd>Service delivery &amp; improvement</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Marketing contact data (opted in)</InfoTd>
              <InfoTd>Until opt-out or 2 years inactivity</InfoTd>
              <InfoTd>Consent</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Legal dispute records</InfoTd>
              <InfoTd>Until final resolution + 5 years</InfoTd>
              <InfoTd>Legal protection</InfoTd>
            </InfoTr>
          </InfoTbody>
        </InfoTable>
      </div>

      <Divider />

      <div id="pp-7" className="scroll-mt-40">
        <ClauseHeading num="07" title="Children&apos;s Privacy" />
        <LegalP>
          Our services are not directed at children under the age of 18. Kriyon Group Private
          Limited does not knowingly collect personal data from minors. If we become aware that we
          have inadvertently collected personal data from a person under 18, we will take immediate
          steps to delete such data from our systems. If you believe we may have collected data from
          a minor, please contact us immediately at kriyon@repixelx.tech.
        </LegalP>
        <LegalP>
          For <VentureEdova />
          &apos;s educational platform: where the platform is used by educational
          institutions for students below 18, it is the responsibility of the institution to ensure
          appropriate parental or guardian consent has been obtained before granting access.
        </LegalP>
      </div>

      <Divider />

      <div id="pp-8" className="scroll-mt-40">
        <ClauseHeading num="08" title="Changes to This Policy" />
        <LegalP>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or for other operational reasons. The updated policy will
          be published at <strong>kriyongroup.com/legal</strong> with a revised &quot;Last
          Updated&quot; date. We encourage you to review this policy periodically. For material
          changes, we will endeavour to provide notice via email to registered users or through a
          prominent notice on our website.
        </LegalP>
        <ClauseHeading num="09" title="Contact — Privacy Grievances" />
        <LegalP>
          For any questions, concerns, or complaints regarding this Privacy Policy or our data
          practices, please contact our Grievance Officer:
        </LegalP>
        <InfoTable>
          <InfoTbody>
            <InfoTr striped>
              <InfoTd bold>Grievance Officer</InfoTd>
              <InfoTd>
                <strong>Krishang Sharma Dhar</strong>, Director &amp; Founder
              </InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Email</InfoTd>
              <InfoTd>kriyon@repixelx.tech (Subject: &quot;Privacy Concern — [Your Name]&quot;)</InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Phone</InfoTd>
              <InfoTd>+91 9622121100</InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>Address</InfoTd>
              <InfoTd>
                Room No. 2, First Floor, Tawi Enclave, Vill Nandini, Jammu, J&amp;K – 180002
              </InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>Response Time</InfoTd>
              <InfoTd>Within 48 hours acknowledgement; 30 days resolution</InfoTd>
            </InfoTr>
          </InfoTbody>
        </InfoTable>
      </div>
    </>
  );
}
