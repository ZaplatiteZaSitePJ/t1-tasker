export default function getColroFromPriorities (priorities:string ) {
    priorities = priorities.toLowerCase()
    return `var(--${priorities}-priorites-color)`
}