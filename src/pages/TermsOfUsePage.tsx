import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const TermsOfUsePage: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col gap-3 px-[10%] my-12 custom:my-20 font-light'>
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">Terms of Use</span>
            <span>Welcome to the <strong>Alissa's Garden,</strong> located at <span className="italic">https://www.alissasgarden.com</span>. The following terms and conditions govern your use of our site.</span>
            <span>By accessing, viewing, or using the content, material, products, or services available on or through our site, you certify that you have read, understand, and agree to be legally bound by these Terms, as well as our <Link to="/privacy" className='underline font-bold hover:text-emerald-600'>Privacy Policy</Link>, each of which is incorporated by reference as if fully set forth herein. You further certify that you are 13 years of age or older and that you have all the necessary rights, power and authority to enter into this Agreement and perform the obligations set forth under this Agreement. You understand and agree that your use of our site or any content, material, products or services made available on or through our site signifies that you fully accept and agree to these <strong>Terms of Use.</strong></span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Registration</span>
            <span>In order to access certain content, material, products or services on our site, you may be asked to register and create an account. As part of the registration process, you may be asked to click to agree to these Terms, and may then be asked to select or submit a user name and password. You may also be required to provide us with certain information about yourself including some types of personally identifiable information, including your legal name, phone number, address, email address, gender, and age. You are responsible for ensuring that your password and account login are kept secret, safe, and secure at all times. We will not be held responsible or liable for any misuse of your account in the event that a third party has access to and uses your password and account login in any way.</span>
            <span>When placing an order through our site, you will be required to provide other personal information, such as shipping address, billing address, and payment details. Additional information may be collected by us or its third party providers at this time for security and anti-fraud purposes. You represent that the personal information you provide to us via our site is true, valid, complete and up-to-date in all respects, and you confirm that you are the person referred to in the shipping (unless the item is a gift) and billing information provided. Should any of the information you provide on our site change, please login to your account and update such information directly on our site.</span>
            <span>Any personal information that you provide to us via our site is subject to our Privacy Policy.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Purchases</span>
            <span>Some products or services made available through our site may be available for purchase. By purchasing products or services made available through our site, you represent that you have reached the age of majority (which in most states is 18 years old) and have the legal capacity to enter into a contract. If you are under the age of majority or cannot lawfully enter into a contract, you must have your parent or guardian review these Terms and the <Link to="/privacy" className='underline font-bold hover:text-emerald-600'>Privacy Policy</Link>, and register or place an order on your behalf. We may use a third party payment processor to process credit card transactions made through our site. You are also responsible for paying any governmental taxes imposed in connection with use of our site or the purchase or any products or services made available through our site, including sales, use, and excise taxes (excluding only taxes on our net income).</span>

            <span>We are obligated to collect sales taxes, the applicable tax will be added to your billing account. All sales are subject to our shipping and return policies, which shall be made available to you on our site or other delivered to you with your purchased goods. All refunds are in our sole discretion.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">General Restrictions on Use</span>
            <span>You agree to use our site and our services only for purposes that are permitted by these <strong>Terms of Use</strong> and in compliance with all applicable laws, regulations, and generally accepted practices or guidelines in the relevant jurisdictions. You may only use our site and services for your non-commercial, non-exclusive, non-assignable, non-transferable and limited personal use, and for no other purposes.</span>
            <span>You will not (and will not attempt to):</span>
            <ul className="list-disc">
                <li className="ml-10">Access any of our services by any means other than through the interface that is provided by us;</li>
                <li className="ml-10">Gain unauthorized access to our computer system or engage in any activity that interferes with the performance of, or impairs the functionality or security of our site, our services, our networks and computer systems;</li>
                <li className="ml-10">Access any of our site or our services through any automated means or with any automated features or devices (including use of scripts or web crawlers);</li>
                <li className="ml-10">Access or collect any personally identifiable information, including any names, email addresses or other such information for any purpose, including, without limitation, commercial purposes;</li>
                <li className="ml-10">Reproduce, duplicate, copy, sell, trade, or resell any aspect of our site or our services for any purpose; and</li>
                <li className="ml-10">Reproduce, duplicate, copy, sell, trade or resell any products or services bearing any trademark, service mark, trade name, logo or service mark owned by us in a way that is likely or intended to cause confusion about the owner or authorized user of such marks, names or logos.</li>
            </ul>


            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Content</span>
            <span>As between you and us, we own or license all information and materials, including logos, designs, titles, phrases, product names, images, illustrations, icons, photographs, and the copyrights, trademarks, service marks, trade dress, and other intellectual property rights associated therewith, in or made available through our site (“Site Content”), as well as the selection, coordination, arrangement, and organization and enhancement of our site Content. All Site Content is protected pursuant to copyright, trademark, patent, and other applicable laws. You agree not to remove or alter any copyright notice or any other proprietary notice on any Site Content. As between you and us, all names, trademarks, symbols, slogans, or logos appearing on our site are proprietary to us or our affiliates, licensors, or suppliers. Use or misuse of these trademarks is expressly prohibited and may violate federal and state trademark law. Under no circumstances will you have any rights of any kind in or to our site Content, other than the right to use our site Content in accordance with these Terms.</span>
            <span>Certain features of our site may allow you to contribute feedback and other information to our site for access, use, viewing, and commentary by other users of our site (collectively, “Reviews”). By posting Reviews, you represent that you have the full legal right to provide the Reviews and that use of the Reviews by us on our site, and all other persons and entities, will not: (a) infringe any intellectual property rights of any person or entity or any rights of publicity, personality, or privacy of any person or entity, including as a result of your failure to obtain consent to post personally identifying or otherwise private information about a person; (b) violate any law, statute, ordinance, regulation, or agreement; or (c) constitute disclosure of any confidential information owned by any third party. Upon your submission of Reviews or other material or information to us, you grant us a worldwide, perpetual, irrevocable, transferable, license to access, use, distribute, reproduce, display, modify, create derivative works based upon, and sublicense the Reviews, all without any compensation to you whatsoever. For avoidance of doubt, we shall be under no obligation: (1) to maintain any Reviews in confidence; (2) to compensate you in any way for your Reviews; or (3) to respond to any Reviews.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Errors, Inaccuracies, and Omissions</span>
            <span>Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, and availability. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information or cancel orders if any information on our site is inaccurate at any time without prior notice (including after you have submitted your order). We cannot and do not review all communications, products, or services made available on or through our site, but, although not obligated to, may review, verify, make changes to or remove any Reviews, Site Content, or our site, including information submitted in connection with our site Content or other features at any time, with or without notice in our sole discretion.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Disclaimers and Warranties</span>
            <span>We reserve the right to change the assortment of items offered and to limit the quantity of items that may be purchased from time to time and at any time, without prior notice. We also reserve the right to alter the terms or duration of any special offers or sale promotion. We are not liable in case of stock outage or unavailability of products. We have made every effort to display as accurately as possible the colors of our products that appear at our site, but we cannot guarantee that your computer monitor's display of any color will be accurate.</span>
            <span>We expressly disclaim, to the fullest extent permitted by law, any express or implied warranties: (i) that our site, services, Site Content, goods, advice, information or links provided on our site will meet your requirements; (ii) that our services will be uninterrupted, timely, secure or free from error; (iii) that defects in the operation or functionality of any software provided to you as part of our services will be corrected; (iv) regarding our site Content, goods, services, advice, information or links provided by any third parties or users; (v) that our site, Site Content, goods, services, advice, or information displayed on our site will meet your requirements; and (vi) that our site will be error-free or that any errors will be corrected. No advice or information, whether oral or written, obtained by you from our site shall create any warranty not expressly stated in these Terms.</span>
            <span>You understand that the technical processing and transmission of any Site Content and Comments may be transferred unencrypted and involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices. Please be advised that we do not guarantee that any information sent to or from our Site will be secure during transmission, nor can we guarantee the confidentiality of any communication or material transmitted to us via our site or the Internet, including, for example, personal information such as your name or address. We assume no responsibility for: (a) any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, any communication; and (b) any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of any email or players due to technical problems or traffic congestion on the Internet or on any of our site, including any injury or damage to you or to any person’s computer related to or resulting from use of our services or our site.</span>
            <span>No conditions, warranties or other terms (including any implied terms as to satisfactory quality, fitness for purpose or conformance with description) apply to our site, Site Content and/or services except to the extent that they are expressly set out in these Terms.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Limitation of Liability</span>
            <span className='uppercase'>IN NO EVENT WILL ROOTED BE LIABLE FOR DAMAGES OTHER THAN ACTUAL AND DIRECT DAMAGES PROVEN IN A COURT OF LAW. IN NO EVENT SHALL ROOTED'S LIABILITY EXCEED THE PRICE YOU PAID FOR THE PRODUCT OR SERVICE THAT IS THE SUBJECT OF THE CLAIM. IF ANY PART OF THIS LIMITATION OF LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN THE TOTAL LIABILITY OF ROOTED AND ITS LICENSORS SHALL NOT EXCEED TEN DOLLARS ($10).
            </span>
            <span>Without limiting the foregoing, you understand and acknowledge that we shall not be liable to you for:</span>
            <ul className="list-disc">
                <li className="ml-10">Any indirect, incidental, consequential, punitive or exemplary losses which may be incurred by you arising out of your use of, or inability to use, our site or our services, including any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation, or any loss of data suffered by you; or</li>
                <li className="ml-10">Any loss or damage which may be incurred by you as a result of: (i) any reliance placed by you on the completeness, accuracy or existence of any advertising, or as a result of any relationship or transaction between you and any advertiser or sponsor whose advertising appears on our site or our services; (ii) any changes that we may make to our site or services, or for any permanent or temporary cessation in the provision of our services (or any features within our services); (iii) the deletion of, corruption of, unauthorized access to, or failure to store, any content and other communications data maintained or transmitted by or through your use of our site or our services; (iv) the use of any products or services obtained on or through our site; or (v) any other matter relating to our site, our services, our site Content, or the Comments.</li>
            </ul>
            <span>The limitations on our liability to you in this Section 7 shall apply whether or not we have been advised of or should have been aware of the possibility of any such losses arising.</span>
            <span>IF YOU ARE DISSATISFIED WITH THE SITE, THE SERVICES, OR THE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE AND SERVICES.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Indemnity</span>
            <span>You agree to defend, indemnify and hold harmless us, our officers, directors, members, employees, agents, affiliates, licensors and suppliers, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from: (i) your use of and access to our site and services; (ii) your violation of any of these Terms, including the Privacy Policy; (iii) your violation of any third party rights, including without limitation any copyright, intellectual property, or privacy rights; or (vi) the use by any other persons accessing this Site using your Internet account or account login. This defense and indemnification obligation will survive these Terms and your use of our site and services. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you hereunder, and you shall cooperate in all reasonable respects in such defense. You may not settle any claim contemplated in this Section 8 without the prior written consent of us.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Links To Other Sites</span>
            <span>The Site may contain links or references to other websites outside of our control. Links to other websites may use our Site logo or style as a result of a co-branding agreement. These websites may send cookies to you and may collect personally identifiable information about you and make use of that data in ways that this Site would not. Please be aware that we have no control over these websites and that these Terms of Use do not apply to any third party sites. we cannot be held responsible for those sites or external sources, or for any damage or losses deriving from the use of the content, or goods and services available on those sites or external sources. We encourage you to read the privacy policies and terms of use linked or referenced in the websites you enter.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Complaint Procedures</span>
            <span>If you believe that any content or postings on this Site violates your intellectual property or other rights, please notify us by email with a comprehensive detailed message setting forth the following information: (a) your name and the name of your company, if any; (b) your contact information, including your email address; (c) the nature and substance of your complaint, the specific rights at issue, and your basis for making the complaint, including the content or posting that is objectionable; and (d) the following statement: “The statements, representations, and assertions made in this message are true, complete, and accurate and I have the full legal authority to make each and every such statement, representation, and assertion and to make and be granted any demand made in this message.”</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Dispute Resolution</span>
            <span>Any dispute arising out of these Terms shall be resolved exclusively through final and binding arbitration conducted by the American Arbitration Association (the “AAA”). Arbitration uses a neutral arbitrator instead of a judge or jury, and court review of an arbitration award is very limited. However, an arbitrator can award the same damages and relief on an individual basis that a court can award to an individual; and an arbitrator must also follow the terms of these Terms, as a court would. All issues are for the arbitrator to decide, except that issues relating to arbitrability and the scope or enforceability of this agreement to arbitrate shall be for a court of competent jurisdiction to decide. Arbitration shall take place in New York, NY unless we elect otherwise.</span>
            <span>The arbitrator will decide the substance of all claims in accordance with the laws of the State of California. The arbitrator shall not be bound by rulings in prior arbitrations involving different users, but is bound by rulings in prior arbitrations involving the same user to the extent required by applicable law. The arbitrator's award shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof. Payment of all filing, administration, and arbitrator fees will be governed by the AAA's rules, unless otherwise stated in this Agreement to Arbitrate. If the value of the relief sought is $5000 or less, at your request, we will pay all filing, administration, and arbitrator fees associated with the arbitration. Any request for payment of fees by us should be submitted by mail to the AAA along with your demand for arbitration and we will make arrangements to pay all necessary fees directly to the AAA. If the value of the relief sought is more than $5000 and you are able to demonstrate that the costs of accessing arbitration will be prohibitive as compared to the costs of accessing a court for purposes of pursuing litigation on an individual basis, we will pay as much of the filing, administration, and arbitrator fees as the arbitrator deems necessary to prevent the costs of accessing arbitration from being prohibitive. In the event the arbitrator determines the claim(s) you assert in the arbitration to be frivolous, you agree to reimburse us for all fees associated with the arbitration paid by us on your behalf that you otherwise would be obligated to pay under the AAA's rules. If an arbitrator or court decides that any part of this agreement to arbitrate is invalid or unenforceable, the other parts of this agreement to arbitrate shall still apply.</span>
            <span>You can choose to reject this agreement to arbitrate by mailing us a written opt-out notice (“Opt-Out Notice”). The Opt-Out Notice must be postmarked no later than thirty days after the date you accept these Terms for the first time. You must complete the Opt-Out Notice form by providing the information called for in the form, including your name, address (including street number and address, city, state, and zip code), phone number, and the email address used to log in to your account to which the opt-out applies. You must sign the Opt-Out Notice for it to be effective. This procedure is the only way you can opt out of the agreement to arbitrate. If you opt out of the agreement to arbitrate, all other parts of these Terms will continue to apply. Opting out of this agreement to arbitrate has no effect on any previous, other, or future arbitration agreements that you may have with us.
            </span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Miscellaneous</span>
            <span>These Terms, including the Privacy Policy, constitute the whole legal agreement between you and us and govern your use of our site, services and any transactions you may have with us through our site and completely replaces and supersedes any prior agreements or understanding, arrangements, undertaking or proposal, written or oral, between you and us in relation to such matters. In the event any other rule, code of conduct, or other matter posted on our site conflicts with the terms of these Terms, these Terms of Use shall govern. No oral explanation or oral information given by any party shall alter the interpretation of these Terms. Notwithstanding the foregoing, you understand that we may make changes to these Terms from time to time. Your continued use of our site following the posting of changes to these Terms of Use will be considered your consent to those changes. When these changes are made, we will make a new copy of the Terms of Use available on our site. You agree that we are under no obligation to provide you with notices regarding changes to the Terms of Use. You understand that it is your responsibility to check the Terms regularly for changes.</span>
            <span>You agree that if we do not exercise or enforce any legal right or remedy which is contained in these Terms of Use (or which we have the benefit of under any applicable law), this will not be taken to be a formal waiver of our rights and that those rights or remedies will still be available to us. If any court of law, having the jurisdiction to decide a matter arising out of these Terms, rules that any provision of these Terms is invalid, then that provision will be removed from these Terms without affecting the rest of the Terms and the remaining provisions will continue to be valid and enforceable.</span>
            <span>The Site is controlled and operated from within the United States. Without limiting anything else, we make no representation that our site, Site Content, Comments, services, products, information or other materials available on, in, or through our site is appropriate or available for use in other locations, and access to them from territories where they are illegal is prohibited. Those who choose to access our site from other locations do so on their own volition and are responsible for compliance with applicable laws.</span>

            <span className="mt-10 italic">Last updated: 10/05/2022</span>

        </div>
    )
}

export default TermsOfUsePage