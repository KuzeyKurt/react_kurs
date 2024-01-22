import s from "./MainTicket.module.css"
import { useDispatch } from "react-redux";

const CategoryType = (props) => {
	const dispatch = useDispatch();
	let categTitle = props.title;
	
	let reduceQuantity = () =>{
		categTitle = props.title;
		dispatch({type: 'SetCategQuantity', changeQuantity: false, categTitle})
		
	}

	let addQuantity = () =>{
		categTitle = props.title;
		dispatch({type: 'SetCategQuantity', changeQuantity: true, categTitle})
	}
	
	return (
		<>
			<div className={s.main_ticket__categories_type}>
				<div className={s.main_ticket__categories_type_name}>
					<p>
						{props.title}
					</p>
				</div>
				<div className={s.main_ticket__categories_type_pqs}>
				<div className={s.main_ticket__categories_type_price}>
					<p>
						{props.cost}
					</p>
				</div>
				<div className={s.main_ticket__categories_type_quntity_selection}>
					<div onClick={reduceQuantity}>
					<a ></a>
					</div>

					<div className={s.main_ticket__categories_type_quntity_selection_quant}>
						<p>{props.quantity}</p>
					</div>
					<a onClick={addQuantity}>+</a>
				</div>

				<div className={s.main_ticket__categories_type_sum}>
					<p>{props.sum}</p>
				</div>
				</div>
			</div>
		</>
	)
}
export default CategoryType;