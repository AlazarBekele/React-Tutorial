
// Use Fragment Method
function Message() {

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'Ethiopia'
    ]

    let Maping = items.map (items => <li key={items}>{items}</li>)

    return (

        <>

            <div className="MainNav"></div>

            <div className="card">

                <h1>List</h1>

                    {items.length === 0 && <p>No Items Here</p>}

                    <ul className="list-gruop">

                        <li className="list-group-item">{Maping}</li>

                    </ul>


            </div>

        </>

    )
}

export default Message;