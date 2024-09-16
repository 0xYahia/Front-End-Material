// dialog
// const updateButton = document.getElementById('updateDetails')
// const cancelButton = document.getElementById('cancel')
// const dialog = document.getElementById('favDialog')
// dialog.returnValue = 'favAnimal'

// function openCheck(dialog) {
//   if (dialog.open) {
//     console.log('Dialog open')
//   } else {
//     console.log('Dialog closed')
//   }
// }

// // Update button opens a modal dialog
// updateButton.addEventListener('click', () => {
//   dialog.showModal()
//   openCheck(dialog)
// })

// // Form cancel button closes the dialog box
// cancelButton.addEventListener('click', () => {
//   dialog.close('animalNotChosen')
//   openCheck(dialog)
// })

// popover

const btn = document.querySelector('button')

const popover = document.querySelector('#tooltip')

btn.addEventListener('click', (e) => {
  popover.showPopover()
})

btn.addEventListener('toggle', (e) => {
  console.log(e.newState)
  popover.showPopover()
})
