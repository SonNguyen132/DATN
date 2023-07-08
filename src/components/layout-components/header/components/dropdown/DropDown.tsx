import React, {useRef} from 'react';
import cn from "classnames";
import styles from './DropDown.module.scss';
import {useOnClickOutside} from "usehooks-ts";
import {useActions} from "_/useActions";
import {useTypedSelector} from "_/useTypedSelector";
import {FiChevronDown, FiChevronUp, FiFilm, FiPlay, FiSearch, FiTv, FiVideo} from 'react-icons/fi';

interface Option {
    icon?: JSX.Element;
    label: string;
    value: string;
}

const options = [
    {icon: <FiSearch/>, label: 'All', value: "ALL"},
    {icon: <FiFilm/>, label: 'Movies', value: "FILM"},
    {icon: <FiTv/>, label: 'Series', value: "TV_SERIES"},
    {icon: <FiPlay/>, label: 'Mini Series', value: "MINI_SERIES"},
    {icon: <FiVideo/>, label: 'Show', value: "TV_SHOW"},
];

export const DropDown: React.FC = () => {
    const {currentOption, isOpen} = useTypedSelector(state => state.dropDownReducer);
    const {changeCurrentOption, toggleMenu} = useActions();
    const divRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(divRef, () => toggleMenu(false))

    const toggle = () => toggleMenu(!isOpen);

    const onOptionClicked = (option: Option) => () => {
        changeCurrentOption({label: option.label, value: option.value});
        toggle();
    };

    return (
        <div className={styles.dropdown_main} onClick={toggle}>
            <div className={styles.dropdown_header}>
                {currentOption.label}
                {isOpen ? <FiChevronUp/> : <FiChevronDown/>}
            </div>
            {isOpen && (
                <div ref={divRef} className={styles.dropdown_list_container}>
                    <ul className={styles.dropdown_list}>
                        {options.map((option: Option) => {
                            const isCurrentOption = currentOption.label === option.label;

                            return (
                                <li className={styles.dropdown_list_item} onClick={onOptionClicked(option)}
                                    key={option.label}>
                                    <span
                                        className={cn(styles.option_icon, isCurrentOption && styles.active_item)}>{option.icon}</span>
                                    <span
                                        className={cn(styles.option_label, isCurrentOption && styles.active_item)}>{option.label}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;
