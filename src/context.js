import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "John@gmail.com",
        phone: "555444-3412"
      },
      {
        id: 2,
        name: "Homie Know",
        email: "Homie@gmail.com",
        phone: "23553-4444234"
      },
      {
        id: 3,
        name: "Kerry Doe",
        email: "Kerry@gmail.com",
        phone: "5534345444-11"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
