const Footer = () => {

    const CurrDate = new Date().toLocaleDateString();
    return(
        <div className="footer">
            <p>REGISTRER: Amos cheruiyot</p>
            <h4>Date:{CurrDate}</h4>
            
        </div>
    )
}

export default Footer;