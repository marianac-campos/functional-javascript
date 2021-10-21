const list = [
    { "id": "Grandad", "parent": null },
    { "id": "Dad", "parent": "Grandad" },
    { "id": "You", "parent": "Dad" },
    { "id": "Son", "parent": "You" },
    { "id": "Daughter", "parent": "You" },
    { "id": "Brother", "parent": "Dad" },
    { "id": "Nephew", "parent": "Brother" },
    { "id": "Niece", "parent": "Brother" },
    { "id": "Sister", "parent": "Dad" },
    { "id": "Uncle", "parent": "Grandad" },
    { "id": "Cousin", "parent": "Uncle" }
]

const buildTree = (list, parent) => {
    console.log(parent);
    var node = {};
        list
            .filter(x => x.parent === parent)
            .forEach(x => {
                console.log(parent, x.id);    
                node[x.id] = buildTree(list, x.id);
            })
        return node;
}

console.log(buildTree(list, null));