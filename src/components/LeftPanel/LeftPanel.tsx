import React from 'react';
import styles from './LeftPanel.module.scss';

const LeftPanel: React.FC = () => {
  return (
    <aside className={styles.leftPanel}>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </aside>
  ); 
};

export default LeftPanel;