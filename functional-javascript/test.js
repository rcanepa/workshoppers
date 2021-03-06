'use strict';

var doctors = [
  { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
  { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
  { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
  { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
  { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
  { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
  { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
  { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
  { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
  { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
  { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
  { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }
];

// Using filter and map
var result = doctors.filter(function (doctor) {
  return doctor.begin >= 2000;
}).map(function (doctor) {
  return {
    doctorNumber: '#' + doctor.number,
    playedBy: doctor.actor,
    yearsPlayed: doctor.end - doctor.begin
  }
})

// Same result using reduce
var reduceResult = doctors.reduce(function (nemo, doctor) {
  if (doctor.begin >= 2000){
    nemo.push({
      doctorNumber: '#' + doctor.number,
      playedBy: doctor.actor,
      yearsPlayed: doctor.end - doctor.begin
    })
  }
  return nemo;
}, []);

console.log(JSON.stringify(result, null, 4));

console.log(JSON.stringify(reduceResult, null, 4));
