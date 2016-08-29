import React from 'react';

class PageComponent extends React.Component {
  render() {
    return (
      <div className={this.props.heading}>
        {this.props.children}
      </div>
    );
  }
}

PageComponent.defaultProps = {
  heading: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

export default PageComponent;
