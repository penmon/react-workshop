import './SourceTypeFilter.scss'
import _ from 'lodash';
import React, { Component } from 'react';

export default class SourceTypeFilter extends Component {

  render() {
    return (
      <section className={this.props.className}>
        <div className="col-md-6">
          {_.map(this.props.sourceTypes, (sourceType) => this.renderFilter(sourceType))}
        </div>
      </section>
    );
  }

  renderFilter(sourceType) {
    const className = this.props.selected === sourceType.id ?
      `source-type__badge badge badge-${sourceType.classModifier} selected` :
      `source-type__badge badge badge-${sourceType.classModifier}`;
    return (
      <span
        key={sourceType.id}
        className={className}
        onClick={() => this.onFilterClick(sourceType.id)}>
        {sourceType.name.toUpperCase()}
      </span>
    );
  }

  onFilterClick(id) {
    if (id === this.props.selected) return;
    if (typeof this.props.onChanged === 'function') {
      this.props.onChanged(id);
    }
  }

}
