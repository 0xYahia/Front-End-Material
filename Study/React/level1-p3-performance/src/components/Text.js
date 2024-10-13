const Text = ({children}) => {
  console.log('text component');
  return (
    <>
    {children ?
      <p>{children}</p> : <p>no text</p>
    }
    </>
  );
}

export default Text;