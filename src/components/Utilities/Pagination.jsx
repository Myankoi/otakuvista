const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handlePrevPage = () => {
    page <= 1
      ? null
      : setPage((prevState) => prevState - 1)
    scrollTop()
  }

  const handleNextPage = () => {
    page >= lastPage
      ? null
      : setPage((nextState) => nextState + 1)
    scrollTop()
  }

  return (
      <div className="flex justify-center items-center p-8 text-color-primary gap-4 text-2xl">
        <button className="transtition-all hover:text-color-accent" onClick={handlePrevPage} scr>Prev</button>
        <p>{page} of {lastPage}</p>
        <button className="transtition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
      </div>
  )
}

export default Pagination
