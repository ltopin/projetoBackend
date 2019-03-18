import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "ovos" },
      { id: uuid(), name: "Leite" },
      { id: uuid(), name: "Farinha" },
      { id: uuid(), name: "Manteiga" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginTop: "5rem", marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Insira o Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          ADD ITEM
        </Button>
        <ListGroup>
          <ListGroup>
            <TransitionGroup className="shoppingList">
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={800} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        this.setState(state => ({
                          items: state.items.filter(item => item.id !== id)
                        }));
                      }}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
