/*class Animal { 
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let s = new Animal();
console.log(s.speak());
console.log(Animal.eat());

let ss = s.speak;
console.log(ss());

let ee = Animal.eat;
console.log(ee());*/

class Cat { 
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + ' dzayn');
    }
}
  
class Lion extends Cat {
    speak() {
       // super.speak();
        console.log(this.name + ' lacum e !');
    }
}

let l = new Lion('shunik@');
console.log(l.speak());

let c = new Cat('koviki');
console.log(c.speak());

//////////////////////////////////////////////////////////////////////////

console.log('----------------------------  Class && prototype  ---------------------------');

var ParrotGrandfather = function() {};
ParrotGrandfather.prototype = {
  species: 'Parrot',
  paws: 2
};

var ParrotFather = function() {};
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

var ParrotSon = function() {};
ParrotSon.prototype = Object.create(ParrotFather.prototype);

var grandfather = new ParrotGrandfather();
var father = new ParrotFather()
var son = new ParrotSon();

console.log(grandfather, father, son);

console.log(grandfather.species, father.species, son.species);
console.log(grandfather.paws, father.paws, son.paws);

ParrotGrandfather.prototype.paws++;
console.log(grandfather.paws, father.paws, son.paws);

ParrotFather.prototype.species = 'eagle';
console.log(grandfather.species, father.species, son.species);

ParrotSon.prototype.paws--;
console.log(grandfather.paws, father.paws, son.paws);

ParrotGrandfather.prototype.species = 'seagull';
console.log(grandfather.species, father.species, son.species);

/////////////////////////////////////////////////////////////////////

console.log('**************  urish   ****************************');

class Personik {
    static sos() {
        console.log('I really need help!');
    }
}
  
class Artist extends Personik {
    draw(art) {
        console.log(`Artist has just drawn ${art}`);
    }
}

class Artistik extends Artist {
    draw(art) {
        console.log(`Artistik jan ${art}`);
    }
}
  
const artist = new Artist();
Personik.sos(); // 
Artist.sos(); // 
Artistik.sos();
//artist.sos(); //   ERROR

console.log(new Artistik().draw('sirun'));

/////////////////////////////////////////////////////////////////////

let o = {
    foo() {
        console.log(this.a);
    }
}

let oo = {
    a: 'Anna'
}

let ooo = {
    a: true
}
var a = 5;

let m;
m = o.foo.bind(oo);
m();

m = o.foo.bind(ooo);
m();

o.foo();

function foo() {
    
    console.log(this.a);
}

foo();

(function() {

    //foo()
    foo.call(oo)
    foo.call(ooo)
})()

//////////////////////////////////////////////////////////////////////
console.log('*********************************************************************');

function f() {
    console.log(this.k);
}

var k = 'moracvac orinak1';

let ob = {
    k: 'moracvac orinak2',
    ff: f
}

/*setTimeout(() => ob.ff(), 0);
setTimeout(ob.ff, 0);
setTimeout(() => f(), 0);*/


/////////////////////////////////////////////////////////////////////

console.log('*********************************************************************');

function fo() {
    console.log(this.aa);
}

var aa = 'global';
var oob = {
    aa: 'lokal'
};

function bar() {
    var aa = 888;
    var mm = fo.bind(oob);
    mm();  // lokal   // fo() <=> window.fo() 
}

bar();

/////////////////////////////////////////////////////////

function d(n) {
    console.log(this.dd + n)
};

let us = {
    dd: 5
};

function doo() {
    d.apply(us, arguments);
};

doo(4); // 9

function bin(fn, obj) {
    return function() {
        return fn.apply(obj, arguments);
    };
}

function fu(n) {
    console.log(this.dd + n);
};

var su = {
    dd: 11
};

var sus = {
    dd: 111
};

var bab = function() {
    bin(fu, su)(1);
    console.log(this.dd);
} 
//bab(1);
bab();
bab.call(sus);
//setTimeout(bab(1), 0); 

////////////////////     Bolor@ miasin :))     //////////////////////

console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')

function too(t) {
    this.t = t;
};

var ob1 = {
    too: too
};
ob1.too(22);

var ob2 = {};
ob1.too.call(ob2, 55);

var ob3 = new too(2);

console.log(ob1, ob2, ob3);


const ob_1 = {
    too: f,
    t:22
};
const ob_2 = {
    t: 55
};
const ob_3 = {
    t: 2
};

///////////////// tarorinak u hetaqrqir :))

console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');

function hi() {
    console.log(this.by);
};

var by = 'goodbay';

hi.call(null);
var bi = hi.bind(null); bi();
hi.call(undefined);

//////////////////////////////////////////////////////////////////////////////////

console.log('___________________   ARROW FUNCTIONS   ______________________');

function arrow() {
    return () => {
        console.log(this.p);
    };
}

function arrow1() {
    return function() {
        console.log(this.p);
    };
};

var o1 = {
    p: 1
};

var o2 = {
    p: 2
};

var p = 'Here ARROW function';

arrow1.call(o2)(); // <=>  
var am = arrow1.call(o2); 
am.call(o2);

var aro = arrow.call(o1);
var aro1 = arrow1.call(o1);
aro();
aro1();
aro.call(o2);
aro1.call(o2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////#endregion

console.log('_______________________    Lexical Environment    _____________________');

//var lo;
//var lol;

/* globalLE = {
    outer: null,
    ko: f,
    lo: 5,
    lol: 'massage'
}; */

function ko() {
    // koLE = {outer: globalLE, lo: 10, function: f}
    var lo = 10;

    return function () {
        // lokalLE = {outer: koLE}
        console.log(lo);
        console.log(lol);
    };
}

var ok = ko();
ok();
var lo = 5;
var lol = 'massage';
console.log(ko()());



function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
};

console.log(sum(1)(2)(3));
//////////////////////////////////////////////////////////////
var span = document.querySelectorAll('span');
var sp = document.getElementsByTagName('span');
console.log(span);
console.log(sp);
for (var i = 0; i < span.length; i++) {
    span[i].innerHTML = i;
    span[i].onclick = function(x) {
        return function() {
            console.log(x);
        }      
    }(i)
}  

/////////////////////////////////////////////////////////////////////

console.log('____________________    JS BUBBLING    _____________________');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var container = document.getElementById('container');

document.body.style.height = 500;

container.addEventListener('click', function() {
    console.log('container');
}, true)
one.addEventListener('click', function() {
    console.log('one');
}, true)
two.addEventListener('click', function() {
    console.log('two');
}, true)
three.addEventListener('click', function() {
    console.log('three');
}, true)


container.addEventListener('click', function() {
    console.log('container');
}, false)
one.addEventListener('click', function() {
    console.log('one');
}, false)
two.addEventListener('click', function() {
    console.log('two');
}, false)
three.addEventListener('click', function() {
    console.log('three');
}, false)
//////////////////////  CALLBACK FUNCTIONS   ////////////////////

function first() {
    console.log('here is my first callback function');
};
function second() {
    console.log('here is my second callback function');
};
function cbf(callback1, callback2, bool) {
    console.log('start');
    //setTimeout(callback, 2000);
    if (bool) {
        callback1();
    } else {
        callback2();
    }
    console.log('end');
}
cbf(first, second, true);
cbf(first, second, false);


///////////////////////////////////////////////////////////////////

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

let arr = ['start', 'end'];

arr = ['start', ...arr1, ...arr2, 'end'];
console.log(arr);

function sos(x, y, z) {
    return x + y + z
}

let ar = [1,2,3]

console.log(sos(...ar));

let r1 = {
    a: 1,
    b: 2,
    c: 3
};
let r2 = {
    a: 4,
    b: 5,
    c: 6
};
let r3 = Object.assign(r1, {...r2, d: 'Anna'}, {N: 'new'});
console.log(r3);
console.log(r1);
console.log(r2);

///////////////////////////////////////////  INTERVIEW QUESTIONS   ///////

console.log('|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|\|/|\/|\/|');

//1
var ba = null;
console.log( ba !== null && typeof ba === 'object');

//2
/*(function () {
    //'use strict'
    var ffa = ffb = 3;
})()

console.log(typeof ffa, typeof ffb);*/

//3
var myObject = {
    fook: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.fook);
        console.log("outer func:  self.foo = " + self.fook);
        (function() {
            console.log("inner func:  this.foo = " + this.fook);
            console.log("inner func:  self.foo = " + self.fook);
        }());
    }
};
myObject.func();

//4
function asa() {
    return {
        sd: 'hello'
    }
}
function asa2() {
    return {
        sd: 'hello'
    }
}
function compare() {
    var pp = asa2();
    pp.sd += ' world';
    return [
        asa() === asa2(),
        pp.sd
    ];
}
console.log(compare());

var pp = asa();
var pp2 = asa2();
console.log(pp === pp2)
console.log(pp.sd);

//5
console.log('URA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
function isInteger(x) {
    //return String(x).indexOf('.') === -1;
    return Math.floor(x) === x;
}

console.log(isInteger(12.058)); //false
console.log(isInteger(12.0)); //true
console.log(isInteger(12)); //true
//
console.log(Number.isInteger(123.58));
//
function isInteger2(x) { return (x ^ 0) === x; } 
console.log(isInteger2(12.0));

//6
function isPolindrom(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPolindrom('anna'));
console.log(isPolindrom('annaJan'));

//7
function summa(a, b) {
    if (arguments[1]) {
        return a + b;
    } else {
        return function(b) {
            return a + b;
        }
    }    
}
console.log(summa(5)(10)); //15
console.log(summa(5, 10)); //15

//8
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function (ii) {
        return function () {
            console.log(ii);
        }
    }(i) ));
    document.body.appendChild(btn);   
}

// web api 
/* 
{
    f0: function(0) {
        return function () {
            console.log(0);
        }
    },
     f1: function(1) {
        return function () {
            console.log(1);
        }
    },
     f2: function(2) {
        return function () {
            console.log(2);
        }
    },
     f3: function(3) {
        return function () {
            console.log(3);
        }
    },
     f4: function(4) {
        return function () {
            console.log(4);
        }
    }
}
*/

// 9

const readHugeList = () => {
    let mas = [];
    for (let i = 0; i < 1000000; i++) {
        mas[i] = i;
        return mas;
    }
}
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
console.log(nextListItem());


// 10
var length = 10;
function fnn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fnn) {
    fnn();
    fnn.call(this);
    arguments[0]();
  }
};

obj.method(fnn, 5, 1);

// 11
console.log('-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/--/-/-/-/-/-/-');

(function () {
    //var x;
    //var y;
    try {
        throw new Error();
    } catch (x) {
        // x = 1; y = 2
        var x = 1, y = 2;
        console.log(x);   // 1
    }
    console.log(x);       // undefined 
    console.log(y);       // 2
})();

// 12
console.log('*********************************************************');

var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

function ja() {
    return 5
}

var ttt = ja();
console.log(ttt);

var tu = new String(10);
console.log(typeof tu, tu);
tu.jk = "aba";
console.log(tu.jk);






