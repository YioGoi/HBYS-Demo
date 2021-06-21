/**
 * 
 * @param { string } filterHeaderClassName 
 * @param { string } customFilterIconClassName 
 */

export default function advancedFilterIcon(filterHeaderClassName, customFilterIconClassName) {
    let nameHeader = document.querySelector(`.${filterHeaderClassName}`)
    
    if (nameHeader) {
        let newDivElement = document.createElement('span')
        newDivElement.className = `${customFilterIconClassName} pi pi-filter`
        nameHeader.appendChild(newDivElement)
    }
}
