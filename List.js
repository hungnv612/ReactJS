import React from "react";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            name: '',
            age: 0,
            action: 'ADD ITEM',
            people: [
                    {
                        name: "hung",
                        age: 20
                    },
                    {
                        name: "nam",
                        age: 30
                    },
                    {
                        name: "nu",
                        age: 40
                    }
                ]
        }
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
    };

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    addItem = () => {
        if (!this.state.people.find(item => item.name === this.state.name)) {
            this.setState({
                people: [
                    ...this.state.people,
                    {name: this.state.name, age: this.state.age}
                ],
                name: "",
                age: ""
            })
        }
    }
    deleteItem = (name) => this.setState({
        people: this.state.people.filter(item => item.name !== name)
    })
    edit = (item, index) => {
        this.setState({
            action: 'UPDATE ITEM',
            name: item.name,
            age: item.age,
            index: index
        })
    }

    updateItem = () => {
        let data = this.state.people;
        data.map((item, index) => {
            if (this.state.index === index) {
                item.name = this.state.name;
                item.age = parseInt(this.state.age);
            }
        })

        this.setState({
            laptop: data,
            name: '',
            age: '',
            action: 'ADD ITEM'
        })
    }

    render() {
        return (
            <div>
                <div >
                    <h1>{this.state.action}</h1>
                    <div>
                        <label>Name</label>
                        <input type="text" name="" onChange={this.changeName}
                               value={this.state.name}/>
                    </div>
                    <div>
                        <label>age</label>
                        <input type="text" name="" onChange={this.changeAge}
                               value={this.state.age}/>
                    </div>
                    <div >
                        <button type="button"
                                onClick={this.state.action === 'ADD ITEM' ? this.addItem : this.updateItem}>Add
                        </button>
                    </div>
                </div>
                <table>
                    <tbody>
                    <td>STT</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>UPDATE</td>
                    <td>DELETE</td>
                    {this.state.people.map((person,index) =>
                        <tr>
                            <td>{index+1}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>
                                <button
                                        onClick={() => this.edit(person, index)}>Edit
                                </button>
                            </td>
                            <button
                                    onClick={() => this.deleteItem(person.name)}>Delete
                            </button>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default List
