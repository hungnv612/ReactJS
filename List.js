import React from "react";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "hung",
                        "age": 20
                    },
                    {
                        "id": 2,
                        "name": "nam",
                        "age": 30
                    },
                    {
                        "id": 3,
                        "name": "nu",
                        "age": 40
                    }
                ]
        }
    };

        handleDelete = (item) => {
            const newsId = item.id;
            console.log(newsId);
        }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <td>STT</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>UPDATE</td>
                    <td>DELETE</td>
                    {this.state.data.map((person,index) =>
                        <tr>
                            <td>{index+1}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td><button>update</button></td>
                            <td><button>delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default List
