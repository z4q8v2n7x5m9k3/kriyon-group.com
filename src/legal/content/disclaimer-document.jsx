import {
  ClauseHeading,
  Divider,
  HighlightBox,
  LegalP,
} from "../legal-blocks";
import {
  VentureEdova,
  VentureOneLink,
  VentureRepixelXStudio,
} from "../venture-links";
import { VENTURE_REPIXELX_STUDIO_URL } from "../venture-urls";

export function DisclaimerDocument() {
  return (
    <>
      <LegalP>
        This Disclaimer applies to all websites, platforms, communications, deliverables, and
        services offered or operated by Kriyon Group Private Limited and its ventures, including{" "}
        <VentureRepixelXStudio />, <VentureOneLink />, and <VentureEdova />. Please read this
        Disclaimer carefully.
      </LegalP>

      <ClauseHeading num="01" title="General Information Only" />
      <LegalP>
        The content published on any Kriyon Group website, including kriyongroup.com,{" "}
        <a
          href={VENTURE_REPIXELX_STUDIO_URL}
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          repixelx.com
        </a>
        , and the <VentureEdova /> and <VentureOneLink /> platforms, is provided for{" "}
        <strong>general informational purposes only</strong>. It does not constitute professional
        advice of any kind — including but not limited to legal, financial, investment, medical,
        academic, or business advice. You should not rely on any content on our websites as a
        substitute for obtaining appropriate professional advice specific to your situation from a
        qualified professional.
      </LegalP>

      <Divider />

      <ClauseHeading num="02" title="AI-Generated Content Disclaimer (Edova)" />
      <HighlightBox variant="neutral">
        <strong>AI Content Notice:</strong> <VentureEdova />
        &apos;s exam questions, study materials, and learning
        recommendations are generated or assisted by artificial intelligence. While we invest
        significant effort in quality control, AI-generated content may contain factual errors,
        outdated information, or inaccuracies. All AI-generated content should be verified against
        authoritative, up-to-date sources before being relied upon for any examination or academic
        purpose.
      </HighlightBox>
      <LegalP>
        Kriyon Group Private Limited makes no representation or warranty as to the accuracy,
        completeness, currency, or reliability of any AI-generated content on the{" "}
        <VentureEdova /> platform. <VentureEdova /> is a supplementary preparation tool and is not
        intended to replace authoritative
        textbooks, official course materials, certified instructors, or other accredited educational
        resources.
      </LegalP>

      <Divider />

      <ClauseHeading num="03" title="No Guarantee of Academic or Examination Results" />
      <LegalP>
        Kriyon Group Private Limited and the <VentureEdova /> platform{" "}
        <strong>explicitly and unconditionally disclaim</strong> any guarantee, representation, or
        warranty — implied or express — that use of the <VentureEdova /> platform will result in:
        passing any
        examination; achieving any specific score, rank, or percentile; securing any admission to
        any educational institution; obtaining any certification or qualification; or any other
        specific academic outcome.
      </LegalP>
      <LegalP>
        Educational outcomes depend on a multitude of factors entirely outside Kriyon&apos;s control,
        including the learner&apos;s individual effort, prior knowledge, time invested, health, and
        circumstances during examinations, as well as the difficulty and nature of the examination
        itself. Kriyon&apos;s responsibility is to provide quality preparation tools — outcomes
        remain entirely the learner&apos;s own.
      </LegalP>

      <Divider />

      <ClauseHeading num="04" title="No Guarantee of Business or Commercial Results" />
      <LegalP>
        Kriyon Group Private Limited, through <VentureRepixelXStudio /> and other ventures, provides
        creative,
        technical, and digital services with the intention of supporting our clients&apos; business
        goals. However, we <strong>make no guarantee, representation, or warranty</strong> that any
        design, branding, website, marketing material, software, or other deliverable produced by
        Kriyon will result in: any specific increase in revenue, leads, conversions, or sales; any
        improvement in search engine rankings or online visibility; any specific business outcome
        or return on investment; or any particular level of user engagement, traffic, or brand
        recognition.
      </LegalP>
      <LegalP>
        Commercial success depends on numerous variables beyond the quality of design or technology,
        including market conditions, pricing, sales processes, customer service, and competitive
        landscape. Kriyon&apos;s responsibility is to deliver high-quality work as agreed in the SOW
        — business outcomes are outside our scope of liability.
      </LegalP>

      <Divider />

      <ClauseHeading num="05" title="Website Accuracy &amp; Currency" />
      <LegalP>
        While Kriyon makes reasonable efforts to ensure the information published on its websites is
        accurate and up-to-date, we make no warranties regarding the accuracy, completeness,
        suitability, or availability of the information, products, services, or related graphics on
        our websites for any purpose. Website content may be updated, amended, or removed at any
        time without notice. Kriyon is not responsible for any losses or damages arising from
        reliance on information that has become outdated since it was published.
      </LegalP>

      <Divider />

      <ClauseHeading num="06" title="Third-Party Links &amp; Resources" />
      <LegalP>
        Our websites and platforms may contain links to third-party websites, resources, tools, or
        services that are not owned or controlled by Kriyon Group Private Limited. These links are
        provided for convenience and informational purposes only. Kriyon does not endorse,
        control, monitor, or take responsibility for the content, privacy policies, availability,
        accuracy, or practices of any third-party website or resource. Accessing any third-party
        website through a link on our platforms is done at your own risk, and Kriyon accepts no
        liability for any loss or damage arising from your use of or reliance on such third-party
        content.
      </LegalP>

      <Divider />

      <ClauseHeading num="07" title="Service Availability" />
      <LegalP>
        Kriyon Group Private Limited does not warrant that our websites, platforms, or services will
        be continuously available, error-free, or free from technical defects. We reserve the right
        to suspend, modify, or discontinue any platform or service — temporarily or permanently —
        with or without notice, for maintenance, upgrades, legal compliance, or any other reason.
        Kriyon shall not be liable to you or any third party for any modification, suspension, or
        discontinuation of services, except where expressly required by a signed contractual
        obligation.
      </LegalP>

      <Divider />

      <ClauseHeading num="08" title="Testimonials &amp; Case Studies" />
      <LegalP>
        Any client testimonials, case studies, or success stories published on Kriyon&apos;s websites
        are representative of individual client experiences and results. These are not typical
        results and do not constitute a guarantee that you will achieve the same or similar
        outcomes. Results vary based on individual business circumstances, industry, implementation,
        and effort.
      </LegalP>

      <Divider />

      <ClauseHeading num="09" title="Contact" />
      <LegalP>
        For questions about this Disclaimer, contact: <strong>kriyon@repixelx.tech</strong> · Kriyon
        Group Private Limited · +91 9622121100
      </LegalP>
    </>
  );
}
