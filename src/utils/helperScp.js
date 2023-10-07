export function handleSearch(items, id, term) {

    items[id].text = term

    return items


}


export function deleteSearch(id, items) {


    return items.filter((val) => {
        return val.id !== id
    })

}



export function sortByDate(items, tp) {

    if (tp === '1') {
        return items.sort(function (a, b) { return a.dateNum - b.dateNum });

    } else {
        return items.sort(function (a, b) { return b.dateNum - a.dateNum});

    }
}

export function sortByItem(items, category) {

    if (category === "1") {
        return items.filter((val) => {
            return val.isDone
        })
    } else if (category === "2") {
        return items.filter((val) => {
            return val.isImportant
        })
    } else {
        return items
    }

}

export function addingItem(items,obj){
    
  
    items.push(obj)

    return items
}