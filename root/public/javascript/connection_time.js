function connection_time(time, building, time_map) {
    // for each hour in the day, create a corresponding key
    // then if the connection time (hour) equals the key (hour), add building to time_map
    for (let i = 0; i < 24; i++) {
        // e.g. 00 01 02 etc. Matches the format of time which is from log file
        let key = i < 10 ? `0${i}` : `${i}`;
        if (time === key) {
            time_map.get(key).push(building);
            break;
        }
    }
}

function connections(time_map, new_time_map){
    for(let i = 0; i < time_map.size; i++){
        let counter = {};
        let key = i < 10 ? `0${i}` : `${i}`;

        for(const j of time_map.get(key)){
            counter[j] = counter[j] ? counter[j] + 1 : 1;
        }
        new_time_map.get(key).push(counter);
    }
}

module.exports = {
    connection_time,
    connections,
}