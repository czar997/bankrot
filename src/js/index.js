import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  const consultTags = document.querySelectorAll('[data-tag="consult-tag"]');
  const consultBtn = document.querySelector('.consulting-tags__box_btn');

  let isShowingAll = true; // Флаг для отслеживания состояния
  const showCount = 9;

  // Функция для показа/скрытия элементов
  function toggleItems() {
    isShowingAll = !isShowingAll; // Инвертируем состояние

    if (isShowingAll) {
      // Показать все элементы
      consultTags.forEach((item) => (item.style.display = 'block'));
      consultBtn.innerText = 'Скрыть теги';
      consultBtn.style.width = '111px';
    } else {
      // Показать только первые showCount элементов
      consultTags.forEach((item, index) => {
        if (index < showCount) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      consultBtn.innerText = '...';
      consultBtn.style.width = '46px';
    }
  }

  if (consultTags && consultBtn) {
    // Инициализация: показать изначальное количество элементов
    toggleItems();

    // Обработчик клика на кнопку
    consultBtn.addEventListener('click', toggleItems);
  }

  //swiper
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    speed: 1200,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    spaceBetween: 10,
  });

  //инпуты

  const inputs = document.querySelectorAll('[data-att]');

  if (inputs) {
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const label = input.nextElementSibling; // Следующий элемент (в данном случае, label)

        if (input.value.trim() !== '') {
          label.classList.add('tothetop');
        } else {
          label.classList.remove('tothetop');
        }
      });
    });
  }

  //Модалка
  const modalBtns = document.querySelectorAll('[data-modal]');
  const modalIssue = document.getElementById('modal-issue');
  if (modalBtns.length > 0 && modalIssue) {
    const closeModal = (event) => {
      const target = event.target;
      if (target === modalIssue || target.closest('.modal__close')) {
        modalIssue.style.opacity = '0';
        document.body.classList.toggle('no-scroll');
        setTimeout(() => {
          modalIssue.style.visibility = 'hidden';
        }, 300);
      }
    };

    const openModal = () => {
      modalIssue.style.opacity = '1';
      modalIssue.style.visibility = 'visible';
      document.body.classList.toggle('no-scroll');
    };

    modalBtns.forEach((btn) => {
      btn.addEventListener('click', openModal);
    });

    modalIssue.addEventListener('click', closeModal);
  }
});
