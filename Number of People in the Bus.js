var number = function(busStops){
  return busStops.reduce((a, i) => a+i[0]-i[1],0);
}