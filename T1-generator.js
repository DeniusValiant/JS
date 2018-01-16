function* sequence( start ,step)
{
    var value = start;
    yield value;
    while(true) {
        value =  value + step;
        yield value;
    }
}

var g = sequence(10,3);

var g2 = sequence(7,1);

console.log(g.next().value);

console.log(g.next().value);

console.log(g2.next().value);

console.log(g2.next().value);

console.log(g.next().value);


