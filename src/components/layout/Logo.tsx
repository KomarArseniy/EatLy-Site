import logoUrl from '../../assets/icons/Logo.svg';
import { SECTION_IDS } from '../../data/navigation';
import { cn } from '../../utils/cn';

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <a href={`#${SECTION_IDS.home}`} className={cn(className, 'logo')}>
            <img className="logo__image" src={logoUrl} alt="" width={111} height={42} />
        </a>
    );
}
