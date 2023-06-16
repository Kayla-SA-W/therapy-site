import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Nav } from '../components/nav';
import { Contact } from '../components/contact';
import FAQImage from '../images/faq.png';

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Raleway Variable', sans-serif;
    line-height: 30px;
}
li{
    margin: 20px 0;
  }
  a{
    color: black;
  }
`

const Box = styled.div`
    display: grid;
`;

const Container = styled.div`
    justify-self: center;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width: 540px){
        width: 95%;
      }
`;
const Img = styled.img`
    width: 100%;
`;

const Heading = styled.p`
    margin: 80px 0 20px;
    font-size: 30px;
    @media screen and (max-width: 540px){
        font-size: 20px;
        margin: 30px 0 20px;
      }
`;

const Paragraph = styled.p`
line-height: 30px;
@media screen and (max-width: 540px){
    line-height: 20px;
  }
`;

const Hr = styled.hr`
width: 100%;
margin: 20px 0;
`;


const FAQ = () => (
    <Box>
        <GlobalStyle />
        <Nav />
        <Container>
            <Img src={FAQImage} />
            <Heading>Are you LGBQ+ and TGNC affirming?</Heading>
            <Hr/>
            <Paragraph>As an openly butch lesbian immigrant of color, I bring my lived experience and my formal training as a therapist in LGBTQ+ issues to the space.</Paragraph>
            <Paragraph>I also write letters for gender affirming surgeries and related support services, however you must:</Paragraph>
            <ol>
                <li>Be an active client for at least 4 sessions</li>
                <li>
                Meet the DSM 5 criteria for <a href='https://www.psychiatry.org/patients-families/gender-dysphoria/what-is-gender-dysphoria#section_0' target='_blank'>Gender Dysphoria 302.85</a> or <a href='https://www.findacode.com/icd-11/code-90875286.html' target='_blank'>ICD-11 HA60 Gender Incongruence of Adolescence or Adulthood</a>
                </li>
                <li>Followed the <a href='https://www.wpath.org/publications/soc' target='_blank'>WPATH Standards of Care</a>, demonstrating a healthy, consistent capacity to manage your existing care plan and be compliant with all maintenance requirements</li>
            </ol>
            <Heading>Do you offer remote telehealth services?</Heading>
            <Hr/>
            <Paragraph>I am currently only offering online therapy conducted via video for all Massachusetts residents. I will not be offering any in-person sessions until further notice. <br/>Video conference sessions are conducted through Simple Practice, a secure HIPAA compliant online electronic health recording system. After we set up our initial appointment, I will send you the link in my welcome email. When clients have their session, I recommend they find a private place and use headphones if there are any privacy concerns. </Paragraph>
            <Heading>What health insurance do you take?</Heading>
            <Hr/>
            <Paragraph>Starting late June, 2023, Chosen Heart Counseling will be taking Blue Cross Blue Shield insurance. </Paragraph>
            <Heading>What is your out-of-pocket cost?</Heading>
            <Hr/>
            <Paragraph>
            If you do not have Blue Cross Blue Shield Insurance or choose to pay the Self-pay/Out-of-pocket rate, weekly sessions cost $200 per session. I am an out-of-network provider for most PPO/POS insurance plans. This means that if your plan includes out-of-network benefits, you can collect partial reimbursement from your insurance company for the cost of sessions. (PPO/POS plans often reimburse therapy clients for 60-80% of session costs. Every plan is different, so please check with your insurance provider to determine your out-of-network arrangement.) Please note, I cannot guarantee you will receive reimbursements as all interactions with your insurance company are your responsibility. When contacting your insurance company it can be helpful to ask: Do I have out of network benefits for outpatient or behavioral health services? What are the benefits? Do I need a referral or pre-authorization to use my out-of-network benefits? What percentage of the service fee is covered? How do I submit receipts/superbills for reimbursement? (Most insurance companies allow for invoices to be submitted via their website.) <br/> <br/> Read more about Out of Network Benefits <a href='https://mywellbeing.com/therapy-101/insurance' target="_blank">here</a>
            </Paragraph>
            <Heading>Why would I pay out of pocket when I could use my insurance?</Heading>
            <Hr/>
            <Paragraph>
            There could be a variety of reasons why you might choose to pay out of pocket instead of using your insurance, such as:
            <ol>
                <li>
                Privacy concerns: Using insurance requires you to share your personal information with your insurance provider, which may be recorded in your medical records. If you prefer to keep your medical information private, paying out of pocket may be a better option for you.
                </li>
                <li>
                Limited coverage: Your insurance may not cover the full cost of a particular service or treatment, or it may have limitations on the types of providers you can see or the treatments you can receive based on "medical necessity". In these cases, paying out of pocket may be necessary to get the care you need. 
                </li>
                <li>
                Deductibles and co-pays: Even if your insurance covers a service or treatment, you may still be responsible for paying a deductible or co-pay. In some cases, these costs may be higher than the out-of-pocket cost of the service or treatment, making it more cost-effective to pay directly.
                </li>
                <li>
                Access to care: Some providers may not accept certain types of insurance or may have long wait times for patients using insurance. If you need to see a particular provider quickly or have concerns about the quality of care provided by in-network providers, paying out of pocket may be a better option.
                </li>
            </ol>
            Ultimately, the decision to pay out of pocket versus using insurance will depend on your individual circumstances and preferences. It's always a good idea to weigh the pros and cons of each option.
            </Paragraph>
            <Heading>
            What is the Patients First law in Massachusetts?
            </Heading>
            <Hr/>
            <Paragraph>
            On January 1, 2021, Governor Baker signed An Act Promoting a Resilient Health Care System that Puts Patients First (“Patients First”) into law which makes significant changes to the state’s healthcare laws. The law requires health care providers to tell patients how much patients will pay for planned hospital stays, medical procedures, health care services, and referrals – based on the patient’s specific health insurance plan. Please note that Chosen Heart Counseling does not bill insurance companies directly unless you are using Blue Cross Blue Shield. You can review the notice of rights available to you as a patient along with more detailed information on <a href='https://www.mass.gov/news/pricing-transparency-provisions-of-an-act-promoting-a-resilient-health-care-system-that-puts-patients-first-patients-first' target="_blank">Mass.gov</a>,
            </Paragraph>
            <Paragraph><b>*Due to the limits of my private practice, I do not see people struggling with high risk for suicide/serious self-harm or active substance abuse. Anyone requiring more than weekly contact who needs greater access than I can provide would not be a good fit at this time. I may have limited availability to respond to crisis situations (i.e., if I is working with another client, overnight, on weekends, etc.). For this reason, it is very important that you are aware of other services available in the event of a crisis. If you experience a crisis or emergency, call 911, go to your local emergency room, or call the MA statewide Emergency State Program/Mobile Crisis Intervention (ESP/MCI) at 1-877-382-1609.</b></Paragraph>
        </Container>
        <Contact />
    </Box>
)

export default FAQ