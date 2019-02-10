import React, { Component } from 'react';
import axios from 'axios'
import './ScoreBoard.css';
import ATL from "../assets/images/nbaimages/ATL.png"
import BKN from "../assets/images/nbaimages/BKN.png"
import BOS from "../assets/images/nbaimages/BOS.png"
import CHA from "../assets/images/nbaimages/CHA.png"
import CHI from "../assets/images/nbaimages/CHI.png"
import CLE from "../assets/images/nbaimages/CLE.png"
import DAL from "../assets/images/nbaimages/DAL.png"
import DEN from "../assets/images/nbaimages/DEN.png"
import DET from "../assets/images/nbaimages/DET.png"
import GSW from "../assets/images/nbaimages/GSW.png"
import HOU from "../assets/images/nbaimages/HOU.png"
import IND from "../assets/images/nbaimages/IND.png"
import LAC from "../assets/images/nbaimages/LAC.png"
import LAL from "../assets/images/nbaimages/LAL.png"
import MIA from "../assets/images/nbaimages/MIA.png"
import MEM from "../assets/images/nbaimages/MEM.png"
import MIL from "../assets/images/nbaimages/MIL.png"
import MIN from "../assets/images/nbaimages/MIN.png"
import NOP from "../assets/images/nbaimages/NOP.png"
import NYK from "../assets/images/nbaimages/NYK.png"
import OKC from "../assets/images/nbaimages/OKC.png"
import ORL from "../assets/images/nbaimages/ORL.png"
import PHI from "../assets/images/nbaimages/PHI.png"
import PHX from "../assets/images/nbaimages/PHX.png"
import POR from "../assets/images/nbaimages/POR.png"
import SAC from "../assets/images/nbaimages/SAC.png"
import SAS from "../assets/images/nbaimages/SAS.png"
import TOR from "../assets/images/nbaimages/TOR.png"
import UTA from "../assets/images/nbaimages/UTA.png"
import WAS from "../assets/images/nbaimages/WAS.png"

// import {GetNBAData} from './GetNBAData'


class ScoreBoard extends Component {
    constructor() {
        super()
        this.state = {
            nbaData: [],
            scoreboard: null
        }
        this.renderScoreBoard()
    }


    renderScoreBoard() {


        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        // console.log(month, day, year)



        if (day < 10 && month < 10) {
            var date = `${year}0${month}0${day}`
            var nbaData = {
                "async": true,
                "crossDomain": true,
                'dataType': 'json',
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };

            axios(nbaData).then(response => {
                var nbaData = response.data;
                console.log(nbaData)
                this.setState({
                    nbaData: nbaData
                })
                console.log(this.state.nbaData)
                this.updateNBAScores(this.state.nbaData);
                // getNBADataInterval();
            })

            return

        }
        if (day < 10) {
            var date = `${year}${month}0${day}`
            var nbaData = {
                "async": true,
                "crossDomain": true,
                'dataType': 'json',
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };

            axios(nbaData).then(response => {
                var nbaData = response.data;
                console.log(nbaData)
                this.setState({
                    nbaData: nbaData
                })
                console.log(this.state.nbaData)
                this.updateNBAScores(this.state.nbaData);
                // getNBADataInterval();
            })

            return

        }
        if (month < 10) {
            var date = `${year}0${month}${day}`
            var nbaData = {
                "async": true,
                "crossDomain": true,
                'dataType': 'json',
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };

            axios(nbaData).then(response => {
                var nbaData = response.data;
                console.log(nbaData)
                this.setState({
                    nbaData: nbaData
                })
                console.log(this.state.nbaData)
                this.updateNBAScores(this.state.nbaData);
                // getNBADataInterval();
            })

            return

        }
        else {
            var date = `${year}0${month}${day}`
            var nbaData = {
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };

            axios(nbaData).then(response => {
                var nbaData = response.data;
                console.log(nbaData)
                this.setState({
                    nbaData: nbaData
                })
                console.log(this.state.nbaData)
                this.updateNBAScores(this.state.nbaData);
                // getNBADataInterval();
            })

            return

        }
    }
    updateNBAScores() {
        var logos = {
            "ATL": ATL,
            "BKN": BKN,
            "BOS": BOS,
            "CHA": CHA,
            "CHI": CHI,
            "CLE": CLE,
            "DAL": DAL,
            "DEN": DEN,
            "DET": DET,
            "GSW": GSW,
            "HOU": HOU,
            "IND": IND,
            "LAC": LAC,
            "LAL": LAL,
            "MIA": MIA,
            "MEM": MEM,
            "MIL": MIL,
            "MIN": MIN,
            "NOP": NOP,
            "NYK": NYK,
            "OKC": OKC,
            "ORL": ORL,
            "PHI": PHI,
            "PHX": PHX,
            "POR": POR,
            "SAC": SAC,
            "SAS": SAS,
            "TOR": TOR,
            "UTA": UTA,
            "WAS": WAS
        };


        let nbaData = this.state.nbaData.data.games
        var numberGames = this.state.nbaData.data.numGames;
        console.log(nbaData)
        const scoreboard = (nbaData.map((current, index) => {
            var teamName1 = current.hTeam.triCode;
            var teamName2 = current.vTeam.triCode;
            var teamScore1 = current.hTeam.score;
            var teamScore2 = current.vTeam.score;
            var teamImage1 = logos[teamName1];
            var teamImage2 = logos[teamName2];
            var gameFinal = current.isGameActivated;
            var quarter = current.period.current;
            var clock = current.clock;
            var startTime = current.startTimeEastern;
            var halfTime = current.period.isHalftime
            var headline = current.nugget.text;
            console.log(halfTime)





            var teamOne = this.formatTeamInfo(teamName1, teamScore1, teamImage1);
            var teamTwo = this.formatTeamInfo(teamName2, teamScore2, teamImage2);
            var gameInfo = {
                quarter: quarter,
                clock: clock,
                startTime: startTime,
                gameFinal: gameFinal,
            };
            var clock = gameInfo.clock
            console.log(teamOne, teamTwo, gameInfo)
            var gameStart = gameInfo.gameFinal
            if (gameStart == true && quarter > 4) {
                var quarter = "OT"
            }
            if (halfTime == true) {
                var clock = "HALF"
            }


            if (gameStart == false && teamOne.score == 0) {
                var startTime = gameInfo.startTime;
                var quarter = ""
            }
            if (gameStart == false && teamOne.score > 0) {
                var clock = "FINAL";
                var quarter = "";
            }




            return (
                <div className="scoreboard">
                    <div className="team team-a">
                        <div className="team-logo">
                            <img src={teamImage1} width="50px" height="50px" />
                        </div>
                        <div className="team-detail">
                            <div className="team-nameandscore">
                                <div className="team-name">
                                    {teamOne.tricode}
                                </div>
                                <div className="team-score">
                                    {teamOne.score}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team team-b ">
                        <div className="team-logo">
                            <img src={teamImage2} width="50px" height="50px" />
                        </div>
                        <div className="team-detail">
                            <div className="team-nameandscore">
                                <div className="team-name">
                                    {teamTwo.tricode}
                                </div>
                                <div className="team-score">
                                    {teamTwo.score}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timer">
                        <div className="timer-container">
                            <div className="quarter">
                                {gameInfo.quarter}
                            </div>
                            <div className="timeleft">
                                {clock}
                            </div>

                        </div>
                    </div>
                    <div className="timer">
                        <div className="timer-container">
                            <div className="timeleft">
                                {headline}
                            </div>

                        </div>
                    </div>
                </div>

            )






            // this.generateScoreboard(teamOne, teamTwo, gameInfo);
        }))
        console.log(scoreboard)

        this.setState({
            scoreboard: scoreboard
        })


    }
    formatTeamInfo(tricode, score, teamImg) {
        var team = {
            tricode: tricode,
            score: score,
            teamImg: teamImg
        };

        return team;
    }


    scoreBoardRender() {
        const { scoreboard } = this.state;

        if (!scoreboard) {
            return null;
        }

        return scoreboard;
    }

    render() {
        // {this.renderScoreboard()}
        // {this.renderScoreBoard}

        return (
            <div className="gameSection">
                {this.scoreBoardRender()}


            </div>

        )
    }
}


export default ScoreBoard