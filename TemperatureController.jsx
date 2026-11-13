
import { useState } from "react";
import "./TemperatureController.css";

const TemperatureController = () => {

    const [temperature, setTemperature] = useState(20);

    const increaseTemp = () => {
        setTemperature(temperature + 1);
    }

    const decreaseTemp = () => {
        if (temperature > 0) {
            setTemperature(temperature - 1);
        }
    }

    return (
        <div className="temperature-container">

            <h1>Temperature Controller</h1>

            <h2>{temperature}°C</h2>

            {
                temperature < 15 ? (
                    <h3>Cold</h3>
                ) : temperature <= 30 ? (
                    <h3>Moderate</h3>
                ) : (
                    <h3>Hot</h3>
                )
            }

            <button onClick={increaseTemp} className="btn">
                Increase Temperature
            </button>

            <button onClick={decreaseTemp} className="btn">
                Decrease Temperature
            </button>

        </div>
    );
};

export default TemperatureController;
