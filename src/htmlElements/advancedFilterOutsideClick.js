

export default function advancedFilterOutsideClick(customFilterIconClassName, filterListboxWrapperClassName) {
    const handleOutsideClick = (evt) => {
        const flyoutElement = document.querySelector(`.${filterListboxWrapperClassName}`);
        let myFilterIcon = document.querySelector(`.${customFilterIconClassName}`)
        let targetElement = evt.target; // clicked element

        do {
            if (targetElement === flyoutElement || targetElement === myFilterIcon) {
                // This is a click inside. Do nothing, just return.
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        if (flyoutElement) {
            flyoutElement.style.display = 'none'
        }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
        document.removeEventListener('click', handleOutsideClick)
    }
}
