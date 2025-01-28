import './Item.css'

function Item(props){
    const Itemname = props.name
    return(
        <>

        <p className="nirma">{Itemname}</p>
        {props.children}
        </>
    )
}

export default Item;