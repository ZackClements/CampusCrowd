function connection_time(time, building, time_map) {
    // Use a loop to add the building to the corresponding entry in time_map
    for (let i = 0; i < 24; i++) {
        let key = i < 10 ? `0${i}` : `${i}`;
        if (time === key) {
            time_map.get(key).push(building);
            break;
        }
    }
}

function c(time_map, new_time_map){
    //console.log(time_map);
    for(let i = 0; i < time_map.size; i++){
        let counter = {};
        let key = i < 10 ? `0${i}` : `${i}`;

        for(const j of time_map.get(key)){
            //console.log(j);
            counter[j] = counter[j] ? counter[j] + 1 : 1;
        }
        new_time_map.get(key).push(counter);
    }
}

module.exports = {
    connection_time,
    c,
}