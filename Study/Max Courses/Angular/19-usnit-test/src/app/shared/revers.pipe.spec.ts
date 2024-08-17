import { ReversePipe } from "./revers.pipe";



describe('ReversPipe', () => {
  it('should revers input string', () => {
    const reversePipe: ReversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
