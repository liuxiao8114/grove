const Quote = (content, author) => {
  return (
    <div>
      <p className="quote">{content}</p>
      <p className="">by {author}</p>
    </div>
  )
}
