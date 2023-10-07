export function handleSearch(items, id, term) {

    items[id].text = term
    
    return items


}


export function deleteSearch(id, items) {


    return items.filter((val) => {
        return val.id !== id
    })

}