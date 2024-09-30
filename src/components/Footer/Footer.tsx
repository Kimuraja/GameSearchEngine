import './_Footer.scss'

const Footer = () => {
  return (
    <section className='container-fluid'>
      <div className="row">
        <div className="col-12 p-0">
          <div className="footer">
            <div className="footer__textarea">
              <h2 className="footer__heading">Looking for more recommendations ?</h2>
              <p className="footer__text">Sign in to view personalized recommendations</p>
              <button className="footer__button">Sign In</button>
              <p className="footer__sign-up">Or <a className='footer__link'>sign up</a> and join for free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer