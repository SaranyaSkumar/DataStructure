class Node{
    constructor(value, next, prev){
        this.value= value;
        this.next= next || null;
        this.prev= prev || null;
    }
}


class LinkedList{
    constructor(){
        this.tail= this.head= null;
    }

    append(value){
        // if the list is empty
        // if the list is not empty
        if(!this.tail){
            this.head= this.tail= new Node(value);
        }else{
            let tail_old = this.tail;
            this.tail= new Node(value);
            tail_old.next= this.tail;
            this.tail.prev= tail_old;
        }
    }

    prepend(value){
        // if the list is empty
        // if the list is not empty
        if(!this.head){
            this.head = this.tail = new Node(value);;
        }else{
            let head_old= this.head;
            this.head= new Node(value);
            this.head.next= head_old;
            head_old.prev= this.head;
        }
        
    }

    deleteHead(){
        // if the list is empty
        // if the list is not empty
        if(!this.head){
            return null;
        }else{
            let removed= this.head;
            //if length =0 
            if(this.head===this.tail){
                this.head= this.tail = null;
            }else{
                this.head= this.head.next;
                this.head.prev=null;
            }

            return removed.value;
        }
    }

    deleteTail(){
        // if the list is empty
        // if the list is not empty 
        if(!this.tail){
            return null;
        }else{
            let removed= this.tail;
            if(this.tail === this.head){
                this.head= this.tail=null;
            }else{
                this.tail= this.tail.prev;
                this.tail.next=null;
            }
            return removed;
        }
    }

    search(value){
        let currentNode = this.head;

        while(currentNode){
            console.log("currentNode.value",currentNode.value)
            if(currentNode.value===value){
                return currentNode;
            }
            currentNode= currentNode.next;
        }
        return null;
    }

}

let linkedList = new LinkedList();

linkedList.append('trivandrum');
linkedList.append('kollam');
linkedList.append('pathanamthitta');
console.log("linkedlist after append", linkedList);

linkedList.prepend('alapuzha');
linkedList.prepend('kottayam');
console.log("linkedlist after append and prepend", linkedList);

linkedList.deleteHead();
linkedList.deleteTail();
console.log("linkedlist after deleteHead and deleteTail", linkedList);

console.log("linkedlist search", linkedList.search('alapuzha'));