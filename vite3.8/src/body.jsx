import Looper from "./block";
const Body = () => {
    return(
        <div className="body">
            <div className="left">
                <h3>F1 drivers description</h3>
            <Looper/>
            </div>
            <div className="right"><p>
                These are the description of f1 drivers; name, formula 1 team they are driving fo and their nationality respectively.!</p>
                <h5>Formula 1 Teams include:</h5>

                <ul>
                <li>mercedes AMG motorsport</li>
                <li>red bull honda</li>
                <li>ferarri</li>
                <li>haas</li>
                <li>Astorn martin</li>
                <li>mclaren</li>
                <li>Alpine</li>
                <li>williams</li>
                <li>alpha tauri</li>
                </ul>
                </div>
        </div>
    )
}
export default Body;