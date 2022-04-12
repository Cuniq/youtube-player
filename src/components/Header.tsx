import React from 'react';
import SearchBar from './SearchBar';
import logo from '../logos/logo512.png';
import './Header.css';

export interface HeaderProps {
  onSearchSumbit: (t: string) => void;
}

export default class VideoDetails extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="text-center p4 header">
        <img className="header__icon" src={logo} alt="logo" />
        <SearchBar onSearchSumbit={this.props.onSearchSumbit} />
      </div>
    );
  }
}
