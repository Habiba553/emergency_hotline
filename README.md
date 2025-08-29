1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 1.getElementByID helps to find one element by it's id.
        2.getElementsByClassName helps to find all element with that class (resturns a list).
        3.quearySelector helps to find the first element matching a selector mentioned.
        4.quearySelectorAll helps to find all elements matching a selector mentioned (returns a list).
2.How do you create and insert a new element into the DOM?
Answer: To create an element we use document.createElement() and then to insert new element add it with appendChild() or append().
3.What is Event Bubbling and how does it work?
Answer: Event Bubbing means when an element is clicked, the event moves through its parent elements.
        For example: when <button> is clicked inside a <div> first the button's event runs then the div's event and then the body's event.
4.What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is to add one event listener to the parent and handle clicks for children inside it.
        Useful: 1. It helps not to add event listeners to many child elements.
                2. It works even for dynamically added elemnts.
5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: 1. preventDefault() helps to stop default browser action.
        2. stopProgragation() helps to stop the event from bubbling up to parent elements.
