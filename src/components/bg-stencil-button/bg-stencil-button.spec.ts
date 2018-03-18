import { flush, render } from '@stencil/core/testing';
import { BgStencilButton } from './bg-stencil-button';

describe('bg-stencil-button', () => {
  it('should build', () => {
    expect(new BgStencilButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [BgStencilButton],
        html: '<bg-stencil-button></bg-stencil-button>'
      });
    });

    it('setting text property on the element works', async () => {
      element.text = 'button-text';
      await flush(element);
      expect(element.textContent.trim()).toEqual('button-text');
    });

    it('setting className property on the element works', async () => {
      element.className = 'btn btn-primary';
      await flush(element);
      console.info(element)
      expect(element.className).toEqual('btn btn-primary');
    });

  });
});