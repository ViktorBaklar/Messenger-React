import styles from './modal.module.css'
// import Input from '../UI/input/input'
import Button from '../UI/button/button'

const Modal = ({ open, children, onClose }) => {
    const hendleClose =(event) => {
        const { target, currentTarget } = event
        if (target === currentTarget) {
            onClose && onClose(false)
        }
    }
    return (
        open &&
        <section className={styles.modal} onClick={hendleClose}>
            <div className={styles.modalInner}>
                <Button className={styles.closeBtn} onClick={hendleClose}>X</Button>
                {children}
            </div>
        </section>
    )
}

export default Modal