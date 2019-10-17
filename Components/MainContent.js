import React from 'react';
import ToDoItem from "./ToDoItem"
import todosData from "./TodoData"
import ContactCardInfo from "./ContactCardInfo"
import ContactCard from "./ContactCard"

class MainContent extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      contacts: ContactCardInfo
    }
  }

  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours >= 15 && hours < 21) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    let h1Styles = {
      color: "#000",
      padding: 25,
      fontSize: 50
    }

    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
    const contactCard = this.state.contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)

    return (
      <div>
        <h1 style={h1Styles}>Good {timeOfDay}!</h1>
        <div className="todo-list">
          {todoItems}
        </div>

        <div className="contacts">
          {contactCard}
        </div>
      </div>
    )
  }
};

export default MainContent;