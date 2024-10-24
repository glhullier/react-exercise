const carList = [
    'peugeot',
    'renault', 
    'mercedes',
    
]


function ShoppingCar(){
    return(
        <ul className="car">
            
            {
                carList.map((car,index)=>
                <li key={`${car}-${index}`}>{car}</li>
                )
            }
        </ul>
    )

}


export default ShoppingCar