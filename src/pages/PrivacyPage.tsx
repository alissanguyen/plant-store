import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const PrivacyPage: React.FC<Props> = () => {
    return (
        <div className='flex flex-col gap-3 px-[10%] my-12 custom:my-20 font-light'>
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">Privacy Policy</span>
            <span>At <strong className='font-semibold'>Alissa's Garden</strong>, we understand the importance of privacy and we are commited to protect your privacy at all cost.</span>
            <span>Protecting your private information is our top priority. This <strong>Statement of Privacy</strong> applies to "https://www.alissasgarden.com", and <strong className='font-semibold'>Alissa's Garden</strong> and governs data collection and usage. This <strong>Privacy Policy</strong> does not address or govern any information-gathering, use, or dissemination practices related to information collected from you other than directly through or from the Site, such as from other websites, telephone, facsimile, postal mail, personal delivery, or other or additional offline means or media."</span>
            <span>This <strong>Privacy Policy</strong> is incorporated into our <Link to="/termsofuse"><strong className="underline hover:text-emerald-600">Terms of Use</strong></Link> for the Site by reference, as if set forth fully therein, which must be reviewed and accepted by you.</span>
            <span>The Site is not intended for children under the age of 13. We do not knowingly collect personal information online from visitors in this age group.</span>
            <span>If you have any questions about our privacy policies, please contact us via our email. By providing your personal information to Alissa's Garden, you signify your acceptance of the Terms of Use and agree that Alissa's Garden may collect, use, and disclose your personal information as described herein.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Information We May Collect</span>
            <span className='font-semibold text-2xl mt-2'>Personally Identifiable Information</span>
            <span>For purposes of this <strong>Privacy Policy</strong>, “personally identifiable information” means any information by which someone can be personally identified, including name, address, telephone number, email address, and other information incidental to providing goods or services (also referred to herein as “personal information”). We collect personally identifiable information from you only when you voluntarily provide us with this information, such as when placing an order on the Site, establishing an account, contacting us with a question or comment, reviews, or signing up to receive emails about our latest products and services.
            </span>
            <span>If you purchase our products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.</span>

            {/* SECTION SEPARATED */}
            <span className='font-semibold text-2xl mt-2'>Browsing Information and Cookies</span>
            <span>When you visit the Site, our web servers may automatically recognize certain non-personally identifiable information about you, such as your domain name, access provider, IP address, and browser language. The Site also uses a browser feature known as a cookie, which assigns a unique identification to your computer. The information collected from cookies allows us to provide better customer service to you and to improve features of our Site in a variety of ways, including by determining whether you have visited the Site in the past and which pages of our Site you have visited.</span>
            <span>If you are uncomfortable with the idea of your information being used in this way, most computer systems and web browsers offer privacy settings and options, such as disabling cookies or opting for “Do Not Track” features. We do not override these settings or options. However, in order to access certain content, features, services, products, or benefits of the Site, you may be required to provide us with certain information, including some types of personally identifying information. If you do not wish to provide such information through the Site or if you opt to utilize the aforementioned privacy features of your computer system or web browser, you may be unable to obtain certain content, features, services, products, or benefits of the Site.</span>

            <span className="font-semibold text-3xl mt-10">How We Use Your Information</span>
            <span>By providing personally identifiable information to us, we are better able to match your interests. We may use your personally identifiable information to process and fulfill orders, send emails to confirm your order status and shipment, to communicate with you and to send you information by email, postal mail, or other means about our products, services, contests, and promotions. In general, we use personal information collected on the Site for the specific purpose for which it was volunteered; to help develop better products, and/or market, sell, or provide products and services; and to comply with any legal or regulatory requirements, process or provisions. In order to better serve you, we may combine information you provide to us on the Site with information from third parties, including demographic or public information.</span>


            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">How We May Share Your Information</span>
            {/* TODO: Revise this */}
            <span>We may share information collected through the Site with our subsidiaries, affiliated companies, and like-minded business partners for the purpose of providing you with the products and services you seek from the Site. We may also share your mailing address and shopping history with other catalog mail companies.</span>
            <span>From time to time, we may disclose the data collected through the Site, including personally identifiable information, to other persons or entities whom we believe trustworthy. In such cases we might rent, exchange, share and/or cross-reference information, including contact information about you that will enable such persons or entities to contact you regarding products and services that may be of interest to you. Additionally, in order to provide you with a better customer experience, we may share information with service providers, subcontractors, and business partners who have been retained to perform functions on our behalf or to provide services to us. These services include:</span>
            <ul className="list-disc">
                <li className="ml-10">Order fulfillment, warehousing, and delivery;</li>
                <li className="ml-10">Advertising, marketing, surveys, and promotions, including partnerships and teaming efforts with other companies whose products or services we think you might enjoy;</li>
                <li className="ml-10">Information technology and office services, including software and website development, website hosting, management and evaluation, and data processing, exchange, and cross-referencing;</li>
                <li className="ml-10">Payment processing services, fraud protection, and credit risk reduction; and</li>
                <li className="ml-10">Legal, accounting, audit and other professional service providers.</li>
            </ul>

            <span>We reserve the right to disclose information about you to a third party pursuant to a subpoena, court order, or other form of legal process, or in response to a request by or on behalf of any local, state, federal, or other government agency, department, or body, whether or not pursuant to a subpoena, court order, or other form of legal process.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-5">Managing Your Personal Information and Options</span>
            <span>You may use the Site without providing any personally identifiable information.</span>
            <span>We want to communicate with you only if you want to hear from us. If you have established an account on the Site or signed up to receive electronic newsletters or promotional emails, including new ideas, special offers, and event information, or to otherwise receive communications about our products and services, you will have the right at any time to opt out of receiving marketing emails or to specify which, if any, communications you would like to receive from us. Should you ever decide to delete your account, you may do so by emailing us.</span>
            <span>If you would like to opt-out of receiving marketing via email, click the unsubscribe link on the footer of marketing emails. We will continue to send you non-promotional, service emails concerning your account, such as emails relating to available upgrades, billing and payment information, outstanding balance on your account, and other emails relating to your account and/or your use of the Site.</span>
            <span>At your request, we will confirm what personally identifiable information it collects or holds about you, and will correct, update and/or remove such information. You may contact us for any of the foregoing through our email. If you ask that we stop using or sharing your personally identifiable information, we will honor that request. However we may retain records of your personally identifiable information for a period of time; for example, to follow-up on a request, resolve a dispute or for similar reasons or in order to comply with applicable federal, state, or local law. In addition, some personal information may also continue to be stored on back-up files for financial, legal, or technical reasons.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-5">Security</span>
            <span>The security of your personally identifiable information is important to us and we are committed to handling such information carefully. We maintain physical, electronic and procedural safeguards to guard your personally identifiable information. We use secure socket layer technology to protect the security of your payment information and we encrypt your personally identifiable information when it is sent over the Internet. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personally identifiable information, we cannot guarantee its absolute security.</span>
            <span>The Site may also contain links to third party websites, for the convenience of users in locating information, products, or services that may be of interest. If you access a third party website from a link on this Site, any information you disclose on that website is not subject to this Privacy Policy. It is possible that these links may be used by third parties or others to collect personal or other information about you. We are not responsible for the privacy practices of such websites, advertisers, or third parties or the content of such websites and it is your sole obligation to review and understand the privacy practices and policies of these other websites. We do not control the use of cookies or the collection of information by these third parties, nor how they manage such information. It is solely your obligation to review and understand the privacy practices and policies of these other websites, advertisers, and any third parties.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-5">Updating this Privacy Policy</span>
            <span>We reserve the right to change, modify, add, or remove portions of this Privacy Policy at any time. You should check this page periodically for changes. Your continued use of this Site following the posting of changes to this <strong>Privacy Policy</strong> will be considered your consent to those changes. In the unlikely event that we believe that the security of your personal information in our possession or control may have been compromised, we may seek to notify you of that development.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-5">Questions or Concerns</span>
            <span>If you have any feedback, questions, or concerns regarding privacy, please send us a detailed message to our email, which is provided on the <Link to="/contactus" className="underline hover:text-emerald-600"><strong>Contact Us</strong></Link> page; we will make every effort to resolve your concerns.</span>

            <span className="mt-10 italic">Last updated: 10/05/2022</span>
        </div>
    )
}

export default PrivacyPage