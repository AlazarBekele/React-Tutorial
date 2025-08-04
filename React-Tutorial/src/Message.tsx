import { Fragment } from "react/jsx-runtime";

// Use Fragment Method
function Message() {
    return (

        <Fragment>

            <div className="MainNav">



            </div>

            <div className="card">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>

            </div>

        </Fragment>

    )
}

export default Message;