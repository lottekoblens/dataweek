const TekstTop = () => {
    return (
        <div className="tekst-top">
             <img src="../treinstation.jpeg"></img>
            <div>
            {/* give nav a class of navbar */}
            <h2>Kan je aan het uiterlijk zien waar mensen naartoe gaan met de trein?</h2>

            <p>Sommige mensen die naar hun werk gaan, zijn erg netjes gekleed.
            Dus deze mensen kun je gemakkelijk herkennen in de trein en daaraan is makkelijk
            te zien dat ze naar hun werk gaan. Maar niet bij iedereen is het zo makkelijk te herkennen.
            Maar kunnen we toch zien waar ze naartoe gaan?
            </p>

            <button id="onderzoek-button"><a href="/onderzoek">Bekijk het onderzoek!</a></button>
            </div>
            
               
            
        </div>
    );
}

export default TekstTop;