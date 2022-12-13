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


module.exports = {
    connection_time,
}