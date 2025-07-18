import { type FC } from 'react'
import styles from './PrioritiesSelect.module.scss'
import ButtonsParser from '@features/Form/funcs/models/ButtonParser'
import { getColroFromPriorities } from '@features/lib'
import cn from 'classnames'

const options = ["High", "Medium", "Low"]

type PrioritiesProps = {
    values: string[];
    action: () => void;
    priorites: string
}

const PrioritiesSelect:FC<PrioritiesProps> = ({priorites, action}) => {
  return (
    <div className={styles.prioritiesChoice}>
        <ButtonsParser
			aria-label="priorites button group"
			values={options}
			action={action}
			template={(value, onClick) => (
				<button
					aria-label={value}
					type="button"
					style={{
						backgroundColor: `${getColroFromPriorities(
							value
						)}`,
					}}
					className={cn(
						styles.addForm__prioritesButton,
						{
							[styles.activeButtonPriorites]:
								priorites === value,
						}
					)}
					onClick={onClick}
				></button>
			)}
		/>
      
    </div>
  )
}

export default PrioritiesSelect