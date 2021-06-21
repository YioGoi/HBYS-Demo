

export default function advancedFilterListBox(
    filterHeaderClassName, 
    filterListboxWrapperClassName,
    filterListboxListClassName,
    filterListboxItemClassName,
    customFilterIconClassName, 
    filterOptions, 
    setNameFilterMatchMode,
    setDateFilterMatchMode
) {
    let firstTimeCreate = true
    let filterHeaderNameElement = document.querySelector(`.${filterHeaderClassName}`)

    const handleClickEvent = e => {
        e.preventDefault()
        let newDivElement = null

        if (firstTimeCreate) {
            newDivElement = document.createElement('div')
            newDivElement.style.position = 'absolute'
            newDivElement.className = filterListboxWrapperClassName
            let ulElement = document.createElement('ul')
            newDivElement.appendChild(ulElement)
            ulElement.className = filterListboxListClassName
            ulElement.setAttribute('role', 'listbox')
            ulElement.setAttribute('aria-multiselectable', 'false')

            filterOptions.forEach(option => {
                let liElement = document.createElement('li')
                liElement.className = filterListboxItemClassName
                liElement.setAttribute('aria-label', option.code)
                liElement.setAttribute('role', 'option')
                liElement.setAttribute('aria-selected', 'false')
                liElement.innerHTML = option.name

                ulElement.appendChild(liElement)
            })

            filterHeaderNameElement.style.position = 'relative'
            filterHeaderNameElement.appendChild(newDivElement)

            firstTimeCreate = false
        } else {
            let menuElement = document.querySelector(`.${filterListboxWrapperClassName}`)
            menuElement.style.display = 'block'
        }

        const handleListItemClick = e => {
            e.stopPropagation()
            let allListItems = document.querySelectorAll(`.${filterListboxItemClassName}`)
            allListItems.forEach(listItem => {
                listItem.className = filterListboxItemClassName
            })
            let filterOption = e.target.ariaLabel

            if(filterListboxItemClassName.includes('name')) {
                setNameFilterMatchMode(filterOption)
            }
            if(filterListboxItemClassName.includes('date')) {
                setDateFilterMatchMode(filterOption)
            }
            
            e.target.ariaSelected = true
            e.target.className = `${filterListboxItemClassName} selected`
            if (newDivElement) {
                newDivElement.style.display = 'none'
            }
        }

        let nameListBoxItems = document.querySelectorAll(`.${filterListboxItemClassName}`)
        if (nameListBoxItems) {

            nameListBoxItems.forEach(item => {
                item.addEventListener('click', handleListItemClick);

                return () => {
                    item.removeEventListener('click', handleListItemClick)
                }
            })
        }
    }

    let myFilterIcon = document.querySelector(`.${customFilterIconClassName}`)
    if (myFilterIcon) {
        myFilterIcon.addEventListener('click', handleClickEvent);
    }

    return () => {
        myFilterIcon.removeEventListener('click', handleClickEvent)
    }
}
