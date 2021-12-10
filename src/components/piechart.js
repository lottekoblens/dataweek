const Piechart = () => {
    return (
        <div className="pie">
            <div>
                <h2>Wat zegt het CBS?</h2>
                <p>Volgens het CBS wordt het openbaar vervoer het meest
                gebruikt door mensen die naar hun werk gaan. En daarna zijn het de studenten die
                op weg zijn naar school of naar huis.
            </p>
                <img id="dataset" src="../pie-3d.png"></img>
            </div>
            <div>
                <h2>Conclusie</h2>
                <p>Uit ons onderzoek is gebleken dat op basis van uiterlijk
                wij verwachten dat de meeste reizigers van de trein studenten zijn. Dit komt niet overeen met
                de cijfers van het CBS. Het CBS laat namelijk zien dat de meeste reizigers mensen zijn die
                onderweg zijn van of naar hun werk.
            </p>
            <img src="./vergelijking-conclusie.png"></img>
            </div>
        </div>
    );
}

export default Piechart;