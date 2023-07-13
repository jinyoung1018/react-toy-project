import ContactForm from "./ContactForm";

const Contact = () =>{
    return(
        <div className="Contact" id="contact">
           <ul>
          <li>
            <div><h1>CONTACT</h1></div>
            <div>우리에게 패트너십을 신청하거나, 고객이 되어주세요.</div>
            <div class="more2">더 알아보기</div>
            </li>
          <li></li>
        </ul>
            <ContactForm></ContactForm>
       
        </div>
    );
};

export default Contact;