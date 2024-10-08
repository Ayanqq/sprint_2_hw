import React from 'react'
import downicon from '../../../../assets/down_icon.png'
import upicon from '../../../../assets/up_icon.png'
import noneicon from '../../../../assets/58926.png'

// добавить в проект иконки и импортировать
const downIcon = downicon
const upIcon = upicon
const noneIcon = '[--]'

// todo:Импортировать просто картинку иконки в эти переменные ?

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}


export const pureChange = (sort: string, down: string, up: string) => {

    return sort === down ? up : sort === up ? '' : down

    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // console.log('xd')


    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
