import React from 'react'
import Button from '../Button'
import './Pagination.css'

export default function Pagination({
  onFirstClick,
  onPreviousClick,
  onNextClick,
  onLastClick
}) {
  return (
    <div className="Pagination">
      <div className="PaginationPrevious">
        <Button onClick={onFirstClick}>First</Button>
        <Button onClick={onPreviousClick}>Previous</Button>
      </div>
      <div className="PaginationCenter">Viewing page 1 of 20</div>
      <div className="PaginationNext">
        <Button onClick={onNextClick}>Next</Button>
        <Button onClick={onLastClick}>Last</Button>
      </div>
    </div>
  )
}
