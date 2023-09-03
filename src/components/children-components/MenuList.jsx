/* eslint-disable react/prop-types */
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  padding-left: 1.2rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 600px) {
    padding: 0 2.8rem 0 0;
  }
`;
const Link = styled.a`
  text-decoration: none;
  &:link,
  &:visited {
    color: black;
  }
  &:hover {
    color: var(--moderate-cyan);
  }
  &:active {
    color: var(--dark-cyan);
  }
  @media (min-width: 600px) {
    &:link,
    &:visited {
      color: white;
    }
    &:hover {
      color: var(--moderate-cyan);
    }
    &:active {
      color: var(--dark-cyan);
    }
  }
`;

const MenuList = ({ list, toggleMenu }) => {
  return (
    <ListItem>
      <Link href={`#${list}`} onClick={toggleMenu}>
        {list.slice(0, 1).toUpperCase() + list.slice(1).replace("-", " ")}
      </Link>
    </ListItem>
  );
};

export default MenuList;
