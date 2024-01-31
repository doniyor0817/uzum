import React from 'react'
import './Footer.css'
import { FaGooglePlay, FaApple, FaInstagram, FaTelegram, FaYoutube, FaFacebookSquare } from "react-icons/fa"; 


function Footer() {
  return (
    <div className='container'>
        <div className="footer">
            <div className="footer__top">
                <ul className='footer__collection'>
                    <h4>Biz haqimizda</h4>
                    <li>Topshirish punktlari</li>
                    <li>Vakansiyalar</li>
                </ul>
                <ul className='footer__collection'>
                    <h4>Foydalanuvchilarga</h4>
                    <li>Biz bilan bog'lanish</li>
                    <li>Savol-Javob</li>
                </ul>
                <ul className='footer__collection'>
                    <h4>Tadbirkorlarga</h4>
                    <li>Uzumda soting</li>
                    <li>Sotuvchi kabinetiga kirish</li>
                </ul>
                <div className="footer__collection">
                  <h4>Ilovani yuklab olish  </h4>
                  <h5><FaApple/> AppStore <FaGooglePlay/> GooglePlay</h5>
                  <h4>Uzum ijtimoiy tarmoqlarda</h4>
                  <div className="icons">
                    <FaInstagram/>
                    <FaTelegram/>
                    <FaYoutube/>
                    <FaFacebookSquare/>
                  </div>
                </div>
            </div>

          <div className="footer__bottom">
            <div className="collection">
            <h5>Maxfiylik kelishuvi Foydalanuvchi kelishuvi</h5>
            </div>
            <div className="colletion2">
              <h5>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</h5>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Footer ;