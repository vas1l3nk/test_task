import './styles.scss';
import { FC, useState } from 'react';

interface ToggleNoteCheckboxProps {
    checked?: boolean;
    onToggle: (checked: boolean) => void;
}

const ToggleNoteCheckbox: FC<ToggleNoteCheckboxProps> = ({ checked = false, onToggle }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onToggle(newChecked);
    };

    return (
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
        />
    );
};

export default ToggleNoteCheckbox;
