
// Use Fragment Method
function Message() {

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'Ethiopia'
    ]

    return (

        <>

            <div className="MainNav"></div>

            <div className="card">

                <h1>List</h1>

                    {items.length === 0 && <p>No Items Here</p>}

                    <ul className="list-group">

                          { items.map ( (items) => (
                             
                             <li className="list-group-itme" key={items} onClick={() => console.log (items)}>{items}</li>

                          ))}

                    </ul>


            </div>

        </>

    )
}

export default Message;