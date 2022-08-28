import { Component } from "react";
import Input from '../UI/input/input'
import Button from '../UI/button/button'
import styles from './addContactForm.module.css'

class AddContactForm extends Component {
    state = {
        name: '',
        avatar: 'https://i.pravatar.cc/30?20',
        messageDate: new Date().toString()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { onSubmit } = this.props

        onSubmit && onSubmit({ ...this.state })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState(() => ({
            [name]: value
        }))
    }

    render() {
        return (
            <form className={styles.addForm} onSubmit={this.handleSubmit}>
                <Input
                    type='text' 
                    name='name'
                    className={styles.msgInput}
                    placeHolder='Type name of new contact' 
                    onChange={this.handleChange}
                />
                <Button className={styles.formBtn} type='submit'>SAVE</Button>
            </form>
        )
    }
}

export default AddContactForm