
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <pre className="ascii-art">
                        {`    >=>                        >=>                      
    >=>                        >=>                      
    >=>   >==>    >=>     >=>  >=>   >==>       >=>     
 >=>>=> >>   >=>   >=>   >=>   >=> >>   >=>   >=>  >=>  
>>  >=> >>===>>=>   >=> >=>    >=> >>===>>=> >=>    >=> 
>>  >=> >>           >=>=>     >=> >>         >=>  >=>  
 >=>>=>  >====>       >=>     >==>  >====>      >=>     
                        `}
                    </pre>
                </div>
                <div className="footer-links">
                    <a href="https://www.github.com/trimooo" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/leotrim-thaqi-0212a9228" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.twitter.com/LeotrimTh" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/_leotrim.th" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} devleo. All rights reserved.</p>
                <p className="easter-egg">{"<!-- You found the easter egg! lol  -->"}</p>
            </div>
        </footer>
    );
}

/*`
 _____                   __
|  __ \\                 |  |
| |  | | _____    ___   |  | ___ ______
| |  | |/ _  \\  \\  / / /|  |/ _  | __ |
| |__| |  __/ \\   V / / |  |  __/||__||
|_____/ \\___|  \\ _ / /  |__|\\__| |____|
                        `*/

export default Footer;