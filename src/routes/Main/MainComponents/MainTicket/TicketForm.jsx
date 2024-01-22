import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import s from "./MainTicket.module.css"
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

const Form = (props) => {
	const dispatch = useDispatch();

	const {
		register,
		formState: {
			errors,
			isValid,

		},
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur'
	});

	const [dataLoaded, setDataLoaded] = useState(false);


	const onSubmit = (data) => {
		dispatch({ type: 'GetFormData', formData: data })
			reset();
			reset({
				phone: '', 
			});
	}

	useEffect(()=>{

	})


	return (
		<>
			<form style={{display: 'block'}} onSubmit={handleSubmit(onSubmit)}>

				<div className={s.main_ticket__form_wrapper}>
					<div className={`${s.main_ticket__form_fullName} ${s.inputStyle}`}>

						<input {...register('fullName', {
							required: 'Это поле обязательно к заполнению',
							minLength: {
								value: 3,
								message: 'Min length 3'
							}

						})} placeholder="Full name" />

						{errors?.fullName && <p>{errors?.fullName.message}</p>}

					</div>

					<div className={`${s.main_ticket__form_phone} ${s.inputStyle}`}>
						<InputMask
							mask="+7 (999) 999-99-99"
							maskChar="_"
							{...register('phone', {
								required: 'Это поле обязательно к заполнению',
								pattern: {
									value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
									message: 'Введите корректный номер телефона'
								}
							})}
						
							type="tel"
							placeholder="Phone"
						/>

						{errors?.phone && <p>{errors?.phone.message}</p>}
					</div>

					<div className={`${s.main_ticket__form_email} ${s.inputStyle}`}>

						<input
							{...register('email', {
								required: 'Это поле обязательно к заполнению',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Введите корректный email'
								}
							})}
							placeholder="Email"
						
						/>

						{errors?.email && <p>{errors?.email.message}</p>}
					</div>

					<div className={s.main_ticket__form_checkbox}>

						<input {
							...register('usersAgreement', {
								required: true
							})
						} type="checkbox" defaultChecked /> Согласен с условиями пользовательского соглашения и правилами посещения музея.

					</div>
					<div className={s.main_ticket__form_checkbox}>
						<input  {
							...register('recieveAgreement')
						} type="checkbox" /> Согласен получать информационную рассылку.
					</div>

					<div className={s.main_ticket__form_sum}>
						<p>Сумма:  <span>{props.sum}</span> руб.</p>
					</div>
					<p className={s.main_ticket__error}>{props.formError ?? ''}</p>
					<p className={s.main_ticket__success}>{(props.formSuccess && !props.formError) ? props.formSuccess : ''}</p>
					<button disabled={!isValid} className={s.main_ticket__form_submit} type="submit">Забронировать</button>
				</div>

			</form>
		</>
	)
}

export default Form;