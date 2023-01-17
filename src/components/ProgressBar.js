import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {
    const [percentage, setPercentage] = useState(0);
    const [percentage4, setPercentage4] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [percentage3, setPercentage3] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            if (percentage < 10) {
                setPercentage(percentage + 1);
            }

            if (percentage4 < 20) {
                setPercentage4(percentage4 + 1);
            }

            if (percentage2 < 30) {
                setPercentage2(percentage2 + 3);
            }

            if (percentage3 < 5) {
                setPercentage3(percentage3 + 1);
            }
        }, 50);
    }, [percentage]);

    return (
        <div>
            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", columnGap: "50px" }}>
                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>CEX Reserve</i>
                </div>


                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Liquidity</i>
                </div>

                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Public sale
                        Tokens</i>
                </div>

                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Initial Burn</i>
                </div>
            </div >

            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", columnGap: "50px", marginTop: "50px" }}>
                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Staking
                        Reserve</i>
                </div>


                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Reward
                        Reserve</i>
                </div>

                <div style={{ width: 150 }}>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i style={{ marginTop: "20px" }}>Developement
                        Reserve</i>
                </div>

            </div >
        </div>
    );
}

export default ProgressBar
