import React from 'react'

interface Props {
    onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory}: Props) {
  return (
   <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
     <option value="">All categories</option>
     <option value="Grocerie">Grocerie</option>
     <option value="Utilities">Utilities</option>
     <option value="Entertainment">Entertainment</option>
   </select>
  )
}

export default ExpenseFilter