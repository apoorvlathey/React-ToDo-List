import React from 'react'

export default function About() {
  return (
    // Fragment like a ghost element. Doesn't show in Dom, needed in jsx
    <React.Fragment>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus rerum fuga nihil ipsam magni neque ex perferendis sequi possimus dolorum accusamus quisquam corporis placeat porro soluta tempora, velit non!</p>
    </React.Fragment>
  )
}
