const arrow1 = document.querySelector(".right__arrow1"),
    arrow2 = document.querySelector(".right__arrow2"),
    arrow3 = document.querySelector(".right__arrow3"),
    arrow4 = document.querySelector(".right__arrow4"),
    arrow5 = document.querySelector(".right__arrow5"),
    arrow6 = document.querySelector(".right__arrow6"),
    arrow7 = document.querySelector(".right__arrow7"),
    arrow8 = document.querySelector(".right__arrow8"),
    arrow9 = document.querySelector(".right__arrow9"),
    arrow10 = document.querySelector(".right__arrow10"),
    arrow11 = document.querySelector(".right__arrow11"),
    modalWin = document.querySelector(".modal__window"),
    contentModal = document.querySelector('.upper__contnent__modal'),
    closeWin = document.querySelectorAll("[data-close]");

const showModal = function () {
    modalWin.classList.remove("_noactive");
    modalWin.classList.add("_active");
    document.body.style.overflow = 'hidden';
};
const hideModal = function () {
    modalWin.classList.add("_noactive");
    modalWin.classList.remove("_active");  
    document.body.style.overflow = '';  
};


arrow1.addEventListener("click", () => {
    showModal();
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__about__document__education__document">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
    `;   
});

arrow2.addEventListener("click", () => {
    showModal();
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__about__document__education__document">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
    `;   
});

closeWin.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        hideModal();
    });    
});

modalWin.addEventListener("click", (e) => {
    if (e.target === modalWin){
        hideModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalWin.classList.contains('_active')) {
        hideModal();
    }
});

arrow3.addEventListener("click", () => {
    showModal();
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__about__document__education__document">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
        <div class="information__three__big">
            <div class="dot"></div>
            <p>приказ/справка, заверенная подписью <br> и печатью работодателя об отпуске - <br>
            по месту работы (выданная не ранее 10 <br> рабочих дней до дня подачи заявления)</p>
        </div>
        <div class="information__three__small">
            <div class="dot"></div>
            <p>свидетельство о рождении ребенка</p>
        </div>
    `;   
});

arrow4.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__about__document__education__document">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
        <div class="information__four__normal">
            <div class="dot"></div>
            <p>свидетельство о рождении <br> ребенка возрастом от 0 до 7 лет</p>
        </div>
        <div class="information__three__big">
            <div class="dot"></div>
            <p>трудовая книжка (последняя запись, <br> где указана дата приема и увольнения)</p>
        </div>
    `;
    showModal();
});

arrow5.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__about__document__education__document">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
        <div class="information__five__normal__big">
            <div class="dot"></div>
            <p>военный билет, в котором <br> 
            имеется отметка об окончании <br> 
            прохождения военной службы по призыву</p>
        </div>
        <div class="information__five__big">
            <div class="dot"></div>
            <p>чек-лист, заполняемый гражданином, подтверждающий<br> 
            отсутствие факта отнесения гражданина<br>  
            к категории “занятый” в значении определенном<br> 
            статьей 2 закона о занятости, в течение 4 мес.<br> 
            и более с даты окончания им военной службы <br>  
            по призыву (бланк предоставляется в центре занятости)
            </p>
        </div>
        <div class="information__five__normal">
            <div class="dot"></div>
            <p>трудовая книжка (последняя запись, <br> 
            где указана дата приема и увольнения)</p>
        </div>     
    `;
    showModal();
});

arrow6.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__six__normal">
            <div class="dot"></div>
            <p>оригинал аттестата об основном <br> 
            общем образовании и/или оригинал <br> 
            аттестата о среднем общем(полном) <br>
            образовании</p>
        </div>
        <div class="info__six__big">
            <div class="dot"></div>
            <p>подписанное подтверждение гражданином <br>
            факта отсутствия СПО или ВО, в произвольной форме</p>
        </div>   
    `;
    showModal();
});

arrow7.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__seven__normal">
            <div class="dot"></div>
            <p>документ об образовании и (или) квалификации</p>
        </div>
        <div class="info__seven__big">
            <div class="dot"></div>
            <p>чек-лист, заполняемый гражданином, <br> 
            подтверждающий отсутствие факта отнесения <br> 
            гражданина к категории “занятый” в значении <br> 
            определенном статьей 2 закона о занятости, <br> 
            в течение 4 мес. и более с даты выдачи ему <br>
            документа об образовании (бланк <br> 
            предоставляется в центре занятости)
            </p>
        </div>   
    `;
    showModal();
});

arrow8.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__eight__normal">
            <div class="dot"></div>
            <p>документ об образовании и (или) квалификации</p>
        </div>
        <div class="info__eight__big">
            <div class="dot"></div>
            <p>уведомление (предупреждение) об увольнении <br>  
            (в связи с ликвидацией организации либо <br> 
            с прекращением деятельности индивидуального <br> 
            предпринимателя, сокращением численности или <br> 
            штата работников организации, индивидуального <br> 
            предпринимателя и возможным расторжением трудовых <br> 
            договоров), выданное не ранее 10 рабочих дней до <br> 
            дня подачи заявления о прохождении обучения. <br> 
            </p>            
        </div>   
        <div class="info__more__detailed">  
            <a target="_blank" href="https://docs.google.com/document/d/1yGUQdVUfDN1VINBQLqRoGrpI_l2-rTilgE14sTamw0c/edit">Подробнее...</a>
        </div>   
        
    `;
    showModal();
});

arrow9.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__nine__small">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>
        <div class="info__nine__normal">
            <div class="dot"></div>
            <p>оригинал справки с места <br> 
            учебы, выданной не ранее 10 <br> 
            рабочих дней до дня подачи заявления <br>  
            о прохождении обучения; 
            </p>
        </div>   
        <div class="info__nine__big">
            <div class="dot"></div>
            <p>подписанное подтверждение гражданином <br> 
            факта отсутствия получения гранта на <br> 
            обучение или обучения по договорам о целевом <br> 
            обучении, составленное в произвольной форме.
            </p>
        </div>
    `;
    showModal();
});

arrow10.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__ten__small">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>  
        <div class="info__ten__big">
            <div class="dot"></div>
            <p>уведомление (предупреждение) об увольнении <br>  
            (в связи с ликвидацией организации либо <br> 
            с прекращением деятельности индивидуального <br> 
            предпринимателя, сокращением численности или <br> 
            штата работников организации, индивидуального <br> 
            предпринимателя и возможным расторжением трудовых <br> 
            договоров), выданное не ранее 10 рабочих дней до <br> 
            дня подачи заявления о прохождении обучения. <br> 
            </p>
        </div>
        <div class="info__more__detailed">  
            <a target="_blank" href="https://docs.google.com/document/d/1yGUQdVUfDN1VINBQLqRoGrpI_l2-rTilgE14sTamw0c/edit">Подробнее...</a>
        </div> 
    `;
    showModal();
});

arrow11.addEventListener("click", () => {
    contentModal.innerHTML = `
        <div class="info__about__document__passport">
            <div class="dot"></div>
            <p>паспорт</p>                    
        </div>
        <div class="info__eleven__small">
            <div class="dot"></div>
            <p>документ об образовании</p>
        </div>  
        <div class="info__eleven__normal">
            <div class="dot"></div>
            <p>трудовая книжка (последняя <br>
            запись, где указана дата приема и увольнения)
            </p>
        </div>
    `;
    showModal();
});

