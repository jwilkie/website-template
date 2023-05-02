import useClickOutside from '../../hooks/useClickOutside';
import AsideNav from './AsideNav';

import styles from './Aside.module.css';

export default function Aside({state, data}) {
    const [isOpen, setOpen] = state;

    const toggleAside = () => {
        if (window.innerWidth < 1200) {
            setOpen((isOpen) => !isOpen);
        }
    };

    const closeAside = () => {
        if (isOpen) {
            toggleAside();
        }
    };

    const asideRef = useClickOutside(closeAside);

    return <>
        <aside ref={asideRef} className={styles.aside + (isOpen ? ' ' + styles.open : '')}>
            <AsideNav pages={data.pages} groups={data.groups} sections={data.sections} currentPage={data.page} currentSection={data.section} />
        </aside>

        <button className={styles.button} onClick={toggleAside}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
        </button>
    </>
}
