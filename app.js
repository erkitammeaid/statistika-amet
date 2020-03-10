let occupations  = {
3151: {name: "Laevamehaanikud", rate:0 },
2151: {name: "Elektriinsenerid", rate: 0 },
2261: {name: "Hambaarstid", rate: 0 },
5120: {name: "Kokad", rate: 0},
7123: {name: "Krohvijad", rate: 0}

}


fetch ('http://andmebaas.stat.ee/sdmx-json/data/PA633/49+65+DBL148+DBL245+DBL310.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(response =>{
    return response.json()   
           

})
.then(Data => {

    Data.structure.dimensions.observation[0].values.forEach((el, i) =>{
        const occupations = (el.name.split(' ')[0])
        const dataSetKey = i +':0:0:0:0'
        console.log(el.name.split(' ')[0])
        console.log(dataSetKey)
        console.log(data.dataSets[0].observation[dataSetKey][0])
        occupations[occupationsKey].rate = data.dataSets[0].observation


    })

})





