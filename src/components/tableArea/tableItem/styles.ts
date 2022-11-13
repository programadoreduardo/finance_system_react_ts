import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
padding: 10px
`;

export const Category = styled.div<{ color: string }>`
display:inline-block;
padding: 5px 10px;
border-radius: 5px;
color:#FFF;
background-color: green;
`;

export const Value = styled.div<{ color: string }>`
color: ${props => props.color}
`;