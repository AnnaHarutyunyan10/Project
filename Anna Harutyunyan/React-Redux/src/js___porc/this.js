class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Makeing constructor');
    }

    get done() {
        return this._done === true ? 'task is done' : 'task is in progress';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error! value must be true or false.');
        }
    }

    complete() {
        this.done = true;
        console.log(`The Task "${this.title}" is done`);
    }

    static getDefaultTitle() {
        return 'have a happy day';
    }
}

Task.count = 0;

const task = new Task('cleaner');
const task2 = new Task('bay fruties');
const task3 = new Task();

//console.log(task);
console.log(task.title);
console.log(task2.title);
console.log(task3.title); 

console.log(task2.complete());

console.log(Task.count);
//console.log(task2.count); // undefined

//console.log(task3.getDefaultTitle()); // error
console.log(Task.getDefaultTitle()); 
//
console.log(task.done, task._done);
console.log(task.complete());
console.log(task.done, task._done);



console.log('/////////////////////////////////////////////////////////////////');
class Menu {
    constructor(title) {
        this._title = title;
        this.done = false;

        Menu.count += 1;
        console.log('Create Tasks');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'here is title in default';
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is completed`);
    }
}

Menu.count = 0;

class SubMenu extends Menu {
    constructor(t, parent) {
        super(t);
        this.parent = parent;
        console.log('Create SubTasks');
    }

    complete() {
        //this.done = true;
        super.complete();
        console.log(`SubTask "${this.title}" is completed`);
    }
}

const menu = new Menu('JavaScript');
const subMenu = new SubMenu('ES6', menu);


menu.complete();
subMenu.complete();

console.log(menu);
console.log(subMenu);

console.log(subMenu instanceof Menu);
console.log(subMenu instanceof SubMenu);

console.log(SubMenu.getDefaultTitle());
console.log(SubMenu.count);
console.log(subMenu.title);
//console.log(menu._title);

//////////////Mixin 
console.log('MIXIN____________________________________________________________________________________________');
let sayHiMixin = {
    sayHi() {
        console.log(`Hi, ${this.name}`);
    },
    sayBye() {
        console.log(`By, ${this.name}`);
    }
};

class User {
    constructor(name) {
        //console.log(name);
        this.name = name;
    }
};

Object.assign(User.prototype, sayHiMixin);
let user = new User('Anna');
console.log(user.sayHi());
console.log(sayHiMixin instanceof User); //false


//            DESKRIPTOR
const obj = {
    name: 'Anna'
};
Object.defineProperty(obj, 'name', {
        value: 'An',
        writable: false,
        //enumerable: false,
        //configurable: true
    }
);

obj.name = 'Alip'

console.log(obj.name);

for (let key in obj) {
    console.log(obj[key]);
}

console.log(Object.keys(obj));

Object.defineProperties(obj,
    {
        'age': {
            value: 22,
            writable: false
        },
        'work': {
            value: 'web programmer',
            writable: false,
            configurable: false
        }
    }
);

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));


//////////        GETTER  SETTER
const person = {
    name: 'Anna',
    surname: 'Harutyunyan'
};

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value)  {
        this.name = value;
    }
});

console.log(person.fullName);
person.fullName = 'Serj';
console.log(person.fullName);

let u= {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(u, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  console.log(u.fullName); 

  ///////////////////////////////////////////////////////////
  function Man(name) {
      this.name = name;
  }

  Man.prototype.age = 20;

  let man = new Man('Anna');
  let man2 = new Man('Serj');

  console.log(man.name);
  console.log(man.age);

  man.age = 25;
  console.log(man.age);
  console.log(man2.age);

function aa() {return 1;}
//function aa() {return 2;}
console.log(aa());

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//           PROMISE           //

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'Anna'});
            //reject();
            console.log('resolve')}, ms);
    });
};

/*delay(500)
    .then((tiv) => {
        console.log(1, tiv);
        return tiv.name;
    })
    .then((tiv_name) => console.log(2, tiv_name))
    .then(() => console.log(3));*/

/*const promise = delay(4000);

promise.then(() => console.log(4));
promise.then(() => console.log(5));
promise.then(() => console.log(6));*/


///////////////////////////////////////////////////////////////////////////

const url1 = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F1273995%2F7196%2Fi%2F450%2Fdepositphotos_71962361-stock-photo-hands-in-shape-of-love.jpg&imgrefurl=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BB%25D1%258E%25D0%25B1%25D0%25BE%25D0%25B2%25D1%258C.html&docid=5RYuhGnE4m5BOM&tbnid=2FjwlSVX9_b7bM%3A&vet=10ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiFAigAMAA..i&w=450&h=365&bih=651&biw=1301&q=kartinki&ved=0ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiFAigAMAA&iact=mrc&uact=8';
const url2 = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fklike.net%2Fuploads%2Fposts%2F2019-01%2F1547367999_1.jpg&imgrefurl=https%3A%2F%2Fklike.net%2F1193-krasivye-kartinki-skachat-besplatno-40-foto.html&docid=8YA0jdiJI2w_6M&tbnid=oEIRQHoPSA6CAM%3A&vet=10ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiHAigCMAI..i&w=800&h=563&bih=651&biw=1301&q=kartinki&ved=0ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiHAigCMAI&iact=mrc&uact=8';
const url3 = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fklike.net%2Fuploads%2Fposts%2F2019-03%2F1551516106_1.jpg&imgrefurl=https%3A%2F%2Fklike.net%2F1346-krasivye-kartinki-na-avu-50-foto.html&docid=aU-BdY9Ylbvz2M&tbnid=KI0m7PstqeNdrM%3A&vet=10ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiKAigFMAU..i&w=650&h=489&bih=651&biw=1301&q=kartinki&ved=0ahUKEwigoP6C9v3jAhUBpIsKHda-DKIQMwiKAigFMAU&iact=mrc&uact=8';
/*
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.height = 200;
        img.src = url;
        //img.alt = 'Anna jan';
        document.body.append(img);

        img.addEventListener('load', () => {
            resolve();
        });

        img.addEventListener('error', () => {
            reject();
        });
    });
};

loadImage(url1)
    .then(() => {
        console.log('image 1');
        return loadImage(url2);
    })//() => console.log('error') // 2-rd callback argumenti poxaren catch() enq ogtagorcum
    .then(() => {
        console.log('image 2');
        return loadImage(url3);
    })//() => console.log('error')
    .then(() => {
        console.log('All images loaded');
    })//() => console.log('error')
    .catch(() => console.log('error'));
*/




// async-await

console.log('****************************************************************************');

function delay1(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(Math.random()), ms)
    });
}

/*delay1(1000)
    .then(() => {
        console.log(1);
        return delay1(1000);
    })
    .then(() => {
        console.log(2);
        return delay1(1000);
    })
    .then(() => {
        console.log(3);
        return delay1(1000);
    })*/
//                                 ays erkuse hamarjeq en!

async function fn() {
   // console.log('start');
    try {
    const rand1 = await delay1(1000);
    console.log('A');
    console.log('random1', rand1);
    const rand2 = await delay1(1000);
    console.log('B');
    console.log('random2', rand2);
    const rand3 = await delay1(1000);
    console.log('C');
    console.log('random3', rand3);
    } catch(e) {
        console.log(e);
    }
}

fn();

//////////////////////////////////////////////////////////////////////////////////////////////////

function nums(a, b) {
    let sum = a + b;
    let mply = a * b;
    return [sum, mply];
}

console.log(nums(5, 5));

function* numsGen(a, b) {
    yield a + b;
    yield a * b;
}

let nGen = numsGen(3, 2);
console.log(nGen.next());
let result = 5;
result += nGen.next().value;
console.log('result', result);
///////////////////////////////////////////
function* gen() {
    let str = yield 'Hello'; // +
    yield str;
    return 'Anna';
}

let it = gen();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it);

let it2 = gen();
console.log(it2.next());
//console.log(it2.return('a'));
//console.log(it2.throw('tarorinak error'));

////////////////////////////////////////////////

// my generator

console.log('........................................................................');

function myGenerator(n) {
    let current = 1;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {
                            value: undefined,
                            done: true
                        };
                    if (current <= n) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                    }
                    return result;                    
                }
            }
        }
    };
}

let iter = myGenerator(3)[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

////////////       yield*         ////////////////////

console.log('_________________   yield*   __________________');

function* gen1() {
    yield* ['a', 'b', 'c'];
}

let gener = gen1();

for (let kk in gener) {
    console.log(kk);
}

function* generateSequence() {
    yield 'first';
    yield 'second';
    yield 'third'; //return - i depqum 'third' - e chi erevum
}

let generator = generateSequence();

for(let value of generator) {
    console.log(value); 
}

//////////////////////////////            ORINAK          //////////

function* genCodes(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
};

function* genAlpha() {
    yield* genCodes(48, 57);
    yield* genCodes(65, 90);
    yield* genCodes(97, 122);
};

let str;

for (let value of genAlpha()) {
    str += String.fromCharCode(value);
};

console.log(str);

console.log('______      WHAT???      ____________');
function* genS() {
    yield "2 + 2?";
    console.log('here was error...'); 
}
  
let generators = genS();
console.log( generators.next().value ); 
//console.log( generators.throw('Bad error!!!').value ); 
console.log( generators.return('end of code!!!') ); 
console.log( generators.next() ); 

////////////////      ITERATORS        ///////////////////

let objNumbers = {
    start: 1,
    end: 10
};

for (let it in objNumbers) { //of--
    console.log(it);
}

//console.log(...Object.values(objNumbers));

let arr = ['one', 'two', 'three'];

//let st = 'hello';           //   nuyn@

let itr = arr[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

let itr2 = arr[Symbol.iterator]();
console.log(itr2.next());

///////////////  DESTRUKYURIZACIA   /////////////////////
///////////////  ARRAYS             /////////////////////
console.log('_________     DESTRUKYURIZACIA       ____________');

let [js, react = '+', [redux, mobX]] = ['js', 'react', ['redux', 'mobX']];

console.log(js, react, redux, mobX);

function getScores() {
    return [3, 4, 5];
};

let scores = getScores();
console.log(scores);

let [low, middle, hoght] = getScores();
console.log(low, middle, hoght);

let yes = 'yes';
let no = 'no';

[yes, no] = [no, yes];

console.log('yes is:', yes);
console.log('no is:', no);

///////////////           OBJECTS             /////////////////////

let woman = {
    name: 'Anna',
    age: 22,
    social: {
        fb: 'haha',
        tw: 'hihi'
    }
};

let {name: a, age: b, hobby = 'all', social: { fb: fasebook }, social: { tw }} = woman;
console.log(a, b, hobby, fasebook, tw);

console.log(Object.keys(woman));











