import { cn } from '../../utils/cn';
import { Icon } from './Icon';

interface ExpandableControlsProps {
    isExpanded: boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

/** Кнопки «Read More» / «Roll Up» для раскрываемого блока (.expandable-content). */
export function ExpandableControls({ isExpanded, onExpand, onCollapse }: ExpandableControlsProps) {
    return (
        <>
            <button
                type="button"
                className={cn(
                    'button expandable-content__button expandable-content__button--open',
                    isExpanded && 'is-expanded',
                )}
                onClick={onExpand}
            >
                <Icon name="bottom-arrow">Read More</Icon>
            </button>
            <button
                type="button"
                className={cn(
                    'button expandable-content__button expandable-content__button--close',
                    isExpanded && 'is-expanded',
                )}
                onClick={onCollapse}
            >
                <Icon name="top-arrow">Roll Up</Icon>
            </button>
        </>
    );
}
