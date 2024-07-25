import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize() {
  const [value, setValue] = React.useState(3);

  return (<>
    <section className="contact-section">
        <div className="contact-intro">
            <h2 style={{fontSize:'2.5rem'}} className="contact-title">Leave a Review</h2>
            <p className="contact-description">
            Thanks for working with me! Please leave a rating and let me know your thoughts.
            </p>
        </div>
    <div>
    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
    <Stack spacing={1}>
      <Rating name="stars" onChange={(event, newValue) => {setValue(newValue);}} value={value} size="large" />
    </Stack>

            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
            <input type="hidden" name="from_name" value="My Website" />

            <div className="form-group-container">
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" name="name" className="form-input" placeholder="Your name" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label">Comments</label>
                <textarea className="form-textarea" id="message" name="message" placeholder="Your comments"></textarea>
            </div>
            </div>
            <button className="form-submit contact-btn" type="submit">SUBMIT</button>
    </form>
    </div>
    </section>
    </>
  );
}
