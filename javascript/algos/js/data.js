class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        return this.delete(this.length - 1);
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        let ans = this.data[index];
        this._collapse(index);
        return ans;
    }

    _collapse(index) {
    for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];            
        }
        delete this.data[this.length - 1]
        this.length--;
    }

    print() {
        console.log(this.data);
        
    }
}

let arrayList = new ArrayList();
arrayList.push(2);
arrayList.push(3);
arrayList.push(5);

let temp = arrayList.pop();
console.log(temp);
arrayList.print()

arrayList.push(4);
arrayList.push(4);
arrayList.push(4);

arrayList.print();

let temp2 = arrayList.get(2);
console.log(temp2);

arrayList.delete(2);

arrayList.print();

