import {
  CheckList,
  ClauseHeading,
  ClauseSub,
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
  SubNav,
} from "../../legal-blocks";
import {
  VentureEdova,
  VentureOneLink,
  VentureRepixelXStudio,
} from "../../venture-links";

export function TermsPart1() {
  return (
    <>
      <SubNav
        links={[
          { href: "#tc-1", label: "Company Identity" },
          { href: "#tc-2", label: "Acceptance" },
          { href: "#tc-3", label: "Services" },
          { href: "#tc-4", label: "Payments" },
          { href: "#tc-5", label: "Refund & IP" },
          { href: "#tc-7", label: "Confidentiality" },
          { href: "#tc-8", label: "Liability" },
          { href: "#tc-9", label: "Governing Law" },
          { href: "#tc-6", label: "Disputes" },
          { href: "#tc-10", label: "Closing" },
        ]}
      />

      <HighlightBox variant="neutral">
        <span className="font-semibold text-neutral-900">Binding agreement.</span>{" "}
        <span className="text-neutral-700">
          Please read these Terms &amp; Conditions carefully before accessing or using any website,
          platform, product, or service operated or offered by Kriyon Group Private Limited. By
          accessing our platforms, signing a proposal, making a payment, or engaging our services in
          any form, you confirm that you have read, understood, and agreed to be legally bound by
          these Terms. If you do not agree, you must immediately discontinue use of our services.
        </span>
      </HighlightBox>

      <div id="tc-1" className="scroll-mt-40">
        <ClauseHeading
          num="01"
          title="Company Identity &amp; Corporate Information"
        />
        <LegalP>
          These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding agreement
          between <strong>Kriyon Group Private Limited</strong> and you — the individual, business
          entity, organisation, or representative accessing or using our websites, platforms, or
          services.
        </LegalP>
        <CorpCard title="Kriyon Group Private Limited — Registered Corporate Details">
          <CorpRow label="Legal Name" value="Kriyon Group Private Limited" />
          <CorpRow label="CIN" value="U74909JK2025PTC017984" />
          <CorpRow label="PAN" value="AAMCK2092B" />
          <CorpRow label="TAN" value="AMRK14910A" />
          <CorpRow label="GSTIN" value="01AAMCK2092B1Z0" />
          <CorpRow label="Incorporated" value="19 September 2025" />
          <CorpRow
            label={"Director & Founder (DIN: 11307171)"}
            value="Krishang Sharma Dhar"
          />
          <CorpRow label="Director" value="Neha" />
          <CorpRow
            label="Registered Office"
            value="Room No. 2, First Floor, Tawi Enclave, Vill Nandini, Gol Gujral, Jammu, J&K – 180002"
          />
          <CorpRow label="Email" value="kriyon@repixelx.tech" />
          <CorpRow label="Phone" value="+91 9622121100" />
          <CorpRow label="Website" value="www.kriyongroup.com" />
        </CorpCard>
        <LegalP>
          Kriyon Group Private Limited is referred to herein as <strong>&quot;Kriyon&quot;</strong>,{" "}
          <strong>&quot;Company&quot;</strong>, <strong>&quot;we&quot;</strong>,{" "}
          <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>. The party engaging
          our services is referred to as <strong>&quot;Client&quot;</strong>,{" "}
          <strong>&quot;User&quot;</strong>, or <strong>&quot;you&quot;</strong>.
        </LegalP>
        <LegalP>
          Kriyon Group Private Limited is a technology-driven company incorporated under the
          Companies Act, 2013. It operates the following registered ventures and sub-brands:
        </LegalP>
        <InfoTable>
          <InfoThead>
            <InfoTh>Venture</InfoTh>
            <InfoTh>Nature of Business</InfoTh>
            <InfoTh>Key Services</InfoTh>
          </InfoThead>
          <InfoTbody>
            <InfoTr striped>
              <InfoTd bold>
                <VentureRepixelXStudio />
              </InfoTd>
              <InfoTd>Creative technology agency</InfoTd>
              <InfoTd>
                Branding, UI/UX design, web development, video editing, digital marketing,
                full-stack development
              </InfoTd>
            </InfoTr>
            <InfoTr>
              <InfoTd bold>
                <VentureOneLink />
              </InfoTd>
              <InfoTd>Digital product platform</InfoTd>
              <InfoTd>
                Smart link pages, business landing systems, payment-enabled digital profiles,
                storefront integrations
              </InfoTd>
            </InfoTr>
            <InfoTr striped>
              <InfoTd bold>
                <VentureEdova />
              </InfoTd>
              <InfoTd>AI-powered EdTech platform</InfoTd>
              <InfoTd>
                AI exam engines, question generation, personalised learning modules, curriculum
                development
              </InfoTd>
            </InfoTr>
          </InfoTbody>
        </InfoTable>
        <LegalP>
          These Terms apply collectively to all ventures, sub-brands, platforms, websites, services,
          products, proposals, contracts, and digital deliverables of Kriyon Group Private Limited,
          unless a separate written agreement expressly supersedes them for a specific engagement.
        </LegalP>
      </div>

      <Divider />

      <div id="tc-2" className="scroll-mt-40">
        <ClauseHeading num="02" title="Acceptance of Terms" />
        <LegalP>
          Your use of any Kriyon platform or service constitutes full and unconditional acceptance
          of these Terms. Acceptance is also deemed confirmed when you:
        </LegalP>
        <CheckList
          items={[
            "Sign a proposal, quotation, or contract with Kriyon Group Private Limited",
            "Make full or partial payment for any service, product, or subscription",
            "Submit a project brief, onboarding form, or client intake questionnaire",
            "Exchange emails confirming engagement, scope, or delivery",
            "Access, use, download, or deploy any Kriyon platform, product, or deliverable",
          ]}
        />
        <LegalP>
          If you are entering into this agreement on behalf of a company, partnership, LLP, or any
          other legal entity, you represent and warrant that you have the legal authority to bind
          that entity to these Terms. The entity itself shall be held liable under these Terms and
          not just the individual representative.
        </LegalP>
        <LegalP>
          We reserve the right to update these Terms at any time. The revised version will be
          published on our website at <strong>kriyongroup.com/legal</strong> with an updated
          &quot;Last Updated&quot; date. Continued use of our services after such update constitutes
          acceptance of the revised Terms.
        </LegalP>
        <ClauseHeading num="03" title="Eligibility" />
        <LegalP>
          You must be at least <strong>18 years of age</strong>, or the age of legal majority in
          your jurisdiction, whichever is higher, to use our services or enter into any agreement
          with Kriyon. By using our services, you represent that you are legally capable of
          entering into a binding contract under the <strong>Indian Contract Act, 1872</strong>. Use
          of our services by minors, persons of unsound mind, or persons prohibited from contracting
          under applicable law is strictly not permitted. Kriyon shall not be held liable for any
          such unauthorised use.
        </LegalP>
      </div>

      <Divider />

      <div id="tc-3" className="scroll-mt-40">
        <ClauseHeading num="04" title="Services Offered" />
        <ClauseSub>
          4.1 — <VentureRepixelXStudio />
        </ClauseSub>
        <LegalP>
          <VentureRepixelXStudio /> provides professional creative and technology services on a project or
          retainer basis, including but not limited to: brand identity design (logos, brand
          guidelines, visual identity systems); UI/UX design (wireframes, prototypes, interaction
          design, design systems); website design and full-stack development; motion graphics and
          video editing; social media creatives and digital marketing assets; and custom software
          and mobile application development.
        </LegalP>
        <ClauseSub>
          4.2 — <VentureOneLink />
        </ClauseSub>
        <LegalP>
          <VentureOneLink /> provides digital product and platform services including: smart digital link pages
          and microsites; business landing page systems and conversion pages; payment-enabled
          digital profiles and portfolio pages; product listing and storefront integrations; and
          custom domain-linked digital identity products for professionals and businesses.
        </LegalP>
        <ClauseSub>
          4.3 — <VentureEdova />
        </ClauseSub>
        <LegalP>
          <VentureEdova /> provides AI-powered educational tools and services including: AI-powered exam
          preparation and question generation; personalised learning modules and assessments; exam
          engine infrastructure for educational institutions and educators; content and curriculum
          development services powered by generative AI; and data-driven performance analytics for
          learners.
        </LegalP>
        <ClauseSub>4.4 — Statement of Work</ClauseSub>
        <LegalP>
          Each service engagement may be subject to a separate <strong>Statement of Work (SOW)</strong>
          , project proposal, or service agreement, which shall be read alongside these Terms. In
          case of any conflict between a specific SOW and these Terms, the SOW shall prevail only
          for that specific project. For all matters not addressed in the SOW, these Terms shall
          govern.
        </LegalP>
        <LegalP>
          We reserve the right to add, modify, discontinue, or restructure any service, venture, or
          platform feature at any time without prior notice. Kriyon shall not be liable to any
          party for any modification, suspension, or discontinuance of any service.
        </LegalP>
        <ClauseHeading num="05" title="Client Obligations" />
        <LegalP>
          You agree to fulfil the following obligations throughout any engagement with Kriyon Group
          Private Limited:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong>Accurate Information:</strong> Provide accurate, complete, and up-to-date
              information as required for service delivery, onboarding, and invoicing, including
              correct business name, GSTIN, and contact details.
            </>,
            <>
              <strong>Timely Response:</strong> Respond to communication, feedback requests,
              approvals, and review cycles in a timely manner. Delays caused by client
              unresponsiveness are not the responsibility of Kriyon and do not entitle the client to
              timeline adjustments at Kriyon&apos;s expense.
            </>,
            <>
              <strong>Asset Delivery:</strong> Provide all necessary access credentials, source
              assets, brand files, written content, photographs, and approvals as agreed in the SOW
              within the stipulated timelines.
            </>,
            <>
              <strong>Legal Content:</strong> Ensure that any content, brand elements, photographs,
              or materials you provide to Kriyon do not infringe upon any third-party intellectual
              property rights, privacy rights, or violate any applicable law.
            </>,
            <>
              <strong>Written Communication:</strong> Communicate all project-related instructions,
              revisions, and approvals exclusively via official written channels — email at
              kriyon@repixelx.tech or the designated project management tool. Verbal instructions are
              not binding.
            </>,
            <>
              <strong>No Misuse:</strong> Not misuse, resell, sublicense, reverse-engineer, or
              impersonate our platforms, services, or deliverables in any form.
            </>,
          ]}
        />
        <LegalP>
          Kriyon shall not be responsible for project delays, substandard deliverables, or project
          failures that result from your failure to fulfil these obligations.
        </LegalP>
      </div>

      <Divider />

      <div id="tc-4" className="scroll-mt-40">
        <ClauseHeading num="06" title="Payment Terms" />
        <HighlightBox variant="neutral">
          <strong>Advance Payment Required:</strong> Work on any project, engagement, or service
          will not commence until the agreed advance payment or retainer has been received and
          cleared in Kriyon&apos;s bank account. This is a firm policy across all ventures —{" "}
          <VentureRepixelXStudio />, <VentureOneLink />, and <VentureEdova />. No exceptions.
        </HighlightBox>
        <ClauseSub>6.1 — Advance &amp; Retainer</ClauseSub>
        <LegalP>
          All project engagements require a minimum advance payment as specified in the project
          proposal before any work — including discovery, planning, research, or strategy — is
          initiated. The advance amount blocks Kriyon&apos;s team capacity and is non-refundable
          regardless of any subsequent changes in the client&apos;s circumstances.
        </LegalP>
        <ClauseSub>6.2 — Milestone-Based Billing</ClauseSub>
        <LegalP>
          For projects above a certain value threshold (as specified in the SOW), payments shall be
          structured in milestone instalments. Each milestone must be paid and cleared before the
          subsequent phase begins. Kriyon reserves the right to pause all work if any milestone
          payment is overdue.
        </LegalP>
        <ClauseSub>6.3 — Invoice Due Date</ClauseSub>
        <LegalP>
          Unless otherwise stated in writing, all invoices issued by Kriyon Group Private Limited
          are due within <strong>7 (seven) calendar days</strong> of the invoice date. Final
          delivery invoices must be cleared before any files, source assets, login credentials, or
          intellectual property are transferred to the client.
        </LegalP>
        <ClauseSub>6.4 — Late Payment Interest</ClauseSub>
        <LegalP>
          Invoices not paid within the due date shall attract a late payment interest of{" "}
          <strong>18% per annum</strong> (approximately 1.5% per month), calculated on a daily
          basis from the due date until the date of actual payment. Kriyon reserves the right to
          apply this interest automatically and include it in the next invoice or demand letter.
        </LegalP>
        <ClauseSub>6.5 — GST &amp; Statutory Taxes</ClauseSub>
        <LegalP>
          All fees quoted by Kriyon are exclusive of applicable Goods and Services Tax (GST) and any
          other statutory levies unless expressly stated otherwise. GST will be charged at the
          applicable rate as per current Indian tax law. Our GSTIN is{" "}
          <strong>01AAMCK2092B1Z0</strong>. Kriyon issues compliant GST invoices for all taxable
          transactions.
        </LegalP>
        <ClauseSub>6.6 — Currency</ClauseSub>
        <LegalP>
          All payments shall be made in <strong>Indian Rupees (INR)</strong> unless expressly agreed
          otherwise in writing. International clients making payments in foreign currency do so at
          the prevailing exchange rate and bear any conversion or banking charges.
        </LegalP>
        <ClauseSub>6.7 — Work Suspension for Non-Payment</ClauseSub>
        <LegalP>
          Kriyon reserves the right to pause, suspend, or completely halt delivery of any work,
          platform access, or ongoing service if any payment remains overdue by more than 7 (seven)
          days beyond the due date. Such a work suspension shall not constitute a breach by Kriyon
          and shall not entitle the client to any refund or compensation. Work will resume only
          upon clearance of all outstanding dues.
        </LegalP>
      </div>
    </>
  );
}
