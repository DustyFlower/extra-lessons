import {FC} from 'react';
import {FilterValuesType} from '../../App';

type PropsType = {
    name: string
    onClick: () => void
}

export const Button: FC<PropsType> = ({name, onClick}) => {
    const onClickHandler = () => onClick()
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}