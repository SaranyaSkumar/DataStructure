class Queue{
    constructor(){
        this.storage= {};
        this.head= 0;
        this.tail=null;
    }

    insert(value){
        this.storage[this.tail]= value;
        this.tail++;
    }

    remove(){
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const queue= new Queue();

queue.insert('trivandrum');
queue.insert('kollam');
queue.insert('pathanamthitta');
queue.insert('kottayam');
queue.insert('alapuzha');

console.log("queue --> ", queue);

queue.remove();
console.log("queue after shift--> ", queue);