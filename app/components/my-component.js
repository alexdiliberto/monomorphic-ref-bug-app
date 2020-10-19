import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

class MyComponentComponent extends Component {
  get notOpen() {
    return !this.args.isOpen;
  }
}

export default setComponentTemplate(
  hbs`
    <strong>component:my-component</strong><br>
    this.isOpen={{@isOpen}}<br>
    this.notOpen={{this.notOpen}}<br><br>

    <button ...attributes>
      <span>toggle <code>isOpen</code></span>
    </button>
  `,
  MyComponentComponent
);
