let data = [
    {
        name: 'Gabrielle',
        age: '15'
    },
    {
        name: 'Jesse',
        age: '17'
    },
    {
        name: 'Mary',
        age: '18'
    },
    {
        name: 'Ayobami',
        age: '16'
    },
    {
        name: 'Olivia',
        age: '19'
    },
    {
        name: 'Lekan',
        age: '14'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is '+ item.age + ' years old' + '</div>';
    
});

info.innerHTML = details.join('\n');