import React from 'react';
import axios from 'axios'



export function GetNBAData(){
 getData()
     function getData(){
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        // console.log(month, day, year)
    
    
    
        if (day < 10 && month <10) {
            var date = `${year}0${month}0${day}`
            var nbaData = {
                "async": true,
                "crossDomain": true,
                'dataType': 'json',
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };
    
           await axios(nbaData).then(function (response) {
                var nbaData = response.data;
                console.log(nbaData)

            

                // this.setState({
                //     nbaData: nbaData
                // })
                // updateNBAScores(nbaData);
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
    
            axios(nbaData).then(function (response) {
            
                var nbaData = response.data;
                console.log(nbaData)
                // updateNBAScores(nbaData);
                // getNBADataInterval();
    
            })
    
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
    
            axios(nbaData).then(function (response) {
                var nbaData = response.data;
                // updateNBAScores(nbaData);
                // getNBADataInterval();
    
            })
    
        }
        else {
            var date = `${year}0${month}${day}`
            var nbaData = {
                "url": `https://place.kim-chris.com/nba/${date}`,
                "method": "GET",
            };
    
            axios(nbaData).then(function (response) {
                var nbaData = response.data;
                // updateNBAScores(nbaData);
                // getNBADataInterval();
    
            })
        }
    }




}