import styled from "styled-components";

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
padding: 10px 0;
`

export const Category = styled.div<{color: String}>`
display: inline-block;
padding: 5px 10px;
border-radius: 5px;
color: #FFF;
background-color: ${props=> props.color};
`

export const Value = styled.div<{expense: Boolean}>`
font-weight:bold;
color: ${props=> props.expense ? 'red' : 'green'};
`