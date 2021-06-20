# [Afancy](https://www.afancy.org) - a fantastic framework for designer

# Guide
## Notification
   ``` html
  <ntfc ref='ntfc' />
  ```
  ``` ts
  this.$refs.ntfc.open({
    content: '',
    style: {
      '--background-color': 'blue' // change the background and shadow color
      // feel free to add CSS. note: css declaration must be separated by comma (,). eg.
      // 'border-radius': '15px',
      // 'color': 'white'
    }
  });
  ```

## Cursor
  ``` css
  .cursor-none
  .cursor-auto
  .cursor-default
   ================
  .cursor-text
  .cursor-pointer
   ================
  .cursor-wait
  .cursor-progress
   ================
  .cursor-move
  .cursor-copy
  .cursor-col-resize
   ================
  .cursor-zoom-in
  .cursor-zoom-out
   ================
  .cursor-help
  .cursor-not-allowed
  ```

  ### Thank you very much
