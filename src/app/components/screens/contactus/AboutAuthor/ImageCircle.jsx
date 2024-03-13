function ImageCircle({ ismobile = false }) {
  return (
    <>
      {ismobile ? (
        <svg width="193" height="192" viewBox="0 0 193 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="96.8293" cy="96.0976" r="95.9023" fill="#FBEA55"/>
        </svg>
        

      ) :
        (
          <svg width="348" height="348" viewBox="0 0 348 348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="174" cy="174" r="174" fill="#FBEA55" />
          </svg>

        )
      }
    </>

  );
}

export default ImageCircle;