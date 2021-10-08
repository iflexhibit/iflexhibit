import Button from "components/Button";
import Layout from "components/Layout";
import styles from "styles/layouts/LegalLayout.module.scss";
import Image from "next/image";

const LegalLayout = () => {
  return (
    <Layout
      title="Legal Agreement | iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/legal"
    >
      <div className={styles["legal"]}>
        <div className={styles["logos"]}>
          <Image
            src="/assets/logos/brandmark.svg"
            width="50"
            height="50"
            objectFit="contain"
            alt="iflexhibit brandmark"
          />
          <Image
            src="/assets/logos/lettermark.svg"
            width="200"
            height="50"
            objectFit="contain"
            alt="iflexhibit lettermark"
          />
        </div>
        <TermsSection />
        <PrivacySection />
        <div className={styles["controls"]}>
          <Button
            href="/"
            label="go back to home page"
            variant="contained"
            fullWidth
            text="uppercase"
          />
        </div>
      </div>
    </Layout>
  );
};

const TermsSection = () => {
  return (
    <section id="terms" className={styles["terms"]}>
      <h1>Terms and Conditions</h1>
      <small>Effective date: 2021-07-07</small>
      <div className={styles["body"]}>
        <ol>
          <li>
            <h2>Terms</h2>
            <p>
              By accessing this Website, accessible from
              https://iflexhibit.com/, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trademark law.
            </p>
          </li>
          <li>
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on iFLEXHIBIT&apos;s Website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ol>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on
                iFLEXHIBIT&apos;s Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transferring the materials to another person or
                &quot;mirror&quot; the materials on any other server.
              </li>
            </ol>
            <p>
              This will let iFLEXHIBIT to terminate upon violations of any of
              these restrictions. Upon termination, your viewing right will also
              be terminated, and you should 336 destroy any downloaded materials
              in your possession whether it is printed or electronic format.
            </p>
          </li>
          <li>
            <h2>Disclaimer</h2>
            <p>
              All the materials on iFLEXHIBIT’s Website are provided &quot;as
              is&quot;. iFLEXHIBIT makes no warranties, may it be expressed or
              implied, therefore negates all other warranties. Furthermore,
              iFLEXHIBIT does not make any representations concerning the
              accuracy or reliability of the use of the materials on its Website
              or otherwise relating to such materials or any sites linked to
              this Website.
            </p>
          </li>
          <li>
            <h2>Limitations</h2>
            <p>
              iFLEXHIBIT or its suppliers will not be held accountable for any
              damages that will arise with the use or inability to use the
              materials on iFLEXHIBIT’s Website, even if iFLEXHIBIT or an
              authorized representative of this Website has been notified,
              orally or written, of the possibility of such damage. Some
              jurisdictions do not allow limitations on implied warranties or
              limitations of liability for incidental damages, these limitations
              may not apply to you.
            </p>
          </li>
          <li>
            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on iFLEXHIBIT’s Website may include
              technical, typographical, or photographic errors. iFLEXHIBIT will
              not promise that any of the materials in this Website are
              accurate, complete, or current. iFLEXHIBIT may change the
              materials contained on its Website at any time without notice.
              iFLEXHIBIT does not make any commitment to update the materials.
            </p>
          </li>
          <li>
            <h2>Links</h2>
            <p>
              iFLEXHIBIT has not reviewed all of the sites linked to its Website
              and is not responsible for the contents of any such linked site.
              The presence of any link does not imply endorsement by iFLEXHIBIT
              of the site. The use of any linked website is at the user’s own
              risk.
            </p>
          </li>
          <li>
            <h2>Site Terms of Use Modifications</h2>
            <p>
              iFLEXHIBIT may revise these Terms of Use for its Website at any
              time without prior notice. By using this Website, you are agreeing
              to be bound by the current version of these Terms and Conditions
              of Use.
            </p>
          </li>
          <li>
            <h2>Offenses</h2>
            <ol>
              <li>
                <h3>Minor Offenses</h3>
                <p>
                  Committing a Minor Offense will result in your temporary ban
                  lasting seven (7) days. Five (5) of the same Minor Offense
                  will warrant a report to iACADEMY’s Discipline Office.
                </p>
                <ol>
                  <li>
                    Using foul and abusive language or gestures towards any
                    members of the iACADEMY institution.
                  </li>
                  <li>Showing disrespect to National Symbols.</li>
                  <li>
                    Showing inappropriate behavior such as being annoying or
                    causing nuisance.
                  </li>
                  <li>
                    Inappropriate display of intimacy that is found offensive to
                    the sensibilities of the academic community are considered
                    committing vulgar and repulsive acts.
                  </li>
                </ol>
              </li>
              <li>
                <h3>Major Offenses</h3>
                <p>
                  Committing a Major Offense will result in your temporary ban
                  lasting fourteen (14) days. One (1) Major Offense will warrant
                  a report to iACADEMY’s Discipline Office.
                </p>
                <ol>
                  <li>Recruiting to any fraternities and/or sororities.</li>
                  <li>
                    Committing any act of cheating such as but not limited to:
                    <ol>
                      <li>
                        Possessing unauthorized notes or any materials relative
                        to an examination.
                      </li>
                      <li>Leaking examination answers and contents.</li>
                    </ol>
                  </li>
                  <li>
                    Showing immoral conduct, indecency, lewdness, and any
                    scandalous behavior in any form, and caught committing gross
                    acts of disrespect in words, gestures, and deeds towards any
                    member of the iACADEMY community in any form.
                  </li>
                  <li> Blatantly disregarding approved school policies.</li>
                  <li>
                    Showing any acts that may cause dishonor to the reputation
                    of the school and persons in authority.
                  </li>
                  <li>
                    Making a false representation of student organizations,
                    especially malversation of school or student organization
                    funds and any illegal or unethical acts affecting the
                    organization and institution.
                  </li>
                  <li>
                    Committing any acts of cyberbullying such as but not limited
                    to:
                    <ol>
                      <li>
                        Harassing, insulting, attacking, discrediting, bullying,
                        or vexing others
                      </li>
                      <li>
                        Sending, posting, and sharing pictures or messages that
                        are deemed offensive by the school community
                      </li>
                      <li>
                        Unauthorized access of one’s account such as alteration
                        of account and its data
                      </li>
                    </ol>
                  </li>
                  <li>
                    Committing an act of stealing of Intellectual Property.
                  </li>
                  <li>Committing false claims of Intellectual Property.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2>Your Privacy</h2>
            <p>Please read our Privacy Policy.</p>
          </li>
          <li>
            <h2>Governing Law</h2>
            <p>
              Any claim related to iFLEXHIBIT&apos;s Website shall be governed
              by the laws of the Philippines without regards to its conflict of
              law provisions.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

const PrivacySection = () => {
  return (
    <section id="privacy" className={styles["privacy"]}>
      <h1>Privacy Policy</h1>
      <small>Effective date: 2021-07-07</small>
      <div className={styles["body"]}>
        <ol>
          <li>
            <h2>Introduction</h2>
            <p>Welcome to iFLEXHIBIT.</p>
            <p>
              iFLEXHIBIT (“us”, “we”, or “our”) operates iflexhibit.com
              (hereinafter referred to as “Service”).
            </p>
            <p>
              Our Privacy Policy governs your visit to iflexhibit.com, and
              explains how we collect, safeguard, and disclose information that
              results from your use of our Service.
            </p>
            <p>
              We use your data to provide and improve Service. By using Service,
              you agree to the collection and use of information in accordance
              with this policy. Unless otherwise defined in this Privacy Policy,
              the terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions.
            </p>
            <p>
              Our Terms and Conditions (“Terms”) govern all use of our Service
              and together with the Privacy Policy constitutes your agreement
              with us (“agreement”).
            </p>
          </li>
          <li>
            <h2>Definitions</h2>
            <p>
              SERVICE means the iflexhibit.com website operated by iFLEXHIBIT.
            </p>
            <p>
              PERSONAL DATA means data about a living individual who can be
              identified from those data (or from those and other information
              either in our possession or likely to come into our possession).
            </p>
            <p>
              USAGE DATA is data collected automatically either generated by the
              use of Service or from Service infrastructure itself (for example,
              the duration of a page visit).
            </p>
            <p>
              COOKIES are small files stored on your device (computer or mobile
              device).
            </p>
            <p>
              DATA CONTROLLER means a natural or legal person who (either alone
              or jointly or in common with other persons) determines the
              purposes for which and the manner in which any personal data are,
              or are to be, processed. For the purpose of this Privacy Policy,
              we are a Data Controller of your data.
            </p>
            <p>
              DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal
              person who processes the data on behalf of the Data Controller. We
              may use the services of various Service Providers in order to
              process your data more effectively.
            </p>
            <p>
              DATA SUBJECT is any living individual who is the subject of
              Personal Data.
            </p>
            <p>
              THE USER is the individual using our Service. The User corresponds
              to the Data Subject, who is the subject of Personal Data.
            </p>
          </li>
          <li>
            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
          </li>
          <li>
            <h2>Types of Data Collected</h2>
            <ol>
              <li>
                <h3>Personal Data</h3>
                <p>
                  While using our Service, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you (“Personal Data”). Personally
                  identifiable information may include, but is not limited to:
                </p>
                <ol>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone Number</li>
                </ol>
                <p>
                  We may use your Personal Data to personalize your experience.
                </p>
              </li>
              <li>
                <h3>Usage Data</h3>
                <p>
                  We may also collect information that your browser sends
                  whenever you visit our Service or when you access Service by
                  or through any device (“Usage Data”).
                </p>
                <p>
                  This Usage Data may include information such as your
                  computer’s Internet Protocol address (e.g., IP address),
                  browser type, browser version, the pages of our Service that
                  you visit, the time and date of your visit, the time spent on
                  those pages, unique device identifiers and other diagnostic
                  data.
                </p>
                <p>
                  When you access Service with a device, this Usage Data may
                  include information such as the type of device you use, your
                  device unique ID, the IP address of your device, your device
                  operating system, the type of Internet browser you use, unique
                  device identifiers and other diagnostic data.
                </p>
              </li>
              <li>
                <h3>Tracking Cookies Data</h3>
                <p>
                  We use cookies and similar tracking technologies to track the
                  activity on our Service and we hold certain information.
                </p>
                <p>
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device. Other
                  tracking technologies are also used such as beacons, tags, and
                  scripts to collect and track information and to improve and
                  analyze our Service.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our Service.
                </p>
                <p>Examples of Cookies we use:</p>
                <ol>
                  <li>
                    Session Cookies: We use Session Cookies to operate our
                    Service.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2>Use of Data</h2>
            <p>iFLEXHIBIT uses the collected data for various purposes:</p>
            <ol>
              <li>to provide and maintain our Service;</li>
              <li>to notify you about changes to our Service;</li>
              <li>
                to allow you to participate in interactive features of our
                Service when you choose to do so;
              </li>
              <li>to provide customer support;</li>
              <li>
                to gather analysis or valuable information so that we can
                improve our Service;
              </li>
              <li>to monitor the usage of our Service;</li>
              <li>to detect, prevent and address technical issues;</li>
              <li>to fulfill any other purpose for which you provide it;</li>
              <li>
                to provide you with notices about your account and/or
                subscription, including expiration and renewal notices,
                email-instructions, etc.;
              </li>
              <li>
                in any other way we may describe when you provide the
                information;
              </li>
              <li>for any other purpose with your consent.</li>
            </ol>
          </li>
          <li>
            <h2>Retention of Data</h2>
            <p>
              We will retain your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your Personal Data to the extent necessary to comply with
              our legal obligations (for example, if we are required to retain
              your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </p>
            <p>
              We will also retain Usage Data for internal analysis purposes.
              Usage Data is generally retained for a shorter period, except when
              this data is used to strengthen the security or to improve the
              functionality of our Service, or we are legally obligated to
              retain this data for longer time periods.
            </p>
          </li>
          <li>
            <h2>Transfer of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to –
              and maintained on – computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              iFLEXHIBIT will take all the steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of your data and other
              personal information.
            </p>
          </li>
          <li>
            <h2>Disclosure of Data</h2>
            <p>
              We may disclose personal information that we collect, or you
              provide:
            </p>
            <ol>
              <li>
                <h3>Disclosure for Law Enforcement.</h3>
                <p>
                  Under certain circumstances, we may be required to disclose
                  your Personal Data if required to do so by law or in response
                  to valid requests by public authorities.
                </p>
              </li>
              <li>
                <h3>Business Transaction.</h3>
                <p>
                  If we or our subsidiaries are involved in a merger,
                  acquisition or asset sale, your Personal Data may be
                  transferred.
                </p>
              </li>
              <li>
                <h3>Other cases. We may disclose your information also:</h3>
                <ol>
                  <li>to our subsidiaries and affiliates;</li>
                  <li>
                    to contractors, service providers, and other third parties
                    we use to support our business;
                  </li>
                  <li>to fulfill the purpose for which you provide it;</li>
                  <li>
                    for the purpose of including your company’s logo on our
                    website;
                  </li>
                  <li>
                    for any other purpose disclosed by us when you provide the
                    information;
                  </li>
                  <li>with your consent in any other cases;</li>
                  <li>
                    if we believe disclosure is necessary or appropriate to
                    protect the rights, property, or safety of the Company, our
                    customers, or others.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2>Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </li>
          <li>
            <h2>
              Your Data Protection Rights Under General Data Protection
              Regulation (GDPR)
            </h2>
            <p>
              If you are a resident of the European Union (EU) and European
              Economic Area (EEA), you have certain data protection rights,
              covered by GDPR. We aim to take reasonable steps to allow you to
              correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <p>
              If you wish to be informed what Personal Data we hold about you
              and if you want it to be removed from our systems, please email us
              at 201801180@iacademy.edu.ph, 201801383@iacademy.edu.ph or
              201801011@iacademy.edu.ph.
            </p>
            <p>
              In certain circumstances, you have the following data protection
              rights:
            </p>
            <ol>
              <li>
                the right to access, update or to delete the information we have
                on you;
              </li>
              <li>
                the right of rectification. You have the right to have your
                information rectified if that information is inaccurate or
                incomplete;
              </li>
              <li>
                the right to object. You have the right to object to our
                processing of your Personal Data;
              </li>
              <li>
                the right of restriction. You have the right to request that we
                restrict the processing of your personal information;
              </li>
              <li>
                the right to data portability. You have the right to be provided
                with a copy of your Personal Data in a structured,
                machine-readable, and commonly used format;
              </li>
              <li>
                the right to withdraw consent. You also have the right to
                withdraw your consent at any time where we rely on your consent
                to process your personal information;
              </li>
            </ol>
            <p>
              Please note that we may ask you to verify your identity before
              responding to such requests. Please note, we may not be able to
              provide Service without some necessary data.
            </p>
            <p>
              You have the right to complain to a Data Protection Authority
              about our collection and use of your Personal Data. For more
              information, please contact your local data protection authority
              in the European Economic Area (EEA).
            </p>
          </li>
          <li>
            <h2>
              Your Data Protection Rights under the California Privacy
              Protection Act (CalOPPA)
            </h2>
            <p>
              CalOPPA is the first state law in the nation to require commercial
              websites and online services to post a privacy policy. The law’s
              reach stretches well beyond California to require a person or
              company in the United States (and conceivable the world) that
              operates websites collecting personally identifiable information
              from California consumers to post a conspicuous privacy policy on
              its website stating exactly the information being collected and
              those individuals with whom it is being shared, and to comply with
              this policy. According to CalOPPA we agree to the following:
            </p>
            <ol>
              <li>users can visit our site anonymously;</li>
              <li>
                our Privacy Policy link includes the word “Privacy”, and can
                easily be found on the homepage of our website;
              </li>
              <li>
                users will be notified of any privacy policy changes on our
                Privacy Policy Page;
              </li>
              <li>
                users are able to change their personal information by emailing
                us at 201801180@iacademy.edu.ph, 201801383@iacademy.edu.ph, or
                201801011@iacademy.edu.ph.
              </li>
            </ol>
            <p>Our Policy on “Do Not Track” Signals:</p>
            <p>
              We honor Do Not Track signals and do not track, plant cookies, or
              use advertising when a Do Not Track browser mechanism is in place.
              Do Not Track is a preference you can set in your web browser to
              inform websites that you do not want to be tracked.
            </p>
            <p>
              You can enable or disable Do Not Track by visiting the Preferences
              or Settings page of your web browser.
            </p>
          </li>
          <li>
            <h2>
              Your Data Protection Rights under the California Consumer Privacy
              Act (CCPA)
            </h2>
            <p>
              If you are a California resident, you are entitled to learn what
              data we collect about you, ask to delete your data and not to sell
              (share) it. To exercise your data protection rights, you can make
              certain requests and ask us:
            </p>
            <ol>
              <li>
                What personal information we have about you. If you make this
                request, we will return to you:
                <ol>
                  <li>
                    The categories of personal information we have collected
                    about you.
                  </li>
                  <li>
                    The categories of sources from which we collect your
                    personal information.
                  </li>
                  <li>
                    The business or commercial purpose for collecting or selling
                    your personal information.
                  </li>
                  <li>
                    The categories of third parties with whom we share personal
                    information.
                  </li>
                  <li>
                    The specific pieces of personal information we have
                    collected about you.
                  </li>
                  <li>
                    A list of categories of personal information that we have
                    sold, along with the category of any other company we sold
                    it to. If we have not sold your personal information, we
                    will inform you of that fact
                  </li>
                  <li>
                    A list of categories of personal information that we have
                    disclosed for a business purpose, along with the category of
                    any other company we shared it with. Please note, you are
                    entitled to ask us to provide you with this information up
                    to two times in a rolling twelve-month period. When you make
                    this request, the information provided may be limited to the
                    personal information we collected about you in the previous
                    12 months.
                  </li>
                </ol>
              </li>
              <li>
                To delete your personal information. If you make this request,
                we will delete the personal information we hold about you as of
                the date of your request from our records and direct any service
                providers to do the same. In some cases, deletion may be
                accomplished through de-identification of the information. If
                you choose to delete your personal information, you may not be
                able to use certain functions that require your personal
                information to operate.
              </li>
              <li>
                To stop selling your personal information. We don’t sell or rent
                your personal information to any third parties for any purpose.
                We do not sell your personal information for monetary
                consideration. However, under some circumstances, a transfer of
                personal information to a third party, or within our family of
                companies, without monetary consideration may be considered a
                “sale” under California law. You are the only owner of your
                Personal Data and can request disclosure or deletion at any
                time.
              </li>
            </ol>
            <p>
              If you submit a request to stop selling your personal information,
              we will stop making such transfers.
            </p>
            <p>
              Please note, if you ask us to delete or stop selling your data, it
              may impact your experience with us, and you may not be able to
              participate in certain programs or membership services which
              require the usage of your personal information to function. But in
              no circumstances, we will discriminate against you for exercising
              your rights.
            </p>
            <p>
              To exercise your California data protection rights described
              above, please send your request(s) by email:
              201801180@iacademy.edu.ph, 201801383@iacademy.edu.ph,
              201801011@iacademy.edu.ph.
            </p>
            <p>
              Your data protection rights, described above, are covered by the
              CCPA, short for the California Consumer Privacy Act. To find out
              more, visit the official California Legislative Information
              website. The CCPA took effect on 01/01/2020.
            </p>
          </li>
          <li>
            <h2>Service Providers</h2>
            <p>
              We may employ third party companies and individuals to facilitate
              our Service (“Service Providers”), provide Service on our behalf,
              perform Service-related services, or assist us in analyzing how
              our Service is used. These third parties have access to your
              Personal Data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </li>
          <li>
            <h2>Analytics</h2>
            <p>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
            </p>
          </li>
          <li>
            <h2>CI/CD tools</h2>
            <p>
              We may use third-party Service Providers to automate the
              development process of our Service.
            </p>
          </li>
          <li>
            <h2>Cloud Storage Services</h2>
            <p>
              We may use third-party Service Providers as our storage for
              uploaded images and videos.
            </p>
          </li>
          <li>
            <h2>Links to Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click a third-party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies or
              practices of any third-party sites or services.
            </p>
          </li>
          <li>
            <h2>Children’s Privacy</h2>
            <p>
              Our Services are not intended for use by children under the age of
              13 (“Child” or “Children”). We do not knowingly collect personally
              identifiable information from Children under 13. If you become
              aware that a Child has provided us with Personal Data, please
              contact us. If we become aware that we have collected Personal
              Data from Children without verification of parental consent, we
              take steps to remove that information from our servers.
            </p>
          </li>
          <li>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update
              “effective date” at the top of this Privacy Policy. You are
              advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </li>
          <li>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email: 201801180@iacademy.edu.ph,
              201801383@iacademy.edu.ph, 201801011@iacademy.edu.ph
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default LegalLayout;
