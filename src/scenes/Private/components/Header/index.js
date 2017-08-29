import { withRouter } from 'react-router-dom'

/** Components **/
import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';

const Header = ({ history, user }) => (
  <div className={styles.Header}>
    <div className={styles.HeaderLogo}>
      <div className={styles.HeaderLogoImage} />
    </div>

    <div className={styles.HeaderAccounts}>
    </div>

    <div className={styles.HeaderSearch}>
      <Button
        className={styles.HeaderSearchButton}
        color={Button.color.CUSTOM}
        onClick={() => history.push('/private/search/users')}
      >
        <Icon type={Icon.TYPE.SEARCH} />
      </Button>
    </div>

    {user && (
      <div className={styles.HeaderUser}>
        <Button
          className={styles.HeaderUserButton}
          color={Button.color.CUSTOM}
          onClick={() => history.push(`/private/users/${user.__address}`)}
        >
          <Avatar
            className={styles.HeaderUserAvatar}
            src={user.photo}
          />
        </Button>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  user: state.entities.users[state.services.session.userId]
});

export default connect(mapStateToProps)(withRouter(Header));

// <HeaderAccount amount="10 000" currency="TIE"/>
//   <HeaderAccount amount="100.28" currency="ETH"/>
//   <HeaderAccount amount="100" currency="HMQ"/>
