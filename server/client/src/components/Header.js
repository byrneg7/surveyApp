import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return [
                    <li key="a"><Payments /></li>,
                    <li key='b' style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key='c'><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className='left brand-logo'
                    >
                        Emaily
                     </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) { //es6 desctucturing to pull the auth property off the state this function automatically gets passed
    return { auth };
}

export default connect(mapStateToProps)(Header);

