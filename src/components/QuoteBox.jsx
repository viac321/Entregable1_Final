import "./styles/QuoteBox.css"


const QuoteBox = ({quote, handleChangeQuote}) => {
    const {phrase, author} = quote;
  return (
    <article className="quotebox">
        <h1 className="quotebox_title">Frases célebres</h1>
        <div>
            <div className="quotebox_box">
               <p> {phrase} </p>
            </div>   
        </div>
        <button className="quotebox_btn" onClick={handleChangeQuote}>                
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYlJREFUSEu11L9LV1EYx/GXQgQNkiTlPyBUg7QGtrWEtDQ5OjTp0hIVQT8cGsI9I2cnqWioJNpqaROh1oaGgjJDAgnCeOBcOF2+13uO6IELF+55Pu/zPJ/PuUMOeQ0dsr79AO4hnqJVCwjhu5QfrAbQiMfJi+tKN+biAXiPV3iM73vNar+ARvMHruJ5F2QvwCwmcDsV512cxR3MpG/TeDkI0gUYx2ccxQW8a0Gauoe4jm84g59tSBfgAW5hDZewmxXmMY368OM8biCA/60uwMd0oot42xP4y3iBdZwrBfzBEYxiqwcwgl/YRrwXdfAbx3ACmz2A42n2VYBPOI2aEW1gsrSDxuTXyeSmLn4TC5npwylhYXKYf78UcBJfkg+LuIm/+IpnmEuQ6PANdlIoItpFHsSmuKFP0u5o/xpWcApLGSSi+QGrNRet2XsFyylN7foc0pmDkn/RWJptGDiVKR0YID9deBAjeoT51g0f2EVJB23A01LxKKwFtGPacwfrAb2CNTGtFhtU8A89mU4ZqBN+6AAAAABJRU5ErkJggg=="/>
            </button>
            <span className="quote_author"> {author} </span>

    </article>
    
  )
}
export default QuoteBox