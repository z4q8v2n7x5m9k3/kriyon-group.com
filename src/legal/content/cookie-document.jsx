import {
  ClauseHeading,
  Divider,
  InfoTable,
  InfoTbody,
  InfoTd,
  InfoTh,
  InfoThead,
  InfoTr,
  LegalList,
  LegalP,
} from "../legal-blocks";
import { VentureEdova, VentureOneLink } from "../venture-links";
import { VENTURE_REPIXELX_STUDIO_URL } from "../venture-urls";

export function CookieDocument() {
  return (
    <>
      <LegalP>
        This Cookie Policy explains how Kriyon Group Private Limited and its ventures — including
        kriyongroup.com,{" "}
        <a
          href={VENTURE_REPIXELX_STUDIO_URL}
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          repixelx.com
        </a>
        , and the <VentureEdova /> and <VentureOneLink /> platforms — use cookies and similar
        tracking technologies. By continuing to use our websites, you consent to our use of cookies
        as described in this policy.
      </LegalP>

      <ClauseHeading num="01" title="What Are Cookies?" />
      <LegalP>
        Cookies are small text files that are placed on your device (computer, smartphone, or
        tablet) when you visit a website. They are widely used to make websites work more
        efficiently, to remember your preferences, and to provide website operators with analytical
        information about how users interact with their site. Cookies do not contain any information
        that directly identifies you as an individual, but they may be used in conjunction with
        other data to identify you.
      </LegalP>

      <Divider />

      <ClauseHeading num="02" title="Types of Cookies We Use" />
      <InfoTable>
        <InfoThead>
          <InfoTh>Cookie Type</InfoTh>
          <InfoTh>Purpose</InfoTh>
          <InfoTh>Duration</InfoTh>
          <InfoTh>Can Opt Out?</InfoTh>
        </InfoThead>
        <InfoTbody>
          <InfoTr striped>
            <InfoTd bold>Essential / Strictly Necessary</InfoTd>
            <InfoTd>
              Required for the website to function. Enable login sessions, security tokens, and form
              submissions. Cannot be disabled without breaking site functionality.
            </InfoTd>
            <InfoTd>Session or up to 1 year</InfoTd>
            <InfoTd>No (essential)</InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd bold>Performance / Analytics</InfoTd>
            <InfoTd>
              Collect anonymised data about how visitors use our websites — pages visited, time
              spent, traffic sources. Used via Google Analytics to help us improve our platforms.
            </InfoTd>
            <InfoTd>Up to 2 years</InfoTd>
            <InfoTd>Yes</InfoTd>
          </InfoTr>
          <InfoTr striped>
            <InfoTd bold>Functional</InfoTd>
            <InfoTd>
              Remember your preferences such as language, region, and interface settings to
              personalise your experience across sessions.
            </InfoTd>
            <InfoTd>Up to 1 year</InfoTd>
            <InfoTd>Yes</InfoTd>
          </InfoTr>
          <InfoTr>
            <InfoTd bold>Marketing / Targeting</InfoTd>
            <InfoTd>
              If enabled on our marketing pages, these track visits across websites to display
              relevant advertisements. We currently use these sparingly and only with consent.
            </InfoTd>
            <InfoTd>Up to 90 days</InfoTd>
            <InfoTd>Yes (consent required)</InfoTd>
          </InfoTr>
        </InfoTbody>
      </InfoTable>

      <Divider />

      <ClauseHeading num="03" title="Third-Party Cookies" />
      <LegalP>
        Some cookies on our websites are set by third-party services that appear on our pages. We do
        not control the setting of these cookies and we recommend you check the third-party
        websites&apos; own privacy and cookie policies for more information:
      </LegalP>
      <LegalList
        items={[
          <>
            <strong>Google Analytics (analytics.google.com):</strong> Used to analyse website traffic
            and user behaviour in aggregate. Data is anonymised and does not identify individual
            users. You can opt out via the Google Analytics Opt-out Browser Add-on at
            tools.google.com/dlpage/gaoptout.
          </>,
          <>
            <strong>Google Fonts:</strong> Used to load typography. Google may log your IP address
            when fonts are requested.
          </>,
          <>
            <strong>Payment Gateways:</strong> When you make a payment, the gateway provider may set
            session cookies to manage the transaction security.
          </>,
        ]}
      />

      <Divider />

      <ClauseHeading num="04" title="How to Manage &amp; Opt Out of Cookies" />
      <LegalP>You can control and manage cookies in several ways:</LegalP>
      <LegalList
        items={[
          <>
            <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies
            through their settings. Visit your browser&apos;s help documentation: Chrome —
            chrome://settings/cookies; Firefox — about:preferences#privacy; Safari — Preferences &gt;
            Privacy; Edge — edge://settings/privacy.
          </>,
          <>
            <strong>Cookie Consent Banner:</strong> On your first visit to our website, our cookie
            consent banner will give you the option to accept or decline non-essential cookies. You
            can update your preferences at any time by clicking the &quot;Cookie Preferences&quot;
            link in our website footer.
          </>,
          <>
            <strong>Google Analytics Opt-Out:</strong> Install the Google Analytics opt-out browser
            add-on at tools.google.com/dlpage/gaoptout.
          </>,
        ]}
      />
      <LegalP>
        Please note that blocking essential cookies may impact the functionality of our websites
        and platforms. Blocking performance and functional cookies may result in a less
        personalised experience but will not prevent you from using our core services.
      </LegalP>

      <Divider />

      <ClauseHeading num="05" title="Cookie Consent &amp; Updates" />
      <LegalP>
        When you first visit any Kriyon Group website, you will be presented with a cookie consent
        banner requesting your permission for non-essential cookies. We will not set any non-essential
        cookies before you have given your consent. Your consent preferences are stored for 12 months,
        after which we will ask for your preferences again. You may withdraw your consent at any
        time via the Cookie Preferences link in our footer.
      </LegalP>
      <LegalP>
        This Cookie Policy may be updated from time to time. The most current version is always
        available at <strong>kriyongroup.com/legal</strong>.
      </LegalP>
      <LegalP>
        For cookie-related questions: <strong>kriyon@repixelx.tech</strong>
      </LegalP>
    </>
  );
}
