
// Use Fragment Method
function Message() {

    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'Ethiopia'
    ]

    items = [];

    let Maping = items.map (items => <li key={items}>{items}</li>)

        if (items.length === 0)
            return <p>No Items Here</p>

    return (

        <>

            <div className="MainNav">



            </div>

            <div className="card">

                <ul className="list-group list-group-flush">

                    {Maping}

                </ul>

            </div>

        </>

    )
}

export default Message;