import React from 'react';

/*Стили*/
import '../css/section3.css';

/*Изображения*/
import arrow from '../img/Arrow.svg';
import ellipse from '../img/Ellipse.png';

class Section3 extends React.Component{
    render(){
        return(
            <section className="author">
                
                <div className="left">
                    <h5>Об организаторе</h5>
                    <p>
                        Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. 
                        <br /> <br />
                        Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету 
                        и планам клиента. Мы никогда не зависим от субпоставщиков 
                        и не свяжемся…<br />
                        <a href="">Читать ещё <img src={arrow} /></a>
                    </p>

                    <h5>Что я представляю</h5>
                    <p>
                        Встречу вас на машине после длительного перелёта.  Качественный подбор места и локации для вашей съемки.  При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае ! 
                        <br />
                        <a href="">Читать ещё <img src={arrow} /></a>
                    </p>
                </div>
                <div className="authorInfo">
                    <img src={ellipse} alt="Marina" />
                    <h5>Марина Иванова</h5>
                    <span>фотограф</span>
                    <a href=''>Показать больше<br /> информации об авторе</a>
                </div>
                <div style={{ clear: 'both'}}></div>
            </section>
        );
    }
}

export default Section3;