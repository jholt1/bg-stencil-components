import { Component, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'bg-stencil-button',
  styleUrl: 'bg-stencil-button.css',
  shadow: true
})
export class BgStencilButton {

  @Prop() text: string;
  @Prop() className: string;

  @Event() onClick: EventEmitter;
  @Listen('click')
  onClickHandler() {
    console.info('onClickHandler; button was clicked.');
    this.onClick.emit();
  }

  render() {
    const classNames = `btn btn-primary {this.className}`;
    return (
      <div>
        <button
          id="myButton"
          type="button" 
          class={classNames}
        >
          {this.text}
        </button>
      </div>
    );
  }
}
