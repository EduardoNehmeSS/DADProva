import style from './card.module.css'
import React, { useState } from 'react';
import imagem from '../../assets/certo.png'
import imagemE from '../../assets/errado.png'

function Card({titulo, sec1, sec2, sec3, sec4, preco, }){
    return(
        <div className={style.card}>
                <div className={style.texts}>

                    <h1 className={style.title}>{titulo}</h1>

                        <div className={style.conjunto}>
                            <img src={imagem}/>
                            <h1 className={style.sectrue}>PNG templates</h1>
                        </div>
                        <div className={style.conjunto}>
                            <img src={imagemE}/>
                            <h1 className={style.secfalse}>Figma responsive<br/>
                            components</h1>
                        </div>
                        <div className={style.conjunto}>
                            <img src={imagemE}/>
                            <h1 className={style.secfalse}>Constant updates</h1>
                        </div>
                        <div className={style.conjunto}>
                            <img src={imagemE}/>
                            <h1 className={style.secfalse}>Custom templates</h1>
                        </div>
                    <h1 className={style.preco}>{preco}</h1>
                    <h1 className=''>per mouth</h1>
                    <h1 className={style.cc}> Try now</h1>
                </div>
        </div>
    )
}



// function Card({imgPath, title, subtitle, price, isPromo}) {
//     return (
//         <div className={styles.card}>
//             <div className={styles.cardImage}>
//                 <img src={imgPath}/>
//             </div>
//             <div className={styles.titles}>
//                 <h1 className={styles.title}>{title}</h1>
//                 <h2 className={styles.subtitle}>{subtitle}</h2>
//                 <h1 className={styles.price}>R${price}</h1>
//             </div>
//             <div className={styles.ellipse}>
//                 <img src={ellipse} />
//             </div>
//         </div>
//     );
// }

export default Card;