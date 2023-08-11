import logo from '../../assets/Logo.png';

import styles from './logo.module.scss';

function Logo() {
  const { aviasalesLogo } = styles;
  return (
    <div className={aviasalesLogo}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
