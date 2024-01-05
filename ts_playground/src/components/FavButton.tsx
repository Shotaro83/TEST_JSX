import "./styles/FavButton.scss"

const FavButton = () => {
  const count: number = 999
  
  return (
    <span className="FavButton">
      ♥{count}
    </span>
  )
}

export default FavButton