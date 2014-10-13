// Basic For Loop
// for (initialization, condition, increment of change)

for (var i = 99; i > 0; i--){ // (var i = 99) = initialization | (i > 0) = condition | (i--) = increment of change

    console.log(i + "bottles of beer on the wall. " + i + " bottles of beer"); // lets sing a song!!

    if (i === 1){ // condition
        console.log("Take one down pass it around, no more bottles of beer on the wall! The End") // sing the last line
        // differently everybody
    } else {
        console.log("Take one down pass it around, " + (i-1) + "bottles of beer on the wall.");// otherwise sing normally
    }
}
