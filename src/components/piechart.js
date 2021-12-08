const Piechart = () => {
    return (
        <div className="pie">
            <div>
            <h2>Wie zitten er in de trein?</h2>
                <img id="piechart" src="./pie.png"></img>
            </div>
            <div>
                <h2>De echte cijfers</h2>
                <p>Volgens het CBS wordt het openbaar vervoer het meest
                gebruikt door mensen die naar hun werk gaan. En daarna zijn het de studenten die
                op weg zijn naar school of naar huis.
            </p>
                <img id="dataset" src="../dataset1.png"></img>
            </div>
        </div>
    );
}

export default Piechart;