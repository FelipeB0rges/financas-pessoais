import * as C from "./styles"
import { categories } from "../../data/categories";


export const ContentArea = () => {

    return (
        <C.Container>
            <C.Value type="number" placeholder="Valor">

            </C.Value>
            <C.Select>
            {categories['food']['color']}
            </C.Select>
        </C.Container>
    )
}