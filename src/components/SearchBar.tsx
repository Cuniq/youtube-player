import React from 'react';
import SearchSvg from './svg/SearchSvg';
import './SearchBar.css';
/*
 * This is the easiest way I've found to create DefaultProps with type check without breaking anything (I think)
 * 1) Define defaultProps interface
 */
interface SearchBarDefaultProps {
  inputPlaceholder: string;
}

/*
 * Make your component extend DefaultProp
 */
export interface SearchBarProps extends SearchBarDefaultProps {
  onSearchSumbit: (t: string) => void;
}

export interface SearchBarState {
  inputValue: string;
  hasFocus: boolean;
}

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  //Type is not mandatory here, but it helps ¯\_(ツ)_/¯
  static defaultProps: SearchBarDefaultProps = {
    inputPlaceholder: 'Please input a query',
  };

  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      inputValue: '',
      hasFocus: false,
    };
  }

  handleOnInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      inputValue: event.currentTarget.value,
    });
  };

  handleOnFocus: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.setSelectionRange(0, event.currentTarget.value.length);

    this.setState({
      hasFocus: true,
    });
  };

  handleOnBlur: React.FormEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      hasFocus: false,
    });
  };

  handleOnSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSearchSumbit(this.state.inputValue);
  };

  render() {
    return (
      <form
        className="center search-bar"
        onSubmit={this.handleOnSumbit}
        {...(this.state.hasFocus && { 'has-focus': 'true' })}>
        <div className="center input-icon">
          <SearchSvg className="search-bar__svg" />
          <input
            value={this.state.inputValue}
            placeholder={this.props.inputPlaceholder}
            onInput={this.handleOnInput}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            type="text"
            className="search-bar__input"
          />
        </div>
        <button className="search-bar__button text-center" type="submit">
          <SearchSvg className="search-bar__button-svg" />
        </button>
      </form>
    );
  }
}
