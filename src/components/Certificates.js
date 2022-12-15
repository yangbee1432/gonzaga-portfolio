import "./Certificates.css";
import Cert1 from "../images/cert1.PNG";
import Cert2 from "../images/cert2.PNG";
import Cert3 from "../images/cert3.PNG";
import Cert4 from "../images/cert4.PNG";

function Certificates(){
    return(
        <div className="Certificates" id="cert">
            <h1>Certificates</h1>
            <div className="certs">
                <section>
                    <img src={Cert1} alt="cert" />
                    <h3>Building a Mobile App with Google Sheets on Glide and no Coding</h3>
                </section>
                <section>
                    <img src={Cert2} alt="cert" />
                    <h3>Create a Superhero Name Generator with Tensorflow</h3>
                </section>
                <section>
                    <img src={Cert3} alt="cert" />
                    <h3>Transfer Learning for NLP with TensorFlow Hub</h3>
                </section>
                <section>
                    <img src={Cert4} alt="cert" />
                    <h3>Tweet Emotion Recognition with Tensorflow</h3>
                </section>
            </div>
        </div>
    )
}

export default Certificates;