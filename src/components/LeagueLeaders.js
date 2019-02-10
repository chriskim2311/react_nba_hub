import React, { Component } from 'react'
import axios from 'axios';


class LeagueLeaders extends Component {
    constructor() {
        super()
        this.state = {
            nbaData: [],
            leaders: []
        }
        this.getLeagueLeaders()
    }


    getLeagueLeaders() {
        axios.get('https://place.kim-chris.com/fantasy/').then(response => {
            const data = response.data
            console.log(data)
            this.setState({
                leaders: data
            })

            this.renderLeaders(this.state.leaders)
        }


        )
    }

    renderLeaders() {
        // const dataArray=[]
        // let pointsArray = []
        console.log(this.state.leaders)
        const data = this.state.leaders.data.items[0].items;
        const pointsArray = data[0].playerstats

        console.log(pointsArray)
        const points = (pointsArray.map((current) => {
            const player = current.PLAYER_NAME
            const points = current.PTS
            // pointsObj[player] = points
            console.log(player, points)

            // console.log(pointsObj)



            // console.log(dataArray)

            return (
                <div className="data">
                    <div>
                        {player}
                    </div>
                    <div>
                        {points}
                    </div>


                </div>
            )
        }))
        // dataArray.push(pointsObj)
        console.log(points)
        this.setState({
            leaders: points
        })

    }


    listRender() {
        const { leaders } = this.state;

        if (!leaders) {
            return null;
        }

        return leaders;
    }


    render() {
        return (
            <div className="gameSection">
                {/* <div class="filters">
                                    <span>Filters: </span>
                                    <ul id="filters">
                                        <li class="active" data-filter="*">All</li>
                                        <li data-filter=".points">Points</li>
                                        <li data-filter=".rebounds">Rebounds</li> 
                                        <li data-filter=".assists">Assists</li> 
                                        <li data-filter=".blocks">Blocks</li> 
                                        <li data-filter=".steals">Steals</li> 
                                    </ul>
                                </div> */}
          {/* {this.listRender()} */}

            </div>
        )
    }

}
export default LeagueLeaders