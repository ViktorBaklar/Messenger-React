import { Component } from "react"
import Input from '../UI/input/input'
import styles from './contactsBar.module.css'
import {ReactComponent as ReactLogo} from '../../svg/search.svg'

// const Header = ({ filter, onChange }) => {
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            avatar: 'https://i.pravatar.cc/30?20',
            messages: [
                {
                    messageDate: new Date(),
                    message: "",
                    myMessage: true
                }
            ]
        }
    };
      
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState(() => ({ [name]: value }));
    };
      
    handleSubmit = event => {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit && onSubmit({ ...this.state })
        this.reset();
    };
      
    reset = () => {
        this.setState({ name: '' });
    };
      
    render() {
        return (
            <div className={styles.header}>
                <img className={styles.userAvatar} src='https://i.pravatar.cc/30?10' alt='user'/>
                <form className={styles.search} onSubmit={this.handleSubmit}>
                    <ReactLogo className={styles.searchIcon}/>
                    <Input 
                        // className={styles.search} 
                        type='text' 
                        name='filter'
                        placeHolder='Search or start new chat' 
                        value={this.props.filter} 
                        onChange={this.props.onChange}
                    />
                </form>
            </div>
        )
    }
}

export default Header