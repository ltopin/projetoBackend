import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div>
//         <Navbar color="dark" dark expand="sm" className="mb-5">
//           <Container>
//             <NavbarBrand href="/">ShoppingList</NavbarBrand>
//             <NavbarToggler onClick={this.toggle} />
//             <Collapse isOpen={this.state.isOpen} navbar>
//               <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="https://github.com/ltopin">GITHUB</NavLink>
//                 </NavItem>
//               </Nav>
//             </Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default AppNavBar;
