import '../styles/Tile.css'

const Tile = ({value}) =>{
    return(
        <button data-testid={value} className='tile'>
            {value}
        </button>
    )
}

export default Tile;