const inputElement = (type, name, title, placeholder, classname, divclassname) => {

    return `
        <div class = '${divclassname}' >
            <input type='${type}' name='${name}' placeholder='${placeholder}'  class = "${classname}">
            <label>${title}</label>
        </div>
    `;
}


const formElement = `
    <form class = 'form'>
        ${inputElement('text', 'Subject', '', 'Tárgy', 'subject', 'subjdiv' )}
        ${inputElement('textarea', 'Comment', '', 'Megjegyzés', 'comment', 'commdiv')}
        ${inputElement('checkbox', 'terms', 'Elolvastam és elfogadom az Adatkezelési Tájékoztatót', '', 'box', 'boxdiv')}
        <button>MENTÉS</button>
    </form>
`;


function loadEvent() {
   const root = document.getElementById('root')
   root.insertAdjacentHTML('afterbegin', formElement)
}

window.addEventListener("load", loadEvent);