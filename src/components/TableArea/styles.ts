import styled from "styled-components";

export const Table = styled.table`
width: 100%;
background-color: white;
padding: 20px;
box-shadow: 0px 0px 5px #CCC;
border-radius: 10px;
`


export const TableHeadColumn = styled.th<{width?: Number}>`
 width: ${props => props.width ? `${props.width}px` : 'auto'};
 padding: 10px 0;
 text-aling: left;

`