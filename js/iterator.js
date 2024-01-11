function createIterator(arr){
    let index = 0;

    return {
        next: function(){
            if(index<arr.length){
                return{
                    cuurentItem: arr[index++],
                    nextItem: arr[index],
                    previousItem: arr[index--],
                    done: false,
                }
            }else{
                return{
                    done: true,
                }
            }
        }
    }
}

const array = [1,2,3];

const myArray = createIterator(array)

console.log(myArray.next());
console.log(myArray.next());
console.log(myArray.next());
console.log(myArray.next());