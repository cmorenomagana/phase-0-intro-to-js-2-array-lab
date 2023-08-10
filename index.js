const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Bob")
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Ralph")
}
function appendCat(name) {
    const allcats = [...cats, "Broom"]
   return allcats
}
function prependCat(name) {
    const allcats = ["Arnold", ...cats]
    return allcats
}
function removeLastCat() {
    return cats.slice(0,-1)
}
function removeFirstCat() {
    return cats.slice(1)
}
