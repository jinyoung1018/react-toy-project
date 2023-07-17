const ContactForm = () => {
    return(
        <div className="ContactForm">
            <h1> Drop us a line</h1>
            <div>어쩌구저쩌구 어쩌구저쩌구 연락 주세요.</div>
            <div className="input_area">
                <div className="inputbox">
                    <input type="text" ></input>
                    <label>Name</label>
                    <span></span>     
                </div>
                <div className="inputbox">
                    <input type="text" ></input>
                    <label>Email</label>
                    <span></span>     
                </div>
                <div className="inputbox">
                    <input type="text" ></input>
                    <label>Message</label>
                    <span></span>     
                </div>
                <button className="btn">Send Message</button>
          
                
                
            </div>
        </div>
    )
}

export default ContactForm;