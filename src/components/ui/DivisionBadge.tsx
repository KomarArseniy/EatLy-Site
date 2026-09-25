import type { Badge } from '../../types';

export function DivisionBadge({ label, variant }: Badge) {
    return <span className={`division-badge division-badge--${variant}`}>{label}</span>;
}
