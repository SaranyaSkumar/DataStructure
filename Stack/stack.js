class Stack{
    constructor(){
        this.storage= {};
        this.size=0;
    }

    insert(value){
        this.size++;
        this.storage[this.size]= value;
    }

    remove(){
        let removed= this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peak(){
        return this.storage[this.size];
    }
}

const stack= new Stack();

stack.insert('trivandrum');
stack.insert('kollam');
stack.insert('pathanamthitta');
stack.insert('alapuzha');
console.log("stack-->", stack);

let removed_item = stack.remove();
console.log("item removed-->", removed_item, '\n', stack);


console.log("peak-->", stack.peak());



