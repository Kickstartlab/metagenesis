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
    }, [percentage])

    return (
        <div>
            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "baseline", justifyContent: "center", columnGap: "50px", rowGap: "30px", flexWrap: "wrap" }}>
                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>CEX Reserve</i>
                </div>


                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Liquidity</i>
                </div>

                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Public sale
                        Tokens</i>
                </div>

                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Initial Burn</i>
                </div>
            </div >

            <div style={{ color: "#fff", textAlign: "center", display: "flex", alignItems: "baseline", justifyContent: "center", columnGap: "50px", marginTop: "60px", rowGap: "30px", flexWrap: "wrap" }}>
                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Staking
                        Reserve</i>
                </div>


                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Reward
                        Reserve</i>
                </div>

                <div style={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                        textColor: '#fff',
                        pathColor: '#F86CF8',
                    })} />
                    <i>Developement
                        Reserve</i>
                </div>

            </div >
        </div>
    );
}

export default ProgressBar
