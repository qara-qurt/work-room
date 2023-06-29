import React, { FC, useState } from 'react'
import style from './Stepper.module.scss'
import cn from 'classnames'
import { BsCheck } from 'react-icons/bs'
import { IStepper } from './Stepper.interface'

export const steps = [
	'Valid your phone',
	'Tell about yourself',
	'Tell about your company',
	'Invite team Members'
]

const Stepper: FC<IStepper> = ({ currentStep, complete }) => {
	return (
		<div className={style.wrapper_stepper}>
			{steps?.map((step, idx) => (
				<div
					key={idx}
					className={cn(style.step, {
						[style.actived]: currentStep === idx + 1,
						[style.completed]: idx + 1 < currentStep || complete
					})}
				>
					<span
						className={cn(style.step_item, {
							[style.active]: currentStep === idx + 1,
							[style.complete]: idx + 1 < currentStep || complete
						})}
					>
						{idx + 1 < currentStep || complete ? (
							<BsCheck size={28} color='#3F8CFF' />
						) : (
							''
						)}
					</span>
					<p>{step}</p>
				</div>
			))}
		</div>
	)
}

export default Stepper
