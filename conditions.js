
const names=["vipul","ram","dog","cat"]
for(var i=0;i<names.length;i++)console.log(names[i])
for( x in names)console.log(names[x])
console.log(names.filter(names=>names.length===3))
console.log(names.map(names=>names.length===3))
